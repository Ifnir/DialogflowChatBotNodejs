import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBY36a7dh1a0YmkkRyaH8UpBi2IynelTMY",
    authDomain: "nodejscb.firebaseapp.com",
    databaseURL: "https://nodejscb.firebaseio.com",
    projectId: "nodejscb",
    storageBucket: "nodejscb.appspot.com",
    messagingSenderId: "85764044261"
  };


const firebaseApp = firebase.initializeApp(config);

// export
export default firebaseApp.firestore()