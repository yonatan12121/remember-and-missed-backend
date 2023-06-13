const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


// Define your routes and middleware here

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
