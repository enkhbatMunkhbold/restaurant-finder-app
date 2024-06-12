import React, { useState } from 'react'
import "../style/card.css"

const RestaurantCard = ({ restaurant }) => {

  const { id, name, image, location, isFavorite } = restaurant
  const [ favorite, setFavorite ] = useState(isFavorite)

  function handleButtonClick() {
    setFavorite(prevState => !prevState);
  }

  return (
    <li className='card'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Location: {location}</p>
      {favorite ? 
        (<button  className='primary'onClick={handleButtonClick}>Favorite</button>) : 
        (<button className='secondary'onClick={handleButtonClick}>Not Favorite</button>)
      }
    </li>
  )
}

export default RestaurantCard