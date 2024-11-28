const admin = require("firebase-admin");
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;

// Load service account dynamically
const serviceAccount = require(serviceAccountPath);

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://edu-erp-7eb63.firebaseio.com",
});

// Initialize Firestore and Auth
const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
