const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const faqRoutes = require('./routes/faq');
const profileRoutes = require('./routes/profile');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

// Initialize Firebase Admin SDK
try {
  const serviceAccount = require('~Users/.frontierproductsrecommendation.json'); // Ensure correct relative path
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://FrontierProductsRecommendation.firebaseio.com`, // Replace with your Firebase Realtime Database URL if used
  });
  console.log('Firebase Admin SDK initialized successfully.');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error.message);
}

// Database reference
const db = admin.firestore();
app.locals.db = db;

// Routes
app.use('/auth', authRoutes);
app.use('/faq', faqRoutes);
app.use('/profile', profileRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Frontier Product Recommendation App!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, db };
