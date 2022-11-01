import React from 'react'

function Create() {
  return (
    <div>
      <section>
        <form>
          <label for="title">Enter Wishlist Name</label>
          <input type="text" className='newWishlist' />

          <br />
          <label for="title">Enter Wishlist Url:</label>
          <input type="text" className='newWishlist' />
          <br />
          <label for="title">Enter a description:</label>
          <input type="text" className='newWishlist' />
          <br />
          <label for="title">Enter image url:</label>
          <input type="text" className='newWishlist' />
          <br />
          <label for="title">Enter a price:</label>
          <input type="text" className='newWishlist' />
          <br />
          //add onclick event handler to the button to submit the data to the url, then display all objects on a wishlist page
          <button>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Create