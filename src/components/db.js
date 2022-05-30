import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCD7P1wv4W7-dx-KER2Rycpem3seL8Flww",
  authDomain: "vuechat-5635f.firebaseapp.com",
  projectId: "vuechat-5635f",
  storageBucket: "vuechat-5635f.appspot.com",
  messagingSenderId: "238176228298",
  appId: "1:238176228298:web:4c226a58b6069410727533",
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
