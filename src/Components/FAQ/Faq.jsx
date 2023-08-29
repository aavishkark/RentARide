import React from 'react';
import {Box,Accordion,AccordionItem,AccordionButton,AccordionPanel,Grid
 } from '@chakra-ui/react';

function Faq() {
    const faqData = [
      {
        id: 1,
        question: "How do I rent a car?",
        answer: "You can rent a car by signing in to your account, searching for available cars, and making a reservation.",
      },
      {
        id: 2,
        question: "What are the rental rates?",
        answer: "Rental rates vary depending on the car's make, model, and rental duration. You can view rates during the booking process.",
      },
      {
        id: 3,
        question: "Is insurance included?",
        answer: "Basic insurance is included in the rental fee. Additional insurance options are available for purchase.",
      },
      {
        id: 4,
        question: "Can I cancel my reservation?",
        answer: "Yes, you can cancel your reservation within 24 hours of booking. After that, cancellation fees may apply.",
      },]
    return (
      <div>
    <Box py="8">
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        {faqData.map((faq) => (
          <Accordion allowMultiple key={faq.id}>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Grid>
    </Box>
      </div>
    );
  }
  
  export default Faq;