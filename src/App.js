import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit';
import { Route, Routes } from 'react-router-dom';

import './App.css';




const App = () => {
  return (
    <div className='testtemplate'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/subreddit' element={<Subreddit />} />

        </Routes>

      </main>
    </div>
  );
}

export default App;
