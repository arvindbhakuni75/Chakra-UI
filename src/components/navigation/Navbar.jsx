import {
  Avatar,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";

// Auth0 
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { loginWithRedirect, logout, isAuthenticated, user  } = useAuth0();

  return (
    <>
      <Flex
        h="75px"
        bg="brand.800"
        justifyContent="space-between"
        px={10}
        align="center"
      >
        <IconButton
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          variant="ghost"
          color="white"
          _hover={{ bg: "main.400" }}
          fontSize="2xl"
        >
          <FaBars />
        </IconButton>

        {/* Menu on Avtar logo */}
        <Flex align="center" gap={4}>
        <Menu>
          <MenuButton >
            <Avatar name={user?.picture} />
            
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Setting</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
        <Box>
        {
          isAuthenticated ?<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</Button> : <Button onClick={loginWithRedirect} >Login</Button>
          
        }
        </Box>
        
        </Flex>
      </Flex>

      {/* Drawer */}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;


