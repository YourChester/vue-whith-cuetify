import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAHaYcqiAjtxg3gP75s2N-2XxVLU0CCcpk",
  authDomain: "vuetify-todo-425f4.firebaseapp.com",
  databaseURL: "https://vuetify-todo-425f4.firebaseio.com",
  projectId: "vuetify-todo-425f4",
  storageBucket: "vuetify-todo-425f4.appspot.com",
  messagingSenderId: "305667455965",
  appId: "1:305667455965:web:8e433d81328f8442"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true});

export default db;