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

const Navbar = () => {
const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Box bg="#004aadff" color="white" py={2} px={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex justifyContent="space-between" alignItems="center">
          <HamburgerIcon onClick={onOpen} mr="10" />
          <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="#004aadff"></DrawerHeader>
          <DrawerBody bg="#004aadff">
          <VStack spacing={4} >
            <Button color="white" variant="outline">
              Menu Item 1
            </Button>
            <Button color="white" variant="outline">
              Menu Item 2
            </Button>
            <Button color="white" variant="outline">
              Menu Item 3
            </Button>
          </VStack>
          </DrawerBody>
          <DrawerFooter bg="#004aadff"></DrawerFooter>
        </DrawerContent>
      </Drawer>
          <Box>
            <img src="./LOGO.png" alt="Logo" width="150" />
          </Box>
          </Flex>
          <HStack spacing={4}>
            <Button color="white" variant="outline">
              Become a Host
            </Button>
            <Button color="white" variant="outline">
              Login / Logout
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
