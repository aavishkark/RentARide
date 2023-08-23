import React, { useState, useEffect } from 'react';

function Home() {
    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      // Make an HTTP GET request to fetch the cars data
      fetch('http://localhost:3000/cars')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setCars(data)
        } )
        .catch((error) => console.error('Error fetching data:', error));
    }, []); // The empty array [] means this effect will run once, similar to componentDidMount in class components
  
    return (
      <div>
        <h1>Car List</h1>
        <ul>
          {/* {cars.map((car) => (
            <li key={car.id}>
              {car.brand} {car.model} ({car.year})
            </li>
          ))} */}
        </ul>
      </div>
    );
  }
  
  export default Home;
  