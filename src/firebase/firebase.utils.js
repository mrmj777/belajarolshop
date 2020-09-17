import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyCNWhl1VcGNlD6ykcKKiM2ixs-dGaiz9Xo",
        authDomain: "belajarolshop-d72f0.firebaseapp.com",
        databaseURL: "https://belajarolshop-d72f0.firebaseio.com",
        projectId: "belajarolshop-d72f0",
        storageBucket: "belajarolshop-d72f0.appspot.com",
        messagingSenderId: "806694330696",
        appId: "1:806694330696:web:f487fa989c104ddce8537d"
      };
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;