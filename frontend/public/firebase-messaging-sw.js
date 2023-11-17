importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

const firebaseConfig = {
  apiKey: "AIzaSyAdrV4yWsZcfybKVHp9BGkMQE2OjBqUzms",
  authDomain: "dbms-253da.firebaseapp.com",
  projectId: "dbms-253da",
  storageBucket: "dbms-253da.appspot.com",
  messagingSenderId: "368815671916",
  appId: "1:368815671916:web:27ca7b09a6727a5d2e6649",
  measurementId: "G-1Z5PSKRP4G"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})