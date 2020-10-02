import React, {useState, useEffect, useContext} from 'react';
import {toMoney, ellipsisText} from '../../components/textUtil.js';
import {getUserBlog} from '../../libs/firestore';
import {Card} from '../../components';
import {useTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom'
import {add, remove, exists} from '../../libs/dexie';
import StarRatingComponent from 'react-star-rating-component';
import {ReactComponent as StarEmptyIcon} from './star_empty.svg';
import {ReactComponent as StarFilledIcon} from './star_filled.svg';
import {likeBlogPost} from '../../libs/firestore';
import HeartEmptyIcon from '@material-ui/icons/FavoriteBorderRounded';
import HeartFilledIcon from '@material-ui/icons/FavoriteRounded';
import Filter from 'bad-words';
import AuthUserContext from '../../controller/contexts/AuthUserContext.js';
import { getImageAttribute } from '../../libs/cloud-storage.js';

let filter = new Filter();

const WithAvatar = ({uid, history, ...data}) => {
    const [person, setPerson] = useState(null);
    useEffect(() => {
        if(person !== null) return;
        (async() => {
            getUserBlog(uid).then(res => {
                setPerson(res.data());
            }).catch(err => {console.log(err)});
        })();
    }, [uid, person]);
    const visitProfile = () => {
        history.push('/blog/' + uid);
    }
    return (
        <div className="feed-avatar">
            <div className="user" onClick={visitProfile}>
                {/* Best way to display blank image is using a base64 string. Other implementations make extra get req or broken html */}
                <img src={person?.profile ?? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="} alt=" " />
                <h2>{filter.clean(person?.name ?? "Boba Bro")}</h2>
            </div>
            <FeedItem {...data} person={person} uid={uid}/>
        </div>
    );
}
const FeedItem = ({match, location, children, staticContext, expandable=true, person, isLiked=false, setExpand, ...post}) => {
    const [authUser] = useContext(AuthUserContext);
    const {t} = useTranslation();
    const [liked, setLiked] = useState(isLiked);
    const [imageAttr, setImageAttr] = useState(false);
    const [likeDisplay, setLikeDisplay] = useState(post?.likes ?? 0);
    const toggleFavorite = () => {
        likeBlogPost(authUser.uid, post.id, post, !liked).then(() => {
            setLikeDisplay(likeDisplay + (liked ? -1 : 1));
            liked ? remove(post) : add(post);
            setLiked(!liked);
        }).catch(err => {
            remove(post);
            setLiked(false);
        });
    }
    useEffect(() => {
        if(!isLiked){
            exists(post.id).then(found => { 
                if(found) setLiked(true);
            });
        }
    }, [isLiked, post.id]);
    useEffect(() => {
        if(!post?.image) return;
        (async() => {setImageAttr(await getImageAttribute(post.image, 'thumbnail'))})();
    }, [post.image]);

    return (
        <Card className="feed-item">
            <div className="header">
                <span>{filter.clean(post.name)}</span>
                <p className="favorite-amount">
                    {isLiked ? '' : likeDisplay > 999 ? ((likeDisplay / 100) >> 0) + 'k' : (likeDisplay < 0 ? 0 : likeDisplay) }
                </p>
                <div className="favorite" onClick={toggleFavorite}>
                    {liked ? <HeartFilledIcon /> : <HeartEmptyIcon/>}
                </div>
            </div>
            <div className={`feed-item-content--base item-content${imageAttr ? '--with-image' : ''}`}>
                {imageAttr && <img src={imageAttr} className="user-upload" alt="user-upload"/>}
                <p className="location">{filter.clean(post.place)}</p>
                <p className="price">{t('$')}{toMoney(post.price)}</p>
                {(post?.rating !== null && post?.rating !== undefined && post?.rating !== 0) ?
                    <div className="ratings-holder">
                        <StarRatingComponent 
                            name="rating" 
                            starCount={5}
                            value={post.rating}
                            renderStarIcon={(i, v) => (i <= v ? <StarFilledIcon /> : <StarEmptyIcon />)}
                        />
                    </div>
                    :
                    <div></div>
                }
                <p className="date">{(new Date(post.date).toDateString())}</p>
                <p className="description">{filter.clean(expandable ? ellipsisText(post.description, 50) : post.description)}</p>
                {expandable && <div className="expand-wrapper">
                    <button onClick={() => {setExpand({show: true, person: person, ...post})}}>view full post</button>
                </div>}
                {children}
            </div>
        </Card>
    );
}


export default FeedItem;
export const FeedItemWithAvatar = withRouter(WithAvatar);