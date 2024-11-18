// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.rnv.VITE_apiKey,
  authDomain: import.meta.rnv.VITE_authDomain,
  projectId: import.meta.rnv.VITE_projectId,
  storageBucket: import.meta.rnv.VITE_storageBucket,
  messagingSenderId: import.meta.rnv.VITE_messagingSenderId,
  appId: import.meta.rnv.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app