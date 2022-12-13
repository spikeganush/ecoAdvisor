import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKmkrMZsspzdsm-sJYAXm_jQxecIG-_As",
  authDomain: "ecoadvisor-c870f.firebaseapp.com",
  projectId: "ecoadvisor-c870f",
  storageBucket: "ecoadvisor-c870f.appspot.com",
  messagingSenderId: "27756676613",
  appId: "1:27756676613:web:e371aa399d09d621a2fe6c",
  measurementId: "G-1HJD4VGFPC",
};

export const initFirebase = initializeApp(firebaseConfig);
