// import React, { useState } from 'react';
// import axios from 'axios';
// // import '../../firebase'; 
// import { Button, Toast } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//     const [showToast, setShowToast] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [show, setShow] = useState(false);
//     const [notification, setNotification] = useState({title: '', body: ''});
//     const mysql = require('mysql');
//     const express = require('express');
//     const session = require('express-session');
//     const path = require('path');
//     // const [isTokenFound, setTokenFound] = useState(false);
//     // getToken(setTokenFound);


// // onMessageListener().then(payload => {
// //   setShow(true);
// //   setNotification({title: payload.notification.title, body: payload.notification.body})
// //   console.log(payload);
// // }).catch(err => console.log('failed: ', err));
  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5555/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         setIsLoggedIn(true);
//         // Redirect the user to the authorized page upon successful login
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       setLoading(false);
//       // Handle login failure, show an error message, etc.
//     }
//   };

//   if (isLoggedIn) {
//     return (
//       <div>
//         <h1>Welcome, you are logged in!</h1>
//       </div>
//     );
//   }

//   return (
//     <div className='p-4'>
//       <h1 className='text-3xl mb-4'>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className='mb-4'>
//           <label>Email:</label>
//           <input
//             type='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className='border border-gray-400 rounded-md px-2 py-1'
//           />
//         </div>
//         <div className='mb-4'>
//           <label>Password:</label>
//           <input
//             type='password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className='border border-gray-400 rounded-md px-2 py-1'
//           />
//         </div>
//         <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           minWidth: 200
//         }}>
//           <Toast.Header>
//             <img
//               src="holder.js/20x20?text=%20"
//               className="rounded mr-2"
//               alt=""
//             />
//             <strong className="mr-auto">{notification.title}</strong>
//             <small>just now</small>
//           </Toast.Header>
//           <Toast.Body>{notification.body}</Toast.Body>
//         </Toast>
//       <header className="App-header">
//         {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
//         {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
//         <img src={logo} className="App-logo" alt="logo" />
//         <Button onClick={() => setShow(true)}>Show Toast</Button>
//       </header>
//       </form>
//       {/* <div>
//         <Toast
//           onClose={() => setShowToast(false)}
//           show={showToast}
//           delay={3000}
//           autohide
//           style={{
//             position: 'absolute',
//             top: 20,
//             right: 20,
//           }}
//         >
//           <Toast.Header>
//             <img
//               src="holder.js/20x20?text=%20"
//               className="rounded mr-2"
//               alt=""
//             />
//             <strong className="mr-auto">Notification</strong>
//             <small>12 mins ago</small>
//           </Toast.Header>
//           <Toast.Body>There are some new updates that you might love!</Toast.Body>
//         </Toast>
//         <div className='login-header'>
//         {isTokenFound && <h1>Notification permission enabled </h1>}
//         {!isTokenFound && <h1>Need notification permission </h1> }
//         <Button onClick={() => setShowToast(true)}>Show Toast</Button>
//         </div> */}
//       </div>
//   );
// };

// export default Login;
