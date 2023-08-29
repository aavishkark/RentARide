import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  Checkbox,
  Textarea,
} from '@chakra-ui/react';

function BecomeHost() {
    // Define state variables to store form data
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [type1, setType1] = useState('');
    const [fuel, setFuel] = useState('');
    const [seats, setSeats] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [fastag, setFastag] = useState(false);
    const [type2, setType2] = useState('');
    const [city, setCity] = useState('');
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        name,
        address,
        type1,
        fuel,
        seats,
        pricePerDay,
        fastag,
        type2,
        city,
        photos,
        description,
      };
    };
  
    return (
      <VStack spacing={4} align="start">
        <form onSubmit={handleSubmit}>
          <FormControl id="name">
            <FormLabel>Name of Host</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
  
          <FormControl id="address">
            <FormLabel>Address of Host</FormLabel>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
  
          <FormControl id="type1">
            <FormLabel>Type (Manual/Automatic)</FormLabel>
            <Select
              value={type1}
              onChange={(e) => setType1(e.target.value)}
            >
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </Select>
          </FormControl>
  
          <FormControl id="fuel">
            <FormLabel>Fuel (Petrol/CNG/Diesel)</FormLabel>
            <Select
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
            >
              <option value="Petrol">Petrol</option>
              <option value="CNG">CNG</option>
              <option value="Diesel">Diesel</option>
            </Select>
          </FormControl>
  
          <FormControl id="seats">
            <FormLabel>Number of Seats</FormLabel>
            <Input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </FormControl>
  
          <FormControl id="pricePerDay">
            <FormLabel>Price Per Day</FormLabel>
            <Input
              type="number"
              value={pricePerDay}
              onChange={(e) => setPricePerDay(e.target.value)}
            />
          </FormControl>
  
          <FormControl id="fastag">
            <FormLabel>Fastag</FormLabel>
            <Checkbox
              isChecked={fastag}
              onChange={(e) => setFastag(e.target.checked)}
            >
              Fastag Available
            </Checkbox>
          </FormControl>
  
          <FormControl id="type2">
            <FormLabel>Type (Sedan/SUV/Hatchback)</FormLabel>
            <Select
              value={type2}
              onChange={(e) => setType2(e.target.value)}
            >
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
            </Select>
          </FormControl>
          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
          <FormControl id="photos">
            <FormLabel>Photos of Car (Comma-separated URLs)</FormLabel>
            <Textarea
              value={photos}
              onChange={(e) => setPhotos(e.target.value.split(','))}
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </VStack>
    );
  }
  
  export default BecomeHost;
  