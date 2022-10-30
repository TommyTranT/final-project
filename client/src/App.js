//import REACT from react and import the states and effects to render them in the app.js
import React, { useEffect, useState } from 'react'


function App() {

  //fetch data from the backend
  const [backendData, setBackendData] = useState([{}])

  //fetch the data with the useEffect
  useEffect(() => {
    //fetching the /api route, which is the api route in the server/server.js
    fetch("/api").then(
      //when successful, render the response in json
      response => response.json()
    ).then(
      //when successful, set the response Data to the backendData, by using the setState
      data => {
        setBackendData(data)
      }
    )
  },
    //empty array, so that the useEffect only runs once
    [])



  return (
    <div>Find me in client/src/app.js

      {/* if the server cannot connect, or the server info is empty, loading screen will appear */}
      {(typeof backendData.message === 'undefined') ? (
        <div>loading...</div>
      ) : (
        //if the server is connected, map over each message, use i as the key for each message and render the message
        backendData.message.map((message, i) => (
          <p key={i}>{message}</p>
        ))
      )
      }
    </div>
  )
}

export default App