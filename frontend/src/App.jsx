// import React, { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import CreateBook from './pages/CreateBooks';
// import ShowBook from './pages/ShowBook';
// import EditBook from './pages/EditBook';
// import DeleteBook from './pages/DeleteBook';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// const App = () => {
//   // useEffect(() => {
//     const messaging = firebase.messaging();
//     messaging.requestPermission().then(() => {
//       return messaging.getToken();
//     }).then(token => {
//       console.log('Token: ', token);
//     }).catch(err => {
//       console.log(err);
//     });
//     // You can listen to messages using messaging.onMessage here if needed
//   // }, []); // Empty dependency array to run this effect only once

//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/books/create' element={<CreateBook />} />
//       <Route path='/books/details/:id' element={<ShowBook />} />
//       <Route path='/books/edit/:id' element={<EditBook />} />
//       <Route path='/books/delete/:id' element={<DeleteBook />} />
//     </Routes>
//   );
// };

// export default App;


















import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Login from './pages/Login';
import Search from './pages/SearchBooks'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/books/search' element={<Search />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;



