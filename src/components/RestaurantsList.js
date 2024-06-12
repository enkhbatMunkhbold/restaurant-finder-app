import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantsList = ({ restaurants, onUpdateList }) => {

  // console.log("Restaurants:", restaurants)

  const renderRestaurants = restaurants.map(restaurant => {
    return <RestaurantCard key={restaurant.id} restaurant={restaurant} onUpdateList={onUpdateList}/>
  })

  return (
    <ul className="cards">{renderRestaurants}</ul>
  )
}

export default RestaurantsList