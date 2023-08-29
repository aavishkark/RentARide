import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import axios from 'axios';
function AdminPage() {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({
      
    });
  
    useEffect(() => {
      fetch('http://localhost:3000/cars')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setCars(data)
       } )
       .catch((error) => console.error('Error fetching data:', error));
   }, []);
   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
   const [url,seturl]=useState("")
  const [updateCarData, setUpdateCarData] = useState({
  });
    const handleAddCar = () => {
      const carData = {
        name: newCar.name,
        fuel: newCar.fuel,
        seats: newCar.seats,
        pricePerDay: newCar.pricePerDay,
        trips:0,
        fastag:true,
        city: newCar.city,
        rating:0,
        photo:"https://zoomcar-assets.zoomcar.com/170495/HostCarImage/host_car_image_170495862be297-2716-4283-b373-624f4d180039.jpg20230305-37-1xjofp"
      };
      axios.post('http://localhost:3000/cars', carData)
        .then((response) => {
          console.log('Car added successfully', response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error adding car', error);
        });
    };
    const handleUpdateCar = (carId) => {
      seturl(`http://localhost:3000/cars/${carId}`)
      axios.get(`http://localhost:3000/cars/${carId}`)
        .then((response) => {
          setUpdateCarData(response.data)
          openUpdateModal()
        })
        .catch((error) => {
          console.error('Error adding car', error);
        });
    };
    const postupdate=()=>{
      axios
      .put(url, updateCarData)
      .then((response) => {
        console.log('Data updated successfully:', response.data);
        window.location.reload();
        
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
    }
    const handleDeleteCar = (carId) => {
      axios
  .delete(`http://localhost:3000/cars/${carId}`)
  .then((response) => {
    console.log('Resource deleted successfully:', response.data);
    window.location.reload();
  })
  .catch((error) => {
    console.error('Error deleting resource:', error);
  });
    };
    const openUpdateModal = (carData) => {
      setIsUpdateModalOpen(true);
    };
    
    const closeUpdateModal = () => {
      setIsUpdateModalOpen(false);
    };
    return (
      <Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>
          Admin Dashboard
        </Heading>
        <Box mb={4}>
          <Heading as="h3" size="md" mb={2}>
            Add New Car
          </Heading>
          <FormControl id="brand">
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              value={newCar.city}
              onChange={(e) =>
                setNewCar({ ...newCar, city: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="model" mt={2}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={newCar.name}
              onChange={(e) =>
                setNewCar({ ...newCar, name: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="year" mt={2}>
            <FormLabel>Fuel</FormLabel>
            <Input
              type="text"
              value={newCar.fuel}
              onChange={(e) =>
                setNewCar({ ...newCar,fuel: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="mileage" mt={2}>
            <FormLabel>Seats</FormLabel>
            <Input
              type="text"
              value={newCar.seats}
              onChange={(e) =>
                setNewCar({ ...newCar, seats: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="availability" mt={2}>
            <FormLabel>Price</FormLabel>
            <Input
              type="text"
              value={newCar.pricePerDay}
              onChange={(e) =>
                setNewCar({ ...newCar, pricePerDay: e.target.value })
              }
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            onClick={handleAddCar}
          >
            Add Car
          </Button>
        </Box>
        <Heading as="h3" size="md" mb={2}>
          Car Inventory
        </Heading>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Fuel</Th>
              <Th>Seats</Th>
              <Th>Price</Th>
              <Th>Trips</Th>
              <Th>City</Th>
            </Tr>
           
          </Thead>
          <Tbody>
            {cars.map((car) => (
              <Tr key={car.id}>
                <Td>{car.name}</Td>
                <Td>{car.fuel}</Td>
                <Td>{car.seats}</Td>
                <Td>{car.pricePerDay}</Td>
                <Td>{car.city}</Td>
                <Td>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={() => handleUpdateCar(car.id)}
                  >
                    Update
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    ml={2}
                    onClick={() => handleDeleteCar(car.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Modal
  isOpen={isUpdateModalOpen}
  onClose={closeUpdateModal}
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Update Car</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <FormControl id="brand">
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              value={updateCarData.city}
              onChange={(e) =>
                setUpdateCarData({ ...updateCarData, city: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="model" mt={2}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={updateCarData.name}
              onChange={(e) =>
                setUpdateCarData({ ...updateCarData, name: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="year" mt={2}>
            <FormLabel>Fuel</FormLabel>
            <Input
              type="text"
              value={updateCarData.fuel}
              onChange={(e) =>
                setUpdateCarData({ ...updateCarData, fuel: e.target.value })
              }
              
            />
          </FormControl>
          <FormControl id="mileage" mt={2}>
            <FormLabel>Seats</FormLabel>
            <Input
              type="text"
              value={updateCarData.seats}
              onChange={(e) =>
                setUpdateCarData({ ...updateCarData, seats: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="availability" mt={2}>
            <FormLabel>Price</FormLabel>
            <Input
              type="text"
              value={updateCarData.pricePerDay}
              onChange={(e) =>
                setUpdateCarData({ ...updateCarData, pricePerDay: e.target.value })
              }
            />
          </FormControl>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="teal" onClick={postupdate}>
        Update
      </Button>
      <Button variant="ghost" onClick={closeUpdateModal}>
        Cancel
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
      </Box>
      
    );
  }
  
  export default AdminPage;
  