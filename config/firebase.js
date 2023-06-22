const admin = require('firebase-admin');
const serviceAccount = require('../config/remember-and-missed-firebase-adminsdk-xexwh-32ce296918.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://remember-and-missed.firebaseio.com' // Replace with your Firestore database URL
});

const db = admin.firestore();

// Check if the database connection is successful
db.collection('dummyCollection')
    .get()
    .then(() => {
        console.log('Firebase Firestore connected successfully!');
    })
    .catch((error) => {
        console.error('Firebase Firestore connection error:', error);
    });

module.exports = db;
