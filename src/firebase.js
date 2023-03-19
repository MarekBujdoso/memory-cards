// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIrIjldbEDbxP6kvaC_jc1OsEcVwWcQeU",
  authDomain: "memory-cards-e6634.firebaseapp.com",
  projectId: "memory-cards-e6634",
  storageBucket: "memory-cards-e6634.appspot.com",
  messagingSenderId: "837287879154",
  appId: "1:837287879154:web:0c262ad8d563f6d468cb6b",
  measurementId: "G-1S2M941Z6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

export  { db }