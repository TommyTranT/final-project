import React from 'react'

function WishlistBox(props) {



  return (
    <div>
      <div className='box'>
        <section>
          image
        </section>
        <section>
          <h2>{props.title}</h2>
        </section>
      </div>
    </div>
  )
}

export default WishlistBox