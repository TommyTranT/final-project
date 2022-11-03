import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  //set the states for the user, pwd, and error msg rendered.
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');

  //useEffect to se the focus on the first input when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //empty out error msg if user begins re-editing the pwd or user fields
  useEffect(() => {
    setErr('');
  }, [user, pwd])

  //handle the submit event, and prevents the default reloading of the page
  const handleSubmit = async (e) => {
    e.preventDefault();

    //THIS IS WHERE I NEED TO WRITE THE AXIOS POST, and the query
    // //if the user or pwd fields are empty, set the error msg and return
    // if (!user || !pwd) {
    //   setErr('Please enter a username and password');
    //   return;
    // }
  }

  return (
    <div>
      <Navbar />


      <section>
        <p ref={errRef} className={err ? "err" :
          "offscreen"} aria-live="assertive">{err}</p>
        <h1 className='welcome'>Welcome to Wishlist</h1>
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            required
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            id="username"
            required
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
          />
          <button>Sign in</button>
          <br />
          <p>Need an account?<br />
            <span className="line">
              {/*router here*/}
              <a href="/register">Register</a>
            </span>
          </p>

        </form>



      </section>
    </div>
  )
}

export default Login