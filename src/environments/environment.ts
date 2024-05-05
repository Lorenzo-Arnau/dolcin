// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const alreadyCreatedAps = getApps();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdYHt5nNYSp8L3Z7YG7bE58yfFQU5nK4E",
  authDomain: "dolcin-proj.firebaseapp.com",
  projectId: "dolcin-proj",
  storageBucket: "dolcin-proj.appspot.com",
  messagingSenderId: "723712368160",
  appId: "1:723712368160:web:d8e0c7c044eb9a75be2645",
  databaseURL: "https://dolcin-proj-default-rtdb.europe-west1.firebasedatabase.app"
};
export const firebaseConfigExport = {
  production:false,
  firebase:{
    apiKey: "AIzaSyDdYHt5nNYSp8L3Z7YG7bE58yfFQU5nK4E",
    authDomain: "dolcin-proj.firebaseapp.com",
    projectId: "dolcin-proj",
    storageBucket: "dolcin-proj.appspot.com",
    messagingSenderId: "723712368160",
    appId: "1:723712368160:web:d8e0c7c044eb9a75be2645",
    databaseURL: "https://dolcin-proj-default-rtdb.europe-west1.firebasedatabase.app"
  }
};

// Initialize Firebase
//const app = alreadyCreatedAps.length === 0 ? initializeApp(firebaseConfig) : console.log(alreadyCreatedAps);
