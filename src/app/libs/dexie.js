import Dexie from 'dexie';
import firebase from 'firebase';
import {blogPostGetOptions} from '../defaults';

const db = new Dexie('blogposts');

db.version(1).stores({
    blogposts: "&id, uid, date, likes, location, name, price, fave, edited, published"
});

const add = (data) => {
    return db.blogposts.put({
        ...data,
        published: new firebase.firestore.Timestamp(
            data.published.seconds, 
            data.published.nanoseconds
        ).toDate().toString(),
    });
}
const exists = (id) => {
    return new Promise((res, rej) => {
        db.blogposts.get(id, post => {post === undefined ? rej() : res(post)})
    });
}
const getFaves = async(options) => {
    return new Promise(res => {
        db.blogposts
        .toArray(posts => {res(posts)});
    });
}

export {
    add,
    exists,
    getFaves,
}