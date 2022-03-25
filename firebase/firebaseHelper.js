// ! this js will handle all queries

// * All imports 
import * as FirebaseUser from '/firebase/firebaseUsers.js';
// * All imports 

// * Dictionary
//snapshot==records
//path==address
// * Dictionary

// * Handling event that retrieves the active user of this website
export function getSnapShot(path) {
    
    return new Promise(function(resolve, reject) {
        FirebaseUser
            .checkActiveUser()
            .then(function(value) {
                firebase
                    .database()
                    .ref(`${path}/${value.uid}`) //address
                    .once('value') //attributes
                    .then(function(snapshot) {
                        //
                        resolve(snapshot.val());
                    })
            })
    })
        
}