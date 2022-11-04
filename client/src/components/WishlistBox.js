import React from 'react'
import './WishlistBox.css';

function WishlistBox(props) {



  return (
    <div className='box'>
      <div className='boxtitle'>
        <section className='title'>
          <h2>{props.title}</h2>
        </section>
      </div>
    </div>
  )
}

export default WishlistBox