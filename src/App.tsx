import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import AboutMe from './Components/AboutMe/AboutMe';
import Card from './Components/Cards/Card';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';





function App() {
  return (
    <div className="App">
     <Nav/>
     <AboutMe/>
     <Card/>
     <Skills/>
     <Footer/>
    </div>
  );
}

export default App;
