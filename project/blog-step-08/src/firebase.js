import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDzf17-vXsBEAVMMGputPU7xInrytpyQQc",
  authDomain: "test-react-explained-blog.firebaseapp.com",
  databaseURL: "https://test-react-explained-blog.firebaseio.com",
  projectId: "test-react-explained-blog",
  storageBucket: "test-react-explained-blog.appspot.com",
  messagingSenderId: "447102723183"
};
firebase.initializeApp(config);
export default firebase;
