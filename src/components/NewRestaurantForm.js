import React, { useState } from "react";
import "../style/newRestaurantForm.css"

const NewRestaurantForm = () => {

  const initialNewRestaurant = { name: '', image: '', location: ''}
  const { name, image, location } = useState(initialNewRestaurant)
  return (
    <div className="new-restaurant-form">
      <h2>New Restaurant</h2>
      <form>
        <input type="text" name='name' placeholder='Restaurant name...' value={name}/>
        <input type="text" name='image' placeholder='Image link...' value={image}/>
        <input type="text" name='location' placeholder='Location address...' value={location}/>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  )
}

export default NewRestaurantForm