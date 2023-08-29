import React  from 'react';
import {Box,Flex,Heading,Text,Image} from '@chakra-ui/react';
function HoWToBook() {
  
    return (
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
    );
  }
  
  export default HoWToBook;