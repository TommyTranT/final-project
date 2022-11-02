import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Login from './Login'
import Register from './Register'

function App() {
  const [cats, setCats] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/cats').then(res => {
      console.log(res.data);
      setCats(res.data);
    })
  }, [])

  useEffect(() => {
    axios.get('/users').then(res => {
      console.log(res.data);
      setUsers(res.data);
    })
  }, [])


  // <h1>Wish List App</h1>
  // {cats.length ? cats.map((cat, i) => <li key={i}>{cat}</li>) : <h2>Loading</h2>}

  return (
    <div className='App'>
      <Register />
      {/* {users.length ? users.map((user, y) => <li key={y}>{user}</li>) : <h2>Loading</h2>} */}

    </div>
  );
}

export default App;

// track with state or cookies. than redirect with router