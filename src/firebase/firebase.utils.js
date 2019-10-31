import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAdNowrVEsbVHTM_fB3LWAwjldERmL6qc",
    authDomain: "crwn-db-9c64e.firebaseapp.com",
    databaseURL: "https://crwn-db-9c64e.firebaseio.com",
    projectId: "crwn-db-9c64e",
    storageBucket: "crwn-db-9c64e.appspot.com",
    messagingSenderId: "1092635782216",
    appId: "1:1092635782216:web:fff5583d47506ca22d3c7d",
    measurementId: "G-TP6TYF3614"
};

//this function will help us store the user auth object we get from user authentication and store it in our firebase database. 

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt, 
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
