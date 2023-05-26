import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7N6mfGDZmS8LUmg7dCr-IZM3tgDDqjCA",
    authDomain: "clone-260d7.firebaseapp.com",
    projectId: "clone-260d7",
    storageBucket: "clone-260d7.appspot.com",
    messagingSenderId: "998100827512",
    appId: "1:998100827512:web:7bab6d67085ae4e9225c8d"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db =getFirestore(firebaseApp);
const auth = getAuth();


export {firebaseApp, db ,auth};
