import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrtt3tith_zlEyIZ3ZCrM_fVTF80WMsXE",
  authDomain: "football-management-5ae84.firebaseapp.com",
  projectId: "football-management-5ae84",
  storageBucket: "football-management-5ae84.appspot.com",
  messagingSenderId: "263523307080",
  appId: "1:263523307080:web:d6436d6c096a391315527d",
  measurementId: "G-CG6YDW1TBG",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
