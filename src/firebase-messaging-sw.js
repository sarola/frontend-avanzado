importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-messaging.js');

var config = {
 apiKey: "AIzaSyDoCScEO6J64YgpJEtUJ4QXxLCLVWc5eXY",
    authDomain: "sarola.firebaseapp.com",
    databaseURL: "https://sarola.firebaseio.com",
    projectId: "sarola",
    storageBucket: "sarola.appspot.com",
    messagingSenderId: "528850412042",
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Sarola';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});