import React from 'react';
import { AspectRatio, Button, Divider, HStack, Heading, Image, Stack, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import sktboart from './acets/download.jpg'

const Cart = () => {

    const { toggleColorMode } = useColorMode()

    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
    const textColor = useColorModeValue("gray.600", "whiteAlpha.600")

  return (
    <VStack
          w="full"
          h="full"
          padding={10}
          spacing={6}
          align="flex-start"
          bg={bgColor}
        >
          <VStack w="full" alignItems="flex-start" spacing={3} >
            <Heading size="2xl">Your Cart</Heading>
                <HStack w="full" justifyContent="space-between">
                    <Text>If the price is too hard on your eyes, </Text>
                    <Button onClick={toggleColorMode} variant='outline' colorScheme="black" size='sm'>try changing the theme.</Button>
                </HStack>
              
            
          </VStack>

          <HStack w="full" spacing={6} alignItems="center">
            <AspectRatio ratio={1} w= {24}>
              <Image src={sktboart} alt="Loading"/>
            </AspectRatio>

            <Stack spacing={0} w="full" direction="row" alignItems="center" justifyContent="space-between">
              <VStack w="full" spacing={0} alignItems="flex-start">
                <Heading size="md">Penny board</Heading>
                <Text color={textColor}>PNYCOMP27541</Text>
              </VStack>
              <Heading size="sm" textAlign="end" >$119.00</Heading>
            </Stack>
          </HStack>

          <VStack w="full" spacing={4} alignItems="stretch"> 
            <HStack justifyContent="space-between">
              <Text>Subtotal</Text>
              <Heading size="sm" >$119.00</Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Shipping</Text>
              <Heading size="sm" >$19.99</Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Taxes (estimated)</Text>
              <Heading size="sm" >$23.80</Heading>
            </HStack>
          </VStack>

          <Divider />

          <HStack w="full" justifyContent="space-between">
              <Text>Total</Text>
              <Heading size="lg" >$119.00</Heading>
            </HStack>




        </VStack>
  )
}

export default Cart
