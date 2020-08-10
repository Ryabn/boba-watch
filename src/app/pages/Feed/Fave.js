import React, {useState, useEffect} from 'react';
import FirebaseUser from '../../controller/backend';
import {getFaves as getCloudFirebaseFaves} from '../../libs/firestore';
import {FeedItemWithAvatar} from './FeedItem';
import {add, exists, getFaves as getLocalDexieFaves} from '../../libs/dexie';

const Fave = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let feedposts = [];
        getLocalDexieFaves().then(posts => {
            feedposts = feedposts.concat(posts);
            setPosts(feedposts);
        });
        const recursivelyUpdate = (startAfter) => {
            getCloudFirebaseFaves(FirebaseUser.get.currentUser.user.uid, 1, startAfter).then(docSnap => {
                let cursor = docSnap.docs[0];
                if(cursor === undefined) return;
                exists(cursor.id).then((post) => {
                    if(post?.fave !== 1){
                        throw new Error('not faved in db');
                    }
                }).catch(err => {    
                    add({id: cursor.id, fave: 1, ...cursor.data()});
                    feedposts.unshift({id: cursor.id, ...cursor.data()});
                    setPosts(feedposts);
                    recursivelyUpdate(cursor);
                })
            });
        }
        recursivelyUpdate(0);
    }, []);
    return posts.map(feedContent => 
        <FeedItemWithAvatar 
            key={feedContent.id} 
            place={feedContent.location} 
            isLiked
            {...feedContent} 
        />
    );
}

export default Fave;
