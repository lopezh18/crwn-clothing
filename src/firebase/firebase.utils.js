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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
