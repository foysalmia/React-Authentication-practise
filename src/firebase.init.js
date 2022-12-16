import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcwQyHfTnaFgFcUMBSZRBNWO8LtH4Jksg",
    authDomain: "authentication-practises.firebaseapp.com",
    projectId: "authentication-practises",
    storageBucket: "authentication-practises.appspot.com",
    messagingSenderId: "711829712114",
    appId: "1:711829712114:web:cafd70d47769386f51b46b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;