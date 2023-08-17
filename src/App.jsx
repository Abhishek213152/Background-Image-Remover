import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Slider from './Components/Slider';
import Work from './Components/Work';
import Down from './Components/Down';
import Remove from './Components/Remove';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Slider />
                <Work />
                <Down />
              </>
            }
          />
          <Route path="/remove" Component={Remove}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/login" Component={Login}/>
          <Route path="/signup" Component={Signup}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
