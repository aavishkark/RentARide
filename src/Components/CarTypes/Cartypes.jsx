import React, { useState,useEffect} from 'react';
import {Box,Flex,Text} from '@chakra-ui/react';
import {
  Grid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function CarTypesComponent() {
    const [selectedLabel, setSelectedLabel] = useState("Sedan");
    const [cars,setcars]=useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;
    const handleLabelClick = (label) => {
      setSelectedLabel(label);
    };
    const apiUrl = process.env.REACT_APP_API_URL + '/cars';
    useEffect(() => {
      fetch(`${apiUrl}?type2=${selectedLabel}`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setcars(data)
       } )
       .catch((error) => console.error('Error fetching data:', error));
   }, [selectedLabel]);
   const handleCardClick = (car, index) => {
    setSelectedCar(car);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

 
  const nextCards = () => {
    if (currentIndex < cars.length - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const prevCards = () => {
    if (currentIndex >= cardsPerPage) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };
  return (
    <Box>
      <Flex justifyContent="space-around" alignItems="center" py="4">
      <Text
          fontSize="3xl"
          cursor="pointer"
          onClick={() => handleLabelClick("Sedan")}
          color={selectedLabel === "Sedan" ? "teal.500" : "gray.700"}
        >
          Sedan
        </Text>
        <Text
          fontSize="3xl"
          cursor="pointer"
          onClick={() => handleLabelClick("Hatchback")}
          color={selectedLabel === "Hatchback" ? "teal.500" : "gray.700"}
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
        {selectedLabel === "Sedan" && <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Car List
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {cars.slice(currentIndex, currentIndex + cardsPerPage).map((car, index) => (
          <Box
            key={car.name}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            onClick={() => handleCardClick(car, currentIndex + index)}
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Image src={car.photos} alt={car.name} />
            <Text mt={2}>{car.type2}</Text>
            <Text fontWeight="bold">{car.name}</Text>
            <Text>Rating: {car.rating}</Text>
            <Text>Price per Day: ${car.pricePerDay}</Text>
          </Box>
        ))}
      </Grid>

      <Box mt={4} textAlign="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={prevCards}
          aria-label="Previous Cards"
          isDisabled={currentIndex === 0}
          variant="ghost"
          size="lg"
        />
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={nextCards}
          aria-label="Next Cards"
          isDisabled={currentIndex >= cars.length - cardsPerPage}
          variant="ghost"
          size="lg"
        />
      </Box>

      {/* Car Details Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Car Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCar && (
              <Stack spacing={4}>
                <Image src={selectedCar.photos[0]} alt={selectedCar.name} />
                <Text>Type: {selectedCar.type2}</Text>
                <Text>Name: {selectedCar.name}</Text>
                <Text>Rating: {selectedCar.rating}</Text>
                <Text>Price per Day: ${selectedCar.pricePerDay}</Text>
                {/* Add more details here */}
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>}
        {selectedLabel === "Hatchback" && <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Car List
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {cars.slice(currentIndex, currentIndex + cardsPerPage).map((car, index) => (
          <Box
            key={car.name}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            onClick={() => handleCardClick(car, currentIndex + index)}
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Image src={car.photos} alt={car.name} />
            <Text mt={2}>{car.type2}</Text>
            <Text fontWeight="bold">{car.name}</Text>
            <Text>Rating: {car.rating}</Text>
            <Text>Price per Day: ${car.pricePerDay}</Text>
          </Box>
        ))}
      </Grid>

      <Box mt={4} textAlign="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={prevCards}
          aria-label="Previous Cards"
          isDisabled={currentIndex === 0}
          variant="ghost"
          size="lg"
        />
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={nextCards}
          aria-label="Next Cards"
          isDisabled={currentIndex >= cars.length - cardsPerPage}
          variant="ghost"
          size="lg"
        />
      </Box>

      {/* Car Details Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Car Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCar && (
              <Stack spacing={4}>
                <Image src={selectedCar.photos} alt={selectedCar.name} />
                <Text>Type: {selectedCar.type2}</Text>
                <Text>Name: {selectedCar.name}</Text>
                <Text>Rating: {selectedCar.rating}</Text>
                <Text>Price per Day: ${selectedCar.pricePerDay}</Text>
                {/* Add more details here */}
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>}
        {selectedLabel === "SUV" && <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Car List
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {cars.slice(currentIndex, currentIndex + cardsPerPage).map((car, index) => (
          <Box
            key={car.name}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            onClick={() => handleCardClick(car, currentIndex + index)}
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Image src={car.photos} alt={car.name} />
            <Text mt={2}>{car.type2}</Text>
            <Text fontWeight="bold">{car.name}</Text>
            <Text>Rating: {car.rating}</Text>
            <Text>Price per Day: ${car.pricePerDay}</Text>
          </Box>
        ))}
      </Grid>

      <Box mt={4} textAlign="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={prevCards}
          aria-label="Previous Cards"
          isDisabled={currentIndex === 0}
          variant="ghost"
          size="lg"
        />
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={nextCards}
          aria-label="Next Cards"
          isDisabled={currentIndex >= cars.length - cardsPerPage}
          variant="ghost"
          size="lg"
        />
      </Box>

      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Car Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCar && (
              <Stack spacing={4}>
                <Image src={selectedCar.photos} alt={selectedCar.name} />
                <Text>Type: {selectedCar.type2}</Text>
                <Text>Name: {selectedCar.name}</Text>
                <Text>Rating: {selectedCar.rating}</Text>
                <Text>Price: Rs {selectedCar.pricePerDay}</Text>
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>}
      </Box>
    </Box>
  );
}

export default CarTypesComponent;