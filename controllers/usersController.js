const db = require('../config/firebase');

// Add a user document to the "users" collection
exports.addUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        name,
        email
    };

    db.collection('users')
        .add(newUser)
        .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
            res.status(200).json({ message: 'User added successfully.' });
        })
        .catch((error) => {
            console.error('Error adding document: ', error);
            res.status(500).json({ error: 'An error occurred while adding the user.' });
        });
};

// Get all users from the "users" collection
exports.getUsers = (req, res) => {
    db.collection('users')
        .get()
        .then((snapshot) => {
            const users = [];
            snapshot.forEach((doc) => {
                const user = doc.data();
                users.push(user);
            });
            res.status(200).json(users);
        })
        .catch((error) => {
            console.error('Error getting users: ', error);
            res.status(500).json({ error: 'An error occurred while retrieving users.' });
        });
};

// Get a single user by ID from the "users" collection
exports.getUserById = (req, res) => {
    const userId = req.params.id;

    db.collection('users')
        .doc(userId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                const user = doc.data();
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found.' });
            }
        })
        .catch((error) => {
            console.error('Error getting user: ', error);
            res.status(500).json({ error: 'An error occurred while retrieving the user.' });
        });
};
