const express = require('express');
const firebase = require('firebase');
const router = express.Router();

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);

// Sign up route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    res.status(200).send(userCredential.user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    res.status(200).send(userCredential.user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
