import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCmy9W__wBov1oOPmSl7MGhcEc5i8mKX1o",
  authDomain: "reactchat-project-5ef4a.firebaseapp.com",
  projectId: "reactchat-project-5ef4a",
  storageBucket: "reactchat-project-5ef4a.firebasestorage.app",
  messagingSenderId: "585712335305",
  appId: "1:585712335305:web:b2af36b22e00e7668fd018"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()