import {
  Avatar,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";
import React from "react";

const PostPage = () => {
  return (
    <Container>
      <Stack mt={8}  spacing={4}>
        <Heading fontSize="2xl">Web Development</Heading>
        <Image
          w="full"
          src="https://img.freepik.com/free-photo/high-angle-gaming-setup-with-computer_23-2149829138.jpg"
        />
        <HStack>
          <Avatar size="lg" name="Arvind Bhakuni" />
          <Text fontWeight="600">Jon Dow</Text>
          <Text size="xm">1 min ago</Text>
        </HStack>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure
          aut tempore, deleniti aspernatur autem molestiae iusto voluptatem,
          nesciunt doloribus ea reiciendis illum, architecto dolorem delectus
          aliquid repudiandae? Recusandae praesentium corporis sed beatae vitae
          non enim fugit quo odio,
          <br />
          asperiores laboriosam dolores est totam animi eveniet inventore quod.
          Odit quia aliquid vitae cum! Vel, itaque ut animi eligendi iure minus
          ducimus, odit sed ad sunt maiores, nesciunt quasi pariatur suscipit
          repellendus commodi in iusto eius culpa libero quidem cupiditate!
          Ducimus cum voluptates molestias omnis cumque ipsum sequi voluptatem
          excepturi veniam,
        </Text>
        <Text mb={10} fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure
          aut tempore, deleniti aspernatur autem molestiae iusto voluptatem,
          nesciunt doloribus ea reiciendis illum, architecto dolorem delectus
          aliquid repudiandae? Recusandae praesentium corporis sed beatae vitae
          non enim fugit quo odio,
          <br />
          asperiores laboriosam dolores est totam animi eveniet inventore quod.
          Odit quia aliquid vitae cum! Vel, itaque ut animi eligendi iure minus
          ducimus, odit sed ad sunt maiores, nesciunt quasi pariatur suscipit
          repellendus commodi in iusto eius culpa libero quidem cupiditate!
          Ducimus cum voluptates molestias omnis cumque ipsum sequi voluptatem
          excepturi veniam,
        </Text>

        <Accordion mb={10}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

    {/* Accordion */}
  <AccordionItem w="full">
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Stack>
    </Container>
  );
};

export default PostPage;
