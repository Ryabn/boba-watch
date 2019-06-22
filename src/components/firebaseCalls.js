/**
 * @file firebaseCalls.js
 * @copyright Ryan Yang 2019
 * @summary - A set of functions to help organize all the server calls
 * in one place
 */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import swal from 'sweetalert';

let db;
let provider;

/**
 * @function init
 * @description initializes the firestore and fb auth 
 */
let init = () => {
    db = firebase.firestore();
    provider = new firebase.auth.FacebookAuthProvider();
}

/**
 * @function attemptLogin
 * @param {*} callback - function with 1 parameter that gets called
 * on function success. callback should have parameter that gets 
 * the returned data on successful login
 * 
 * @description triggers the firebase redirect login flow
 * 
 */
let attemptLogin = ( callback ) => {
    firebase.auth().signInWithPopup(provider).then((result) => {
        callback(result);
    }).catch((error) =>  {
        swal("Error!", `Login Unsuccessful: ${error}`, "error");
        console.log(error);
    });
}

/**
 * @function checkLogin
 * @param {*} callback - function with 1 parameter that gets called
 * on function success. callback should have parameter that gets 
 * the returned data on successful login
 * 
 * @description checks the firebase redirect login flow to see
 * if login has been successful
 */
let checkLogin = ( callback ) => {
    firebase.auth().getRedirectResult().then((result) => {
        if (result.credential) callback(result);
    }).catch(function(error) {
        swal("Error!", `Login Unsuccessful: ${error}`, "error");
        console.log(error);
    });      
}

/**
 * @function logout
 * @param {*} callback - callback function should trigger a redirect
 * to the login page
 * 
 * @description logs user out.
 */
let logout = ( callback ) => {
    firebase.auth().signOut().then(function() {
        callback();
    }).catch(function(error) {
        swal("Error!", `Login Unsuccessful: ${error}`, "error");
        console.log(error);
    });
}

/**
 * @function getDrinks
 * @param {*} callback - function with 1 parameter that gets called
 * on function success. callback should have parameter that gets 
 * the returned data on successful login
 * 
 * @returns array of drink objects through a callback function
 * 
 * @description Gets all the drinks listed under current user and 
 * returns an array of all the drinks with data reformatted
 */
let getDrinks = ( process ) => {
    let collections = process.init();
    db.collection(`users/${localStorage.getItem('uid')}/drinks`)
        .orderBy('drink.date', 'desc')
        .limit(20)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                process.each(doc).forEach( e => {
                    collections[e.key].push(e.value);
                });          
            });
            process.end(collections);
        }
    );
}

/**
 * @function setupUser
 * 
 * @var defaultProfile - schema for user profile to follow
 * 
 * @description Called when user is brand new. Sets up their profile on firebase
 */
let setupUser = ( callback ) => {
    const defaultProfile = {
        'budget': 300,
        'maxDrinks': 15,
        'public': false
    }
    db.collection(`users/${localStorage.getItem('uid')}/profile`)
    .set( defaultProfile )
    .then( ( resp ) => {
        callback( resp );
    }).catch(function(error) {
        swal("Error!", `${error}`, "error");
    });
}

let updateUser = ( userProperties ) => {
    // const data = { 
    //     "user": {
    //         "public": this.state.userPublic
    //     }
    // };
    // fetch(`https://api.boba.watch/users/${this.props.userId}/${this.props.accessToken}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    // }
    // ).then(resp => {
    //     if (!resp.ok) {
    //         throw Error(resp.statusText);
    //     }
    //     return resp;
    // }).then(resp => {
    //     return resp.json();
    // }).then(resp => {
    //     localStorage.setItem('userPublic', this.state.userPublic);
    //     swal("Success!", "Your privacy settings have been changed", "success");
    // }).catch(err => {
    //     swal("Error!", "Error changing privacy setting", "error");
    // });
    // fetch(`https://api.boba.watch/users/${userId}/${accessToken}`
    // ).then(resp => {
    //     if (!resp.ok) {
    //         throw Error(resp.statusText);
    //     }
    //     return resp;
    // }).then(resp => {
    //     return resp.json();
    // }).then(resp => {
    //     localStorage.setItem('userSpendMax', resp.budget);
    //     localStorage.setItem('userDrinkMax', resp.maxDrinks);
    //     localStorage.setItem('userPublic', resp.public);
    //     this.props.history.push('./dash');
    // }).catch(err => {
    //     swal("Error!", "I had trouble getting your drinks.", "error");
    // });
}

let addDrink = ( data, callback ) => {
    db.collection(`users/${localStorage.getItem('uid')}/drinks`)
    .add( data )
    .then( ( resp ) => {
        callback( resp );
    }).catch(function(error) {
        swal("Error!", `${error}`, "error");
    });
}

let deleteDrink = () => {

}

export default {
    init: init,
    login: {
        check: checkLogin,
        attempt: attemptLogin
    },
    logout: logout,
    user: {
        setup: setupUser,
        update: updateUser
    },
    drinks: {
        get: getDrinks,
        add: addDrink,
        delete: deleteDrink
    }
}