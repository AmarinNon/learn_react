import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyAKy-UFerWtwQlOVQqyYkVHghVjU4L73bY",
    authDomain: "learnreact-258df.firebaseapp.com",
    projectId: "learnreact-258df",
    storageBucket: "learnreact-258df.appspot.com",
    messagingSenderId: "129639803532",
    appId: "1:129639803532:web:7999f7f3c2bde58c15e9a9"
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};