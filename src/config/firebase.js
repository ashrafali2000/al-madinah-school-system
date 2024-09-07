import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHLETTRlYvzMp_fP_w-oEeqfpMrCOufkQ",
  authDomain: "admin-panel-cabcd.firebaseapp.com",
  projectId: "admin-panel-cabcd",
  storageBucket: "admin-panel-cabcd.appspot.com",
  messagingSenderId: "414769579935",
  appId: "1:414769579935:web:ac607398d9a98929795faa",
  measurementId: "G-ZGX8Z4PM14",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookAuth = new FacebookAuthProvider();

export { db, storage, serverTimestamp, auth, provider, facebookAuth };
