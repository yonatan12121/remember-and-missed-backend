const db = require('./path/to/database.js'); // Replace with the path to your database.js file

// Example: Reading data from Firebase Realtime Database
const ref = db.ref('users');
ref.once('value', (snapshot) => {
    const users = snapshot.val();
    console.log(users);
});

// Example: Writing data to Firebase Realtime Database
const newUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com'
};
const newUserRef = db.ref('users').push();
newUserRef.set(newUserData)
    .then(() => {
        console.log('New user data written successfully');
    })
    .catch((error) => {
        console.error('Error writing new user data:', error);
    });
