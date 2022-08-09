import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const  App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/competences" element={<Knowledges/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route element={<NotFound/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
