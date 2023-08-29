import React from 'react';
import {Box,Flex,Heading,Text,Image,UnorderedList,ListItem
} from '@chakra-ui/react';

function WhyChose() {

    return (
    <Flex w="80%" py="8" m="auto">
      <Box flex="30%" p="4">
        <Heading as="h2" size="2xl" mb="4">
          Why Choose Our Website?
        </Heading>
        <Text fontSize="xl">
          We offer a variety of compelling reasons why you should choose our car rental service.
        </Text>
      </Box>

      <Box flex="70%" p="4">
        <UnorderedList styleType="none" pl="0" display="flex">
          <ListItem mb="4" display="flex" flexDirection="column" alignItems="center">
            <Image src="https://doav52ie4cv60.cloudfront.net/images/repair.svg" alt="Icon 1" boxSize="40px" mb="2" />
            <Text fontWeight="bold">Accessible</Text>
            <Text>Competitive rates for all types of vehicles.</Text>
          </ListItem>
          <ListItem mb="4" display="flex" flexDirection="column" alignItems="center">
            <Image src="https://doav52ie4cv60.cloudfront.net/images/earning.svg" alt="Icon 2" boxSize="40px" mb="2" />
            <Text fontWeight="bold">Secure</Text>
            <Text>Pay 0 security deposit, get unlimited KMs</Text>
          </ListItem>
          <ListItem display="flex" flexDirection="column" alignItems="center">
            <Image src="https://doav52ie4cv60.cloudfront.net/images/flexibility.svg" alt="Icon 3" boxSize="40px" mb="2" />
            <Text fontWeight="bold">Convenient</Text>
            <Text>From Hatchbacks to SUVs, choose from 25,000+ cars</Text>
          </ListItem>
        </UnorderedList>
      </Box>
     </Flex>
    );
  }
  
  export default WhyChose;
  