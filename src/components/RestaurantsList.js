import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantsList = ({ restaurants }) => {

  // console.log("Restaurants:", restaurants)

  const renderRestaurants = restaurants.map(restaurant => {
    return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
  })

  return (
    <ul className="cards">{renderRestaurants}</ul>
  )
}

export default RestaurantsList