import React from 'react';
import Home from './components/Home';
import Music from './components/Music';
import Letters from './components/Letters'
import Images from './components/Images';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path='/music' element={<Music />} />
        <Route path='/letters' element={<Letters />} />
        <Route path='/images' element={<Images />} />
      </Routes>
  );
}

export default App;
