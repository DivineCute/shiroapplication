import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-kXIU_0PcIEO82GzXfmF9MRkAu2Qeqyg",
  authDomain: "shiroapp-ae15f.firebaseapp.com",
  projectId: "shiroapp-ae15f",
  storageBucket: "shiroapp-ae15f.appspot.com",
  messagingSenderId: "249340986961",
  appId: "1:249340986961:web:807911fcd878d58ca75a70"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);