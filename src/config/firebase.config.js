import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD83HoRaqCXCjkTnRV48GcUTVZq0w0Z6tQ",
    authDomain: "coderc-react-authentication.firebaseapp.com",
    projectId: "coderc-react-authentication",
    storageBucket: "coderc-react-authentication.appspot.com",
    messagingSenderId: "32319050599",
    appId: "1:32319050599:web:a905475b2caebfe0ae15c2",
    measurementId: "G-ENVM94Y08B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
