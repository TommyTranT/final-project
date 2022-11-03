import React from 'react'

function Create() {
  return (
    <div>
      <section>
        <form method="POST" action='http://localhost:8080'>
          <label for="title">Enter Wishlist Name</label>
          <input type="text" className='newWishlist' name='title' />

          <br />
          <label for="url">Enter Wishlist Url:</label>
          <input type="text" className='newWishlist' name='url' />
          <br />
          <label for="description">Enter a description:</label>
          <input type="text" className='newWishlist' name='description' />
          <br />
          <label for="imgUrl">Enter image url:</label>
          <input type="text" className='newWishlist' name='imgUrl' />
          <br />
          <label for="price">Enter a price:</label>
          <input type="text" className='newWishlist' name='price' />
          <br />
          <button type='submit'> Submit </button>
        </form>
      </section>
    </div>
  )
}

export default Create