import Navbar from '../components/Navbar';
import React from 'react';
import './Create.css'

function Create() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    //CREATE AN AXIOS POST REQUEST
    //cannot submit queries through the front end, backend will handle the query with the post request

    //send a respons back to 
  }

  //now with the handleSubmut function, I need to send these props to an object
  //that will be sent to the server



  return (
    <div>
      <Navbar />

      <section className='createWishlist'>
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
          <button type='submit' onSubmit={handleSubmit}> Submit </button>
        </form>
      </section>
    </div>
  )
}

export default Create