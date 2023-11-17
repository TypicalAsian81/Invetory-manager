// import firebase from "firebase/app";
// import "firebase/messaging";

// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyAdrV4yWsZcfybKVHp9BGkMQE2OjBqUzms",
//     authDomain: "dbms-253da.firebaseapp.com",
//     projectId: "dbms-253da",
//     storageBucket: "dbms-253da.appspot.com",
//     messagingSenderId: "368815671916",
//     appId: "1:368815671916:web:27ca7b09a6727a5d2e6649",
//     measurementId: "G-1Z5PSKRP4G"
//   };

// firebase.initializeApp(firebaseConfig);

// // Retrieve Firebase Messaging object.
// const messaging = firebase.messaging();

// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("Notification permission granted.");
//     return messaging.getToken();
//   })
//   .then((token) => {
//     console.log("Token: ", token);
//   })
//   .catch((err) => {
//     console.log("Unable to get permission to notify.", err);
//   });

// // Handle incoming messages.
// messaging.onMessage((payload) => {
//   console.log("Message received. ", payload);
//   // Customize notification here
//   const notificationTitle = payload.data.title;
//   const notificationOptions = {
//     body: payload.data.body,
//     icon: payload.data.icon,
//   };

//   if (!("Notification" in window)) {
//     console.log("This browser does not support system notifications");
//   } else if (Notification.permission === "granted") {
//     new Notification(notificationTitle, notificationOptions);
//   }
// });