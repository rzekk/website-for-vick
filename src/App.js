import React from 'react';
import Home from './Home';
import Music from './Music';
import Letters from './Letters'
import Images from './Images';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/music' element={<Music />} />
        <Route path='/letters' element={<Letters />} />
        <Route path='/images' element={<Images />} />
      </Routes>
    </div>
  );
}

export default App;
