import React from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  VStack
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink} from '@chakra-ui/react';
import { useAuth } from '../Context/LoginContext';
import { useUserProfile } from '../Context/UserContext';
import { useLocation } from '../Context/LocationContext';
<ChakraLink as={ReactRouterLink} to='/home'>
  Home
</ChakraLink>
const Navbar = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
const { isAuth, login, logout,isLoggedIn } = useAuth();
const { userProfile, updateUserProfile } = useUserProfile();
const { location, updateLocation } = useLocation();
console.log(isLoggedIn)
  return (
    <>
    <Box bg="#004aadff" color="white" py={2} px={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex justifyContent="space-between" alignItems="center">
          <HamburgerIcon onClick={onOpen} mr="10" />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader bg="#004aadff"></DrawerHeader>
    <DrawerBody bg="#004aadff">
      <VStack spacing={4} align="center">
        <Button
          color="white"
          variant="outline"
          borderRadius="full"
          px={8}
          py={4}
          fontSize="lg"
          _hover={{ bg: "teal.500", color: "white" }}
        >
          Change Location
        </Button>
        <Button
          color="white"
          variant="outline"
          borderRadius="full"
          px={8}
          py={4}
          fontSize="lg"
          _hover={{ bg: "teal.500", color: "white" }}
        >
          Profile
        </Button>
        <Button
          color="white"
          variant="outline"
          borderRadius="full"
          px={8}
          py={4}
          fontSize="lg"
          _hover={{ bg: "teal.500", color: "white" }}
        >
          Your Bookings
        </Button>
        <Button
          color="white"
          variant="outline"
          borderRadius="full"
          px={8}
          py={4}
          fontSize="lg"
          _hover={{ bg: "teal.500", color: "white" }}
        >
          Become A Host
        </Button>
        <Button
          color="white"
          variant="outline"
          borderRadius="full"
          px={8}
          py={4}
          fontSize="lg"
          _hover={{ bg: "teal.500", color: "white" }}
        >
          Help & Support
        </Button>
        {isLoggedIn ? (
          <Button
            color="white"
            variant="outline"
            borderRadius="full"
            px={8}
            py={4}
            fontSize="lg"
            _hover={{ bg: "teal.500", color: "white" }}
            onClick={logout}
          >
            Log Out
          </Button>
        ) : (
          <Button
            color="white"
            variant="outline"
            borderRadius="full"
            px={8}
            py={4}
            fontSize="lg"
            _hover={{ bg: "teal.500", color: "white" }}
          >
            <ChakraLink as={ReactRouterLink} to="/login">
              Log In
            </ChakraLink>
          </Button>
        )}
      </VStack>
    </DrawerBody>
    <DrawerFooter bg="#004aadff"></DrawerFooter>
  </DrawerContent>
</Drawer>

          <Box>
          <ChakraLink as={ReactRouterLink} to='/'>
          <img src="./LOGO.png" alt="Logo" width="150" />
</ChakraLink>
            
          </Box>
          </Flex>
          <HStack spacing={4}>
            <Button color="white" variant="outline">
            <ChakraLink as={ReactRouterLink} to='/host'>
  Become A Host
</ChakraLink>
            </Button>{isLoggedIn? <Button color="white" variant="outline" onClick={logout}>
            
 Log out
            </Button>:<Button color="white" variant="outline">
            <ChakraLink as={ReactRouterLink} to='/login'>
 Log In
</ChakraLink>
            </Button>}
           
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
