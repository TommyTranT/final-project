import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import Create from './pages/Create';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard';

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

  // {users.length ? users.map((user, y) => <li key={y}>{user}</li>) : <h2>Loading</h2>}

  // <div className='App'>
  //   <Login />
  // </div>
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

