

import React, { useState } from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <div class="nav-container">
      <nav class="menu">
        <div class="logo">
          <a href="">Wishlist</a>
        </div>
        <ul class="navbar">
          <li><a href="/Dashboard">Home&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="/Create">Create&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Share</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar