import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Features from './pages/features';
import Pricing from './pages/pricing';
import Header from './components/header';
import'bootstrap/dist/css/bootstrap.css';
import './App.css';



function App() {




const changeColor = (color) => {
    document.body.style.background = color;
}

  return (

    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/pricing' element={<Pricing/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
