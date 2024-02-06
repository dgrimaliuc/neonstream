// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
  addDoc,
  writeBatch,
  doc,
} from "firebase/firestore";
import { deref } from "../middleware/utils.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjVaDH2dQ9juNq1hpIZc18lgf5zmz3pME",
  authDomain: "neon-wave-88837.firebaseapp.com",
  projectId: "neon-wave-88837",
  storageBucket: "neon-wave-88837.appspot.com",
  messagingSenderId: "516191764832",
  appId: "1:516191764832:web:9f59a134bf2d6b784ede05",
  measurementId: "G-KJW82JWJWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getMovies() {
  const coll = collection(db, "content/movies/injected");
  const docs = await getDocs(coll);
  const data = docs.docs.map(doc => doc.data());
  return data;
}

export async function getSeries() {
  const coll = collection(db, "content/series/injected");
  const docs = await getDocs(coll);
  const data = docs.docs.map(doc => doc.data());
  return data;
}

export async function getAllContent() {
  const coll = collectionGroup(db, "injected");
  const docs = await getDocs(coll);
  const data = docs.docs.map(doc => doc.data());
  return data;
}

export async function addMovie(movie) {
  const coll = collection(db, "content/movies/injected");
  const returnedData = await addDoc(coll, movie);
  return deref(returnedData.path, null, 2);
}

export async function addMovies(movies) {
  const batch = writeBatch(db);

  movies.forEach(movie => {
    const docRef = doc(db, "content/movies/injected", movie.en.title);
    batch.set(docRef, movie);
  });
  await batch.commit();
}

export { db };
