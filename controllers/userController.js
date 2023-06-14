const database = require('../config/database');

// Function to store a string in the database
function storeStringInFirebase(string) {
    // Generate a new unique key for the string
    const newStringRef = database.ref('strings').push();

    // Set the string as the value of the new key
    newStringRef.set(string)
        .then(() => {
            console.log('String stored in Firebase successfully');
        })
        .catch((error) => {
            console.error('Error storing string in Firebase:', error);
        });
}

// Usage example
const myString = 'Hello,     Firebase!';

storeStringInFirebase(myString);
