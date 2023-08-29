import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Spacer,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

function CarCard({ car }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handlebook=()=>{
    
  }
  return (
    <Box>
      <Card borderWidth="1px" borderRadius="md" p={2} mb={4}>
        <CardHeader>
          <Text fontSize="xl" fontWeight="bold">
            {car.name}
          </Text>
        </CardHeader>
        <CardBody>
          <Image src={car.photos} alt={car.name} h="200px" />
          <Text fontSize="lg">Rating: {car.rating}</Text>
          <Text fontSize="lg">Price: ₹{car.pricePerDay}</Text>
          <Text fontSize="lg">City: {car.city}</Text>
        </CardBody>
        <CardFooter>
          <Flex>
            <Spacer />
            <Button colorScheme="teal" size="sm" onClick={onOpen}>
              View
            </Button>
          </Flex>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{car.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image src={car.photos} alt={car.name} h="200px" />
            <Text>Rating: {car.rating}</Text>
            <Text>Price: ₹{car.pricePerDay}</Text>
            <Text>City: {car.city}</Text>
            <Text>{car.fastag?"Fastag":"No Fastag"}</Text>
            <Text>{car.type2}</Text>
            <Text>{car.fuel}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="teal">
            <ChakraLink as={ReactRouterLink} to={`/booking/${car.id}`}>Book</ChakraLink>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CarCard;


