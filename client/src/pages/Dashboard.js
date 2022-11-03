import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Dashboard.css';

import React from 'react'
import WishlistBox from '../components/WishlistBox';

const wishlists = [{
  title: "abcde",
  url: "www.google.ca"
},
{
  title: "happy",
  url: "www.cat.ca"

}]

function Dashboard() {
  //when loading the page make an axios request for all the lists

  const wishlistComponents = wishlists.map(wishlist => <WishlistBox title={wishlist.title} />)



  return (
    <div>
      <Navbar />
      <div className='heading'>
        <h1>
          Welcome to your Wishlists
        </h1>
        <br />
        <button>Create A new Wishlist!</button>
      </div>
      <div className='WishlistContainer'>
        {
          wishlistComponents
        }
      </div>
    </div>
  )
}

export default Dashboard