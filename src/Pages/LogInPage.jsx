import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useAuth } from '../Components/Context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from '../Components/Context/UserContext';
import { useLocation } from '../Components/Context/LocationContext';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuth, login, logout } = useAuth();
  const { userProfile, updateUserProfile } = useUserProfile();
  const { location, updateLocation } = useLocation();
  const apiUrl2 = process.env.REACT_APP_API_URL + '/users';
  const nav=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl2, {
        method: 'GET',
      });
      const users = await response.json();
      console.log(users)
      const user = users.find(
        (u) => u.username === email && u.password === password
      );
      if (user) {
        console.log('Login successful');
        login();
        updateUserProfile(users)
        nav('/');
      } else {
        setErrorMessage('Wrong username or password');
        setIsPopoverOpen(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
    setErrorMessage('');
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Stack mt={4} direction="row" spacing={4}>
          <Button mt={4} colorScheme="teal" type="submit">
            Login
          </Button>
          <ChakraLink as={ReactRouterLink} to="/CustomerSignUp">
            <Button mt={4} colorScheme="teal">
              Sign Up
            </Button>
          </ChakraLink>
        </Stack>
      </form>
      <Stack mt={4} direction="row" spacing={4}>
        <Button colorScheme="teal" variant="outline">
          <ChakraLink as={ReactRouterLink} to="/adminlogin">
            Login as Admin
          </ChakraLink>
        </Button>
      </Stack>
      <Popover isOpen={isPopoverOpen} onClose={handlePopoverClose}>
        <PopoverTrigger>
          <span></span>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Error</PopoverHeader>
          <PopoverBody>
            <Text>{errorMessage}</Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default LoginPage;

  