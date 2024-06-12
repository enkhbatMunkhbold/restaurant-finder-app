import React, { useState } from "react";
import "../style/newRestaurantForm.css"

const NewRestaurantForm = () => {

  const initialNewRestaurant = { name: '', image: '', location: '', isFavorite: false}
  const [ newRestaurant, setNewRestaurant ]= useState(initialNewRestaurant)
  const { name, image, location, isFavorite } = newRestaurant

  function handleChange(e) {
    const { name, value } = e.target
    setNewRestaurant({...newRestaurant, [name]: value})
  }
  return (
    <div className="new-restaurant-form">
      <h2>New Restaurant</h2>
      <form>
        <input type="text" name='name' placeholder='Restaurant name...' value={name} onChange={handleChange}/>
        <input type="text" name='image' placeholder='Image link...' value={image} onChange={handleChange}/>
        <input type="text" name='location' placeholder='Location address...' value={location} onChange={handleChange}/>
        <label className="radioButtonLabel">Favorite</label>
        <input type="radio" name="favorite" value={isFavorite} checked={isFavorite} />
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  )
}

export default NewRestaurantForm