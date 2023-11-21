import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDP6y4dvc1lXKSdGcHDrjURl3OXsg21fM8",
  authDomain: "ecommercecroqueteando.firebaseapp.com",
  projectId: "ecommercecroqueteando",
  storageBucket: "ecommercecroqueteando.appspot.com",
  messagingSenderId: "681537667230",
  appId: "1:681537667230:web:088a1f0f7dce3da8b4fb8f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

