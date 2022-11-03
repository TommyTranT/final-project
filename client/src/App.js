import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Login from './Login'
import Register from './Register'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users').then(res => {
      console.log(res.data);
      setUsers(res.data);
    })
  }, [])

  return (
    <div className='App'>
      {/* <Register /> */}
      {/* {users.length ? users.map((user, y) => <li key={y}>{user}</li>) : <h2>Loading</h2>} */}

    </div>
  );
}

export default App;

// track with state or cookies. than redirect with router