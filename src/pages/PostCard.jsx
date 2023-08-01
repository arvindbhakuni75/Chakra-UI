import React from "react";
import { Card, CardBody, Stack, Heading, Text, Button, Image, HStack, Avatar, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <Flex mt="20px" justify="center" align="center">
      <Card maxW="sm" w="320px" >
        <CardBody>
          <Image
            src="https://t3.ftcdn.net/jpg/03/95/66/84/360_F_395668464_GuKi62VG173R4xkSpLXNVnydg91dvjn1.jpg"
            borderRadius="lg"
          />
          <HStack mt="10px">
            <Avatar size="sm" />
            <Text fontWeight="700" >Jon Dow</Text>
            <Text fontSize="xs">1 min ago</Text>
          </HStack>
          <Stack mt="2" spacing="3">
            <Heading size="md">Desktop Setup </Heading>
            <Text fontSize="sm">
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design. lorem
            </Text>
           
          </Stack>
          <HStack mt={2} w="full" justifyContent="end">
            <Button variant="solid" as={Link} to="/post" >
              Buy now
            </Button>
          </HStack>
        </CardBody>
          
      </Card>
    </Flex>
  );
};

export default PostCard;
