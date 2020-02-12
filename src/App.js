import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Video from './components/video'

import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <h1>Weklcome to My Website</h1>
    <Home/>
    <Video/>

    </div>
  );
  }
export default App;
  
