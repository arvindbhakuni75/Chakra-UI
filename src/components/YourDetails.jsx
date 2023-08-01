import React from 'react'
import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, Textarea, VStack } from "@chakra-ui/react";

const YourDetails = () => {
  return (
    <VStack
          w="full"
          h="full"
          padding={10}
          spacing={10}
          align="flex-start"
          >
          <VStack spacing={2} align="flex-start">
          
            <Heading>Your Details</Heading>
            <Text>If you already have an account, click here to log in</Text>
          </VStack>

          <SimpleGrid column={2} columnGap={3} rowGap={4}  >
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter First Name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter Last Name" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea placeholder="Enter Your Address" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="Enter City" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Countruy</FormLabel>
                <Select placeholder="Select Country" >
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="japan">Japan</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <Checkbox>Ship to the billing address.</Checkbox>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <Button variant="placeItems" w="full" size="lg"  >Place Items</Button>
            </GridItem>

          </SimpleGrid>

        </VStack>

  )
}

export default YourDetails
