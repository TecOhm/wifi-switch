

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIFKTSPE8iIp3wAEoX9I2Xykw-j2f4bn8",
  authDomain: "wifi-switch-app.firebaseapp.com",
  projectId: "wifi-switch-app",
  storageBucket: "wifi-switch-app.appspot.com",
  messagingSenderId: "307257468764",
  appId: "1:307257468764:web:aa05c32bc7bc911260c399",
  measurementId: "G-BWDNHXF1FV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} ;
  export default db;