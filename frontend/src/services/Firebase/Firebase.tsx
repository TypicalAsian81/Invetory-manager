// import React from 'react'
// import { FirebaseProvider } from '@useweb/use-firebase'
// import { initializeApp } from 'firebase/app'
// import { getMessaging } from 'firebase/messaging'

// const firebaseConfig = {
//     apiKey: "AIzaSyAdrV4yWsZcfybKVHp9BGkMQE2OjBqUzms",
//     authDomain: "dbms-253da.firebaseapp.com",
//     projectId: "dbms-253da",
//     storageBucket: "dbms-253da.appspot.com",
//     messagingSenderId: "368815671916",
//     appId: "1:368815671916:web:27ca7b09a6727a5d2e6649",
//     measurementId: "G-1Z5PSKRP4G"
//   };

// const firebaseApp = initializeApp(firebaseConfig)
// const messaging = getMessaging(firebaseApp)

// const envIsDev = process.env.NODE_ENV === 'development'

// const vapidKey = 'BN05eA0WCOuOlb7nWosRc89zw4bllBhHBetGsBy19LBYMgkxjZPsNlFxj_ytV_KOyBQc4V7MhzJL83oxZ6GlwzM' 

// export default function Firebase({ children }) {
//   return (
//     <FirebaseProvider
//       firebaseConfig={firebaseConfig}
//       firebaseApp={firebaseApp}
//       envIsDev={envIsDev}
//       messaging={messaging}
//       messagingOptions={{
//         vapidKey,
//       }}
//     >
//       {children}
//     </FirebaseProvider>
//   )
// }