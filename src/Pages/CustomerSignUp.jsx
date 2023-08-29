import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Heading,
  Select
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink} from '@chakra-ui/react';
function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [signUpResult, setSignUpResult] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const cityOptions = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Kolkata',
    'Chennai',
    'Hyderabad',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const existingUser = await fetch(
        `http://localhost:3000/users?username=${formData.username}`
      ).then((response) => response.json());
    if(existingUser.length > 0){
      handleSignUpError('User already registered.');
    }
    else{
      formData.activeRides = [];
        try {
            const response = await fetch('http://localhost:3000/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            if (response.status === 201) {
              handleSignUpSuccess();
            } else if (response.status === 409) {
              handleSignUpError();
            } else {
              handleSignUpError();
            }
          } catch (error) {
            handleSignUpError("error");
          }
    }    
  };

  const handleSignUpSuccess = () => {
    setSignUpResult('success');
    setIsPopoverOpen(true);
  };

  const handleSignUpError = (err) => {
    setSignUpResult(err);
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>

        <FormControl id="password" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="city" isRequired>
  <FormLabel>City</FormLabel>
  <Select
    name="city"
    value={formData.city}
    onChange={handleChange}
    placeholder="Select a city"
  >
    {cityOptions.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </Select>
</FormControl>


          <FormControl id="username" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Sign Up
          </Button>
        </Stack>
      </form>

      <Popover isOpen={isPopoverOpen} onClose={handlePopoverClose}>
        <PopoverTrigger>
          <span></span>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            {signUpResult === 'success' ? 'Success' : 'Error'}
          </PopoverHeader>
          <PopoverBody>
            {signUpResult === 'success'
              ? <><Heading>Sign-up Successful!</Heading><Button colorScheme="teal" variant="outline">
              <ChakraLink as={ReactRouterLink} to='/login'>
   Log In
  </ChakraLink>
              </Button></>
              : <><Heading>User Already Registered!</Heading><Button colorScheme="teal" variant="outline">
              <ChakraLink as={ReactRouterLink} to='/login'>
   Log In
  </ChakraLink>
              </Button></>}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default SignUpForm;

