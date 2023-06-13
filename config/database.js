// const db = require('./path/to/database.js'); // Replace with the path to your database.js file
const firebase = require('firebase');


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8NvNbSK9W6fuwEm-zU1qX12DwCPh6qYs",
    authDomain: "remember-and-missed.firebaseapp.com",
    projectId: "remember-and-missed",
    storageBucket: "remember-and-missed.appspot.com",
    messagingSenderId: "239193691626",
    appId: "1:239193691626:web:b54218f71857566f834e93",
    measurementId: "G-WB09QNHPW6"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = firebase.database();

module.exports = database;
