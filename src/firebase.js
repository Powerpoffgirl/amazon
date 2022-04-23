// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCMHjAmjE6DRTz8bYwLQEesuBFjSdtL9g0",
    authDomain: "fir-66a45.firebaseapp.com",
    projectId: "fir-66a45",
    storageBucket: "fir-66a45.appspot.com",
    messagingSenderId: "596779699586",
    appId: "1:596779699586:web:a9233555e114883ce7139b",
    measurementId: "G-F5BRBSSQS0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};