var firebase = require('firebase')
require('firebase/auth');
require('firebase/database');

var config = {
    apiKey: "AIzaSyBY36a7dh1a0YmkkRyaH8UpBi2IynelTMY",
    authDomain: "nodejscb.firebaseapp.com",
    databaseURL: "https://nodejscb.firebaseio.com",
    projectId: "nodejscb",
    storageBucket: "nodejscb.appspot.com",
    messagingSenderId: "85764044261"
  };


var firebaseApp = firebase.initializeApp(config);



module.exports = firebaseApp