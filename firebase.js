import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyCgbNnfuRdlc4c7Yu077ZnUpDXvjltQY34",
  authDomain: "lolz-22764.firebaseapp.com",
  projectId: "lolz-22764",
  storageBucket: "lolz-22764.appspot.com",
  messagingSenderId: "55769011222",
  appId: "1:55769011222:web:f6bf7f38a8aca9f0a25137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
