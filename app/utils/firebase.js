import firebase from 'firebase/app';
const firebaseConfig = {

    apiKey: "AIzaSyB8uTuCsOtc1yS5nTGUJkwThmenj2ADV_o",
    authDomain: "twitter-app-c34ce.firebaseapp.com",
    databaseURL: "https://twitter-app-c34ce.firebaseio.com",
    projectId: "twitter-app-c34ce",
    storageBucket: "twitter-app-c34ce.appspot.com",
    messagingSenderId: "614515492118",
    appId: "1:614515492118:web:525c7543ab73688581fc37"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);