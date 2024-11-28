const express = require("express");
const { db, auth } = require("../firebase");
const router = express.Router();

// Test Firestore
router.get("/test-db", async (req, res) => {
  try {
    const docRef = db.collection("testCollection").doc("testDoc");
    await docRef.set({ message: "Firebase is connected!" });
    res.send({ success: true, message: "Firestore test completed!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

// Test Authentication
router.get("/test-auth", async (req, res) => {
  try {
    const user = await auth.createUser({
      email: "testuser@example.com",
      password: "testpassword123",
    });
    res.send({ success: true, user });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

module.exports = router;
