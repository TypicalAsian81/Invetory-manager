import React, { useState } from "react";
import Axios from 'axios';
import '../styles/login.css';
import { useNavigate } from "react-router-dom";


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

function App() {
  const navigate = useNavigate();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
      // Handle successful registration if needed
    }).catch(error => {
      // Handle registration errors
      console.error("Registration error:", error);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      // Handle successful login
      setLoginStatus("Login successful!");
      navigate('/'); // Redirect to home page after successful login
    }).catch(error => {
      // Handle login errors
      setLoginStatus("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <center><h1><b>LOGIN TO INVENTORY</b></h1></center>
        {/* ... rest of the registration form */}
      </div>

      <div className="login">
        <div className="user-input">
        <input
          type="text"
          placeholder="Username…"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /><br />
        <input
          type="password" // Use type="password" for secure input
          placeholder="Password…"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </div>
        <div className="login-button"><center><b><button onClick={login}>Login</button></b></center></div>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
