const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

const controller = require('./controllers/userController');

// Define your routes and middleware here

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
app.post('/storeString', (req, res) => {
    const myString = 'Hello, Firebase!';
    controller.storeStringInFirebase(myString);
    res.send('String stored in Firebase!');
});