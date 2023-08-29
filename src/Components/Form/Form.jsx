import React  from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,Flex,Input,Button,Heading,Select} from '@chakra-ui/react';
import { useLocation } from '../Context/LocationContext';
import { useDate } from '../Context/DateContext';
function MyFormComponent() {
  
  const navigate=useNavigate()
  const { location, updateLocation } = useLocation();
  const { date, updateDate} = useDate();
  const topTenCities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Kolkata',
    'Chennai',
    'Hyderabad',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
  ];
  const changelocation=(e)=>{
    console.log(e.target.value)
    updateLocation(e.target.value)
    console.log(location)
  }
  const changedate=(e)=>{
    updateDate(e.target.value)
  }
  return (
    <Box
      backgroundImage="url('https://cdn.motor1.com/images/mgl/BXXAQ4/s1/koenigsegg-jesko-absolut.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="600px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
  backgroundColor="rgba(0, 0, 0, 0.2)"
  padding="20px"
  borderRadius="10px"
  color="white"
  flexDirection="column"
  textAlign="center"
  width="70%"
  margin="0 auto"
  align="center"
  justify="center" 
  minHeight="50vh"
>
  <Heading fontSize="3xl" mb="10">Welcome to Our Car Rental Service</Heading>
  <form onSubmit={()=>{navigate('/searchres')}}>
  <Select
        defaultValue=""
        className="select-location"
        onChange={changelocation}
      >
        <option style={{color:"white"}} disabled value="">
          Select Your City
        </option>
        {topTenCities.map((city) => (
          <option style={{color:"black"}} key={city} value={city}>
            {city}
          </option>
        ))}
      </Select>
    <Input
      type="date"
      marginBottom="10px"
      size='lg'
      onChange={changedate}
    />
    <Button color="white" bg="#004aadff" type="submit">
      Search Cars
    </Button>
  </form>
</Flex>
</Box>
  );
}

export default MyFormComponent;
