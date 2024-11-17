// Import required modules
console.log("Starting the server...");
console.log("Initializing Firebase Admin SDK...");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://FrontierProductRecommendation.firebaseio.com"
});
console.log("Firebase initialized!");

console.log("Setting up middleware...");
app.use(bodyParser.json());
app.use(cors());
console.log("Middleware setup complete!");

console.log("Starting server...");
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const firebase = require('firebase');
require('dotenv').config(); // Load environment variables

// Firebase Admin SDK Setup
const admin = require('firebase-admin');
let serviceAccount;

try {
  // Load Firebase service account JSON file
  serviceAccount = require('\Users\nxm210089\Downloads\FrontierProductRecommendation.VS\src');
} catch (error) {
  console.error("Error loading Firebase service account file:", error.message);
  process.exit(1); // Exit if Firebase configuration is invalid
}

try {
  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://FrontierProductRecommendation.firebaseio.com" // Replace with your actual Firebase project URL
  });
  console.log("Firebase initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase Admin SDK:", error.message);
  process.exit(1); // Exit if initialization fails
}

const db = admin.firestore(); // Firestore instance

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Basic route to test the server
app.get('/', (req, res) => {
  res.send("Welcome to the Backend API!"); // Update with a simple response for testing
});

// Routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Global error handlers
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

app.use((error, req, res, next) => {
  console.error("Unexpected Error:", error.message);
  res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
