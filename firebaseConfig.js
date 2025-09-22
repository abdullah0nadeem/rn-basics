import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1LpixndmatxuXnWEskpUZKh5NR9m8X2U",
  authDomain: "notes-app-b933c.firebaseapp.com",
  projectId: "notes-app-b933c",
  storageBucket: "notes-app-b933c.firebasestorage.app",
  messagingSenderId: "285681318106",
  appId: "1:285681318106:web:050c91da58bafcd205cde3",
  measurementId: "G-PS56VNEW3D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
