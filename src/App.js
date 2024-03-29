// App.js
import React from 'react';
// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Foitites/Navbar2';
import PhotoCarousel from './PhotoCarousel';
import WaveBlocks from './WaveBlocks';
import SignIn from './SignIn';
import SignUp from './SignUp'
import LoggedIn from './Foitites/Arxiki/LoggedIn';
import Mathimata from './Foitites/Mathimata/Mathimata';
import Certificates from './Foitites/Pistopoihtika/Certificates'
import Vathmologia from './Foitites/Vathmologia/Vathmologia'
import Profile from './Foitites/Profile/Profile'
import SubjectDetails from './Foitites/Mathimata/SubjectDetails';
import Dilwsi from './Foitites/Mathimata/Dilwsi';
import Oristikopoihsh from './Foitites/Mathimata/Oristikopoihsh'
import PasswordReset from './PasswordReset';

const App = () => {
  

  return (
    <Router>
      <div className="App">
        <div>
        </div>
        <Routes>
          <Route path="/" element={<> <Navbar /><PhotoCarousel /><WaveBlocks /></>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/loggedin" element={<><Navbar2 /><LoggedIn /></>} />
          <Route path="/mathimata" element={<><Navbar2 /><Mathimata /></>} />
          <Route path="/pistopoihtika" element={<><Navbar2 /><Certificates /></>} />
          <Route path="/vathmologia" element={<><Navbar2 /><Vathmologia /></>} />
          <Route path="/profile" element={<><Navbar2 /><Profile /></>} />
          <Route path="/mathimata/:id" element={<><Navbar2 /><SubjectDetails /></>} />
          <Route path="/dilwsi" element={<><Navbar2 /><Dilwsi /></>} />
          <Route path="/oristikopoihsh" element={<><Navbar2 /><Oristikopoihsh /></>} />
          <Route path="/password-reset" element={<PasswordReset/>} />

        </Routes>
      </div> 
    </Router>
  );
};

export default App;
