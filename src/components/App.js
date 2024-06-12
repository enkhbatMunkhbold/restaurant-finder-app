import React, { useEffect, useState } from 'react';
import Header from './Header';
import Search from './Search';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantsList from './RestaurantsList';

function App() {

  const [ restaurants, setRestaurants ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/restaurants")
    .then(res => res.json())
    .then(data => setRestaurants(data))
    .catch(error => console.error("Error:", error))
  }, [])

  function updateList(rest) {
    const list = restaurants.map(restaurant => restaurant.id === rest.id ? rest : restaurant)
    setRestaurants(list)
  } 

  function handleSearch(input) {
    setSearch(input)
  }

  const displayRestaurants = search.length !== 0 ? restaurants.filter(rest => rest.name.toLowerCase().includes(search.toLowerCase())) : restaurants

  return (
    <div className="app">
     <Header />
     <NewRestaurantForm />
     <Search onSearch={handleSearch}/>
     <RestaurantsList restaurants={displayRestaurants} onUpdateList={updateList}/>
    </div>
  );
}

export default App;
