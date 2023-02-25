const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;
const url = 'mongodb+srv://cs196:cs1966@userdata.sn7wv.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'myproject';
const usersCollection = 'users';

app.use(bodyParser.urlencoded({ extended: true })); 

// Register a new user
app.post('/register', function(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) {
      console.log(err);
      return res.status(500).send('Error hashing password');
    }

    // Connect to the MongoDB database
    MongoClient.connect(url, function(err, client) {
      if (err) {
        console.log(err);
        return res.status(500).send('Error connecting to database');
      }

      // Get the users collection
      const db = client.db(dbName);
      const users = db.collection(usersCollection);

      // Check if the email is already registered
      users.findOne({ email: email }, function(err, user) {
        if (err) {
          console.log(err);
          return res.status(500).send('Error finding user');
        }

        // If the email is already registered, return an error response
        if (user) {
          return res.status(400).send('Email already registered');
        }

        // Insert the new user into the database
        users.insertOne({ username: username, email: email, password: hash }, function(err, result) {
          if (err) {
            console.log(err);
            return res.status(500).send('Error inserting user');
          }

          // Return a success response
          return res.send('User registered');
        });
      });
    });
  });
});

// Handle a login request
app.post('/login', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  // Connect to the MongoDB database
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log(err);
      return res.status(500).send('Error connecting to database');
    }

    // Get the users collection
    const db = client.db(dbName);
    const users = db.collection(usersCollection);

    // Find the user with the matching email
    users.findOne({ email: email }, function(err, user) {
      if (err) {
        console.log(err);
        return res.status(500).send('Error finding user');
      }

      // If no user is found, return an error response
      if (!user) {
        return res.status(401).send('Invalid email or password');
      }

      // Compare the password to the hashed password stored in the database
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          console.log(err);
          return res.status(500).send('Error comparing passwords');
        }

        // If the password doesn't match, return an error response
        if (!result) {
          return res.status(401).send('Invalid email or password');
        }

        // If the password matches, return a success response
        return res.send('Login successful');
      });
    });
  });
});

// Start the server
app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}`);
});