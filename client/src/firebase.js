// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-51e41.firebaseapp.com",
  projectId: "mernblog-51e41",
  storageBucket: "mernblog-51e41.appspot.com",
  messagingSenderId: "155019436562",
  appId: "1:155019436562:web:34aa66193e2522a8cceecb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
