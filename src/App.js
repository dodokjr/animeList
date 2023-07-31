import { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Singup from './components/Singup';
import Home from './components/Home';
import
{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './assets/css/main.css.map'

function App()
{

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
