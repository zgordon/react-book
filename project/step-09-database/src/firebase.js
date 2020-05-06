import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBabjCCC5wUxZgB4pru-nmBXM1BEIyszEw",
  authDomain: "react-explained-blog-demo.firebaseapp.com",
  databaseURL: "https://react-explained-blog-demo.firebaseio.com",
  projectId: "react-explained-blog-demo",
  storageBucket: "react-explained-blog-demo.appspot.com",
  messagingSenderId: "983332576012",
};
firebase.initializeApp(config);
export default firebase;
