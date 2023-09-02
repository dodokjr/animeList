import { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Singup from './components/Singup';
import Anime from './components/Anime';
import
{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './components/home/Home';
import Footer from './components/Footer';

import './assets/css/main.css.map'
import './assets/css/app.css'

function App()
{

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/anime' element={<Anime />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
