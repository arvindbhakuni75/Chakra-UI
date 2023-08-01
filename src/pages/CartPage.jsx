import React from 'react';
import { Container, Flex } from "@chakra-ui/react";
import YourDetails from "../components/YourDetails";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div>
      <Container maxW="container.xl" p={[10, 0, 0]}>
        <Flex 
          h={{base: "auto", md: "100vh"}} 
          py={[0, 10, 20]} 
          direction={{
            base: "column-reverse",
            md: "row"
          }}
          >
          <YourDetails />
          {/* Right Side of the form */}
          <Cart />
        </Flex>
      </Container>
    </div>
  )
}

export default CartPage
