const firebase = require('firebase')
firebaseConfig = {
	apiKey: "AIzaSyAGtJRtN9SGCjxQ-ZS8CViDY0Kakn1e3hg",
	authDomain: "social-development-5dc93.firebaseapp.com",
	projectId: "social-development-5dc93",
	storageBucket: "social-development-5dc93.appspot.com",
	messagingSenderId: "288665373270",
	appId: "1:288665373270:web:1e593c67b12828f94e89f7",
	measurementId: "G-XQR5BRCX1X"
  };
firebase.initializeApp(firebaseConfig);
const db=firebase.Firestore();
const user=db.collection("Users");
module.exports = Users;