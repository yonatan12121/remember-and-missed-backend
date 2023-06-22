const express = require('express');
const app = express();
const usersRoutes = require('./routes/userRoutes');
const cors = require('cors');

// Enable CORS
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/', usersRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
