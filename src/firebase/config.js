// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"



// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAtr5fZn07ze7Fjyjg34OAT1A_oJpVqvEQ",
    authDomain: "myshop-11fb0.firebaseapp.com",
    projectId: "myshop-11fb0",
    storageBucket: "myshop-11fb0.appspot.com",
    messagingSenderId: "388177257986",
    appId: "1:388177257986:web:64d16e4d6047bd88ece91b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const database1 = getDatabase(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export default app;