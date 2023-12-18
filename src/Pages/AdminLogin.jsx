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
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Context/LoginContext';

function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuth, login, logout } = useAuth();
  const nav=useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL + '/admin';
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });
      const users = await response.json();
      console.log(users)
      const user =  users.username === email && users.password === password
      if (user) {
        console.log('Login successful');
        login()
        nav('/adminpage')
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
      Login As Admin
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
      </Stack>
    </form>
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

export default AdminLoginPage;
