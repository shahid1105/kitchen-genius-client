// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCf-fJDiSiP5jGgBLoDGDlKWXNiBJzpNVE",
    authDomain: "kitchen-genius-client.firebaseapp.com",
    projectId: "kitchen-genius-client",
    storageBucket: "kitchen-genius-client.appspot.com",
    messagingSenderId: "684060084174",
    appId: "1:684060084174:web:503a0a31043e09fd890d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app; 