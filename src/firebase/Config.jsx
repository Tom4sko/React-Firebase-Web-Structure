import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBOI1nDZ-Sw7kYKrtveeycRotmnpMh6L0c",
    authDomain: "products-de2c1.firebaseapp.com",
    projectId: "products-de2c1",
    storageBucket: "products-de2c1.appspot.com",
    messagingSenderId: "912609621018",
    appId: "1:912609621018:web:78f4556ab8cb50eed24da3"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export default projectFirestore