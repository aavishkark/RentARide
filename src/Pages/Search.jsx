import React, { useState,useEffect } from "react";
import { useLocation } from "../Components/Context/LocationContext";
import { useDate } from "../Components/Context/DateContext";
import { SimpleGrid } from "@chakra-ui/react";
import CarCard from "../Components/CarCard/carCard";

function SearchResultsPage() {
  const { location, updateLocation } = useLocation();
  const { date, updatedate} = useDate();
  const [data,setdata]=useState([]);
  const apiUrl2 = process.env.REACT_APP_API_URL + '/cars';
  useEffect(() => {
    fetch(`${apiUrl2}?city=${location}`)
      .then((response) => response.json())
      .then((data) =>{
          console.log(data)
          setdata(data)
     } )
     .catch((error) => console.error('Error fetching data:', error));
 }, []);
 return(
  <SimpleGrid columns={3} spacing={4}>
  {data.map((car, index) => (
    <CarCard key={index} car={car} />
  ))}
</SimpleGrid>
 )

}

export default SearchResultsPage;
