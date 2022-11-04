import Navbar from '../components/Navbar';
import React from 'react';
import './Create.css'
import WishlistBox from '../components/WishlistBox';


const wishlists = [{
  title: "abcde",
  url: "www.google.ca"
},
{
  title: "happy",
  url: "www.cat.ca"

}]



function Create() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    //CREATE AN AXIOS POST REQUEST
    //cannot submit queries through the front end, backend will handle the query with the post request

    //send a respons back to 
  }

  //now with the handleSubmut function, I need to send these props to an object
  //that will be sent to the server

  {/* <form method="POST" action='http://localhost:8080'></form> */ }

  // const WishlistItems = wishlistItems.map(wishlistItem => <WishlistItemComponent title={wishlistItem.title} />)

  const WishlistComponents = wishlists.map(wishlist => <WishlistBox title={wishlist.title} />)

  return (
    <div>
      <Navbar />

      <section className='createWishlist'>
        <form method="POST" action='http://localhost:8080'>
          <label for="title">Enter Wishlist Name</label>
          <input type="text" className='newWishlist' name='title' />

          <div className='item'>
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
            <button className='button-3' type='submit' onSubmit={handleSubmit}> New Item </button>
          </div>
          <button type='submit' onSubmit={handleSubmit}> Submit Wishlist </button>
        </form>
      </section>
      {
        WishlistComponents
      }
    </div>
  )
}

export default Create

