import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios.get('/cats').then(res => {
      console.log(res.data);
      setCats(res.data);
    })
  }, [])

  return (
    <div className='App'>
      <h1>Cats App</h1>
      {cats.length ? cats.map(cat => <li>{cat}</li>) : <h2>Loading</h2>}
      
    </div>
  );
}

export default App;
