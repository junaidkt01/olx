import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDRhy-UCNaBiYRWuss2-rCqAOpG7Kp0PyE",
  authDomain: "olx-clone-f5cb9.firebaseapp.com",
  projectId: "olx-clone-f5cb9",
  storageBucket: "olx-clone-f5cb9.appspot.com",
  messagingSenderId: "881984443708",
  appId: "1:881984443708:web:1d641c6336e02bc4873a39",
  measurementId: "G-MD3T2H2J05",
};

export default firebase.initializeApp(firebaseConfig);
