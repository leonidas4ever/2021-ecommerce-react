import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyB6j5mCtkExjbW0VB-936hjos1zzJQSnL8",
  
    authDomain: "ecommerce-rl4-8cdd8.firebaseapp.com",
  
    projectId: "ecommerce-rl4-8cdd8",
  
    storageBucket: "ecommerce-rl4-8cdd8.appspot.com",
  
    messagingSenderId: "112362502394",
  
    appId: "1:112362502394:web:8e9df64fcd2981d9faf143"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  export {auth}