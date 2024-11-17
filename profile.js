const express = require('express');
const router = express.Router();
const db = require('../app.js').db;

// Get profile data
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).send('User not found');
    }
    res.render('profile', { user: userDoc.data() });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
