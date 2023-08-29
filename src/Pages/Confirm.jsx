import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';

function BookingSuccessPage() {
  return (
    <Box p={4}>
      <Center>
        <VStack spacing={4}>
          <Heading as="h1" size="xl">
            Booking Successful!
          </Heading>
          <Image src="https://zoomcar-assets.zoomcar.com/170495/HostCarImage/host_car_image_170495862be297-2716-4283-b373-624f4d180039.jpg20230305-37-1xjofp" alt="Booking Successful" w="300px" />
          <Text fontSize="lg">Thank you for choosing our service.</Text>
          <Text fontSize="lg">Your booking has been confirmed.</Text>
          <Button colorScheme="teal" onClick={() => window.location.href = '/'}>
            Back to Home
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}

export default BookingSuccessPage;
