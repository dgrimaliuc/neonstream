// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD383JVgNM6AHfLo5nwiu2LiEOmb3B16DU',
  authDomain: 'neon-stream.firebaseapp.com',
  databaseURL:
    'https://neon-stream-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'neon-stream',
  storageBucket: 'neon-stream.appspot.com',
  messagingSenderId: '559630263936',
  appId: '1:559630263936:web:e65ea070b673e9d774e865',
  measurementId: 'G-L108QLL0LL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics =
getAnalytics(app);
