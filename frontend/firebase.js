// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const config = {
//     apiKey: "AIzaSyAdrV4yWsZcfybKVHp9BGkMQE2OjBqUzms",
//     authDomain: "dbms-253da.firebaseapp.com",
//     projectId: "dbms-253da",
//     storageBucket: "dbms-253da.appspot.com",
//     messagingSenderId: "368815671916",
//     appId: "1:368815671916:web:27ca7b09a6727a5d2e6649"
// };

// initializeApp(config)

// // export const getToken = (setTokenFound) => {
// //     return getToken(messaging, {vapidKey: 'GENERATED_MESSAGING_KEY'}).then((currentToken) => {
// //       if (currentToken) {
// //         console.log('current token for client: ', currentToken);
// //         setTokenFound(true);
// //         // Track the token -> client mapping, by sending to backend server
// //         // show on the UI that permission is secured
// //       } else {
// //         console.log('No registration token available. Request permission to generate one.');
// //         setTokenFound(false);
// //         // shows on the UI that permission is required 
// //       }
// //     }).catch((err) => {
// //       console.log('An error occurred while retrieving token. ', err);
// //       // catch error while creating client token
// //     });
// // }

// export default firebase