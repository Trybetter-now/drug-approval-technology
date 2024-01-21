import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/Home/HomePage'
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/navigation' element={<Navigation />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App