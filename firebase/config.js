import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCxJ6YzEdE8kgNqrt1Z5Z0LDa35OM0B3hE",
    authDomain: "bizwap-4c342.firebaseapp.com",
    projectId: "bizwap-4c342",
    storageBucket: "bizwap-4c342.appspot.com",
    messagingSenderId: "201704701261",
    appId: "1:201704701261:web:89bc1185388504860ccb04",
    measurementId: "G-DR8RP27YJ4"
};

const config = initializeApp(firebaseConfig);
export default config;