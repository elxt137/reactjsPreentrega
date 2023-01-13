import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrNL-DEwgAuihO6RwVYmOYo56_Kp5ZmTU",
  authDomain: "cino-tag.firebaseapp.com",
  projectId: "cino-tag",
  storageBucket: "cino-tag.appspot.com",
  messagingSenderId: "579608069518",
  appId: "1:579608069518:web:3250b5a04e705f8a0950df"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />

);

