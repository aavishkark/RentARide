import React, { useState, useEffect } from 'react';
import {Box,Flex,Input,Button,Heading,Text,Image,UnorderedList,ListItem,Grid,Select,IconButton,extendTheme} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { ChakraProvider } from '@chakra-ui/react';
import './home.css';
function Home() {
    const [cars, setCars] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState(null);

    const handleLabelClick = (label) => {
      setSelectedLabel(label);
    };
  
    useEffect(() => {
      fetch('http://localhost:3000/cars')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setCars(data)
        } )
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const theme = extendTheme({
      styles: {
        global: {
          'html, body': {
            margin: 0,
            padding: 0,
            fontFamily: 'sans-serif',
          },
        },
      },
    });
    
    const cards = [
      'Card 1',
      'Card 2',
      'Card 3',
      'Card 4',
      'Card 5',
      'Card 6',
      'Card 7', // Add more cards as needed
    ];

    // const reviews = [
    //   {
    //     id: 1,
    //     name: "John Doe",
    //     image: "/john-doe.jpg",
    //     review: "Great service! I had an amazing experience renting a car from this website."
    //   },
    //   {
    //     id: 2,
    //     name: "DODO",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   },
    //   {
    //     id: 3,
    //     name: "yoro",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   },
    //   {
    //     id: 4,
    //     name: "mOjO",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   },
    //   {
    //     id: 5,
    //     name: "mOjO",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   },
    //   {
    //     id: 6,
    //     name: "mOjO",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   },
    //   {
    //     id:7,
    //     name: "mOjO",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   },
    //   {
    //     id: 8,
    //     name: "mOjO",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   },
    //   {
    //     id: 9,
    //     name: "mOjO",
    //     image: "/john-doe.jpg",
    //     review: "This shit sucks"
    //   }
    //   // Add more reviews here...
    // ];
    
    const [cardIndex, setCardIndex] = useState(0);

  const showPreviousCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  const showNextCard = () => {
    if (cardIndex < cards.length - 3) {
      setCardIndex(cardIndex + 1);
    }
  };
  
    return (
      <div>
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
  <form>
    <Input
      type="text"
      placeholder="Enter location"
      marginBottom="10px"
      size='lg'
    />
    <Input
      type="date"
      marginBottom="10px"
      size='lg'
    />
    <Button color="white" bg="#004aadff" type="submit">
      Search Cars
    </Button>
  </form>
</Flex>

    </Box>
    <Box>
      <Flex justifyContent="space-around" alignItems="center" py="4">
      <Text
          fontSize="3xl"
          cursor="pointer"
          onClick={() => handleLabelClick("sedan")}
          color={selectedLabel === "sedan" ? "teal.500" : "gray.700"}
        >
          Sedan
        </Text>
        <Text
          fontSize="3xl"
          cursor="pointer"
          onClick={() => handleLabelClick("hatchback")}
          color={selectedLabel === "hatchback" ? "teal.500" : "gray.700"}
        >
          Hatchback
        </Text>
        <Text
          fontSize="3xl"
          cursor="pointer"
          onClick={() => handleLabelClick("SUV")}
          color={selectedLabel === "SUV" ? "teal.500" : "gray.700"}
        >
          SUV
        </Text>
      </Flex>
      <Box textAlign="center" p="4">
        {selectedLabel === "sedan" && <Text>Content for Sedan</Text>}
        {selectedLabel === "hatchback" && <Text>Content for Hatchback</Text>}
        {selectedLabel === "SUV" && <Text>Content for SUV</Text>}
      </Box>
    </Box>
    <Box py="1" bg="#004aadff" borderRadius="md" boxShadow="md" p="10">
      <Heading as="h2" color="white" textAlign="center" size="lg" mb="6">
        How to Book a Car
      </Heading>
      <Flex justifyContent="space-between" alignItems="center" w="80%" m="auto">
        <Box textAlign="center" bg="white" p="4" borderRadius="md" boxShadow="xl" w="200px">
          <Image src="https://www.zoomcar.com/img/download.png" alt="Step 1" boxSize="100px" borderRadius="full" />
          <Text mt="2">Log In</Text>
        </Box>
        <Box height="2px" backgroundColor="gray.400" flex="1" mx="4" />
        <Box textAlign="center" bg="white" p="4" borderRadius="md" boxShadow="xl" w="200px">
          <Image src="https://www.zoomcar.com/img/time-location-select.png" alt="Step 2" boxSize="100px" borderRadius="full" />
          <Text mt="2">Select City, Dates, Car</Text>
        </Box>
        <Box height="2px" backgroundColor="gray.400" flex="1" mx="4" />
        <Box textAlign="center" bg="white" p="4" borderRadius="md" boxShadow="xl" w="200px">
          <Image src="	https://www.zoomcar.com/img/deposit.png" alt="Step 3" boxSize="100px" borderRadius="full" />
          <Text mt="2">Book The Car</Text>
        </Box>
        <Box height="2px" backgroundColor="gray.400" flex="1" mx="4" />
        <Box textAlign="center" bg="white" p="4" borderRadius="md" boxShadow="xl" w="200px">
          <Image src="https://www.zoomcar.com/img/zoomaway.png" alt="Step 4" boxSize="100px" borderRadius="full" />
          <Text mt="2">Confirm and Enjoy</Text>
        </Box>
      </Flex>
    </Box>
    <Flex w="80%" py="8" m="auto">
      <Box flex="30%" p="4">
        <Heading as="h2" size="2xl" mb="4">
          Why Choose Our Website?
        </Heading>
        <Text fontSize="xl">
          We offer a variety of compelling reasons why you should choose our car rental service.
        </Text>
      </Box>

      <Box flex="70%" p="4">
        <UnorderedList styleType="none" pl="0" display="flex">
          <ListItem mb="4" display="flex" flexDirection="column" alignItems="center">
            <Image src="https://doav52ie4cv60.cloudfront.net/images/repair.svg" alt="Icon 1" boxSize="40px" mb="2" />
            <Text fontWeight="bold">Accessible</Text>
            <Text>Competitive rates for all types of vehicles.</Text>
          </ListItem>
          <ListItem mb="4" display="flex" flexDirection="column" alignItems="center">
            <Image src="https://doav52ie4cv60.cloudfront.net/images/earning.svg" alt="Icon 2" boxSize="40px" mb="2" />
            <Text fontWeight="bold">Secure</Text>
            <Text>Pay 0 security deposit, get unlimited KMs</Text>
          </ListItem>
          <ListItem display="flex" flexDirection="column" alignItems="center">
            <Image src="https://doav52ie4cv60.cloudfront.net/images/flexibility.svg" alt="Icon 3" boxSize="40px" mb="2" />
            <Text fontWeight="bold">Convenient</Text>
            <Text>From Hatchbacks to SUVs, choose from 25,000+ cars</Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
    <Grid templateColumns="repeat(3, 1fr)" gap="2" h="100px">
      {/* Dropdown 1 */}
      <Box>
        <Select
          defaultValue="default1"
          icon={<Image src="https://doav52ie4cv60.cloudfront.net/images/renters-ico.svg" boxSize="20px" />}
          placement="bottom-start" // Set the placement to open in the bottom direction
        >
          <option value="default1" disabled>
            Select Option 1
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      {/* Dropdown 2 */}
      <Box >
        <Select
          defaultValue="default2"
          icon={<Image src="https://doav52ie4cv60.cloudfront.net/images/earn-ico.svg" boxSize="20px" />}
          placement="bottom" // Set the placement to open in the bottom direction
        >
          <option value="default2" disabled>
            Select Option 2
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      {/* Dropdown 3 */}
      <Box>
        <Select
          defaultValue="default3"
          icon={<Image src="https://doav52ie4cv60.cloudfront.net/images/get-paid-ico.svg" boxSize="20px" />}
          placement="bottom" // Set the placement to open in the bottom direction
        >
          <option value="default3" disabled>
            Select Option 3
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      {/* Dropdown 4 */}
      <Box>
        <Select
          defaultValue="default4"
          icon={<Image src="https://doav52ie4cv60.cloudfront.net/images/car-price-ico.svg" boxSize="20px" />}
          placement="bottom" // Set the placement to open in the bottom direction
        >
          <option value="default4" disabled>
            Select Option 4
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Grid>
    <ChakraProvider theme={theme}>
      <Flex justify="center" align="center" minH="100vh">
        <Button onClick={showPreviousCard} variant="outline" mr="2">
          Previous
        </Button>
        <div
          className="cards-container"
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              className="card"
            >
              <Text>{card}</Text>
            </Box>
          ))}
        </div>
        <Button onClick={showNextCard} variant="outline" ml="2">
          Next
        </Button>
      </Flex>
    </ChakraProvider>

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
  