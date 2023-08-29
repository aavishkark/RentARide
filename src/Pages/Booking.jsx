import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {
  Box,
  Image,
  Text,
  Stack,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
function BookingPage() {
  const { id } = useParams();
  const [car,setcar] = useState({
    "id": 60,
    "name": "Nissan Magnite",
    "photos": "img.png",
    "type1": "Manual",
    "fuel": "Petrol",
    "seats": 5,
    "rating": 4.1,
    "trips": 1700,
    "pricePerDay": 1100,
    "fastag": true,
    "type2": "SUV",
    "city": "Pune"
  });
  useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then((response) => response.json())
      .then((data) =>{
          console.log(data)
          setcar(data)
     } )
     .catch((error) => console.error('Error fetching data:', error));
 }, [id]);
  return (
    <Box p={4}>
      <Image src={car.photos} alt={car.name} width="50%" alignContent="center"/>
      <Stack spacing={4} mt={4}>
        <Text fontSize="xl" fontWeight="bold">
          {car.name}
        </Text>
        <Text fontSize="lg">Rating: {car.rating}</Text>
        <Text fontSize="lg">Price: ₹{car.pricePerDay}</Text>
        <Text fontSize="lg">City: {car.city}</Text>
      </Stack>
      <Divider mt={4} mb={4} />
      <Text fontSize="xl" fontWeight="bold">
        Added Benefits
      </Text>
      <Stack spacing={2} mt={2}>
        <Text>Safety First</Text>
        <Text>No Extra Charges</Text>
        <Text>100% Privacy</Text>
      </Stack>
      <Divider mt={4} mb={4} />
      <Button colorScheme="teal">
            <ChakraLink as={ReactRouterLink} to={`/bookingconfirmed`}>ConFirm Booking</ChakraLink>
            </Button>
    </Box>
  );
}

export default BookingPage;
