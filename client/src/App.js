import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
//decodes the info sent from
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login'
import Register from './Register'
import Navbar from './components/Navbar';

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


  //////////////////////////////////////
  ////// Google Authentication//////////
  //////////////////////////////////////

  //gives us the user(empty obj) and the setter
  const [user, setUser] = useState({})

  function handleCallbackResponse(response) {
    //give us the google json token
    console.log(response.credential);
    //decode the json token
    let userObj = jwt_decode(response.credential);
    console.log(userObj);
    //set the user to the decoded token
    setUser(userObj);
    //when logged in, hide sign in
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    //when logged out, show sign in
    document.getElementById("signInDiv").hidden = false;
    //set the user to an empty obj
    setUser({});

  }


  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "132729699679-et6663223o6qlk10u6er5psh652atuke.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  //if the user has a cached account, prompt them to sign in quickly
  // google.accounts.id.prompt();


  //if we have no user, sign in button
  //if user, show logout

  //////////////////////////////////
  ///to add routees///////////////
  ////////////////////////////////

  // import Create from './pages.create'

  // //add routes into the switch
  // <Route path='/create' component={Create} />

  // add this into the home one 
  // <Route path='/' exact component={home} />
  return (
    <div className='home'>
      <Router>
        {Object.keys(user).length != 0 &&
          <Navbar />
        }
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
      <div className='App'>
        <div id="signInDiv">
        </div>
        {Object.keys(user).length != 0 &&
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
        }

        {
          user &&
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
