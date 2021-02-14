import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAB5ugyuc_EhxltqEeIVMQXpikXuMhd6-4",
  authDomain: "burger-builder-website.firebaseapp.com",
  databaseURL: "https://burger-builder-website-default-rtdb.firebaseio.com",
  projectId: "burger-builder-website",
  storageBucket: "burger-builder-website.appspot.com",
  messagingSenderId: "329211075104",
  appId: "1:329211075104:web:891b015eff05d2112dba45",
});

export const alterAuth = app.auth();

export default app;
