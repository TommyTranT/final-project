import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get('/cats').then(res => {
      console.log(res.data);
    })
  },[])

  return (
    <div className='App'>
      <h1>Cats App</h1>
      
    </div>
  );
}

export default App;
