import React, { useEffect, useState } from 'react';
import Header from './Header';
import Search from './Search';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantsList from './RestaurantsList';

function App() {

  const [ restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/restaurants")
    .then(res => res.json())
    .then(data => setRestaurants(data))
    .catch(error => console.error("Error:", error))
  }, [])

  return (
    <div className="app">
     <Header />
     <NewRestaurantForm />
     <Search />
     <RestaurantsList restaurants={restaurants}/>
    </div>
  );
}

export default App;
