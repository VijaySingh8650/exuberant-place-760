import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,Button,useDisclosure,Text, Img,Box
} from '@chakra-ui/react'
import {MdMenu} from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import styles from "./navbar.module.css";
import React from "react";

export default function NavbarMenu({linksOfNavbar}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <>
      
          <MdMenu  onClick={onOpen} style={{cursor:"pointer", fontSize:"20px"}} />
          <Drawer
              size="xs"
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
                  <DrawerHeader>
                      <Box>
              <Link to="/" onClick={onClose}>
               <Img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?b=allow_avif&v=1645644264" alt=""/>
              </Link>
          </Box>
          </DrawerHeader>

          <DrawerBody className={styles.flex}>
            {linksOfNavbar.map((ele,index) => {
                return <Text key={index} onClick={onClose} variant={["sm","base","md"]}>

                <NavLink  className={styles.subContainer}
                      
                      to={ele.to} key={index}>{ele.path}
                      
                  </NavLink>
                </Text>
              })}
          </DrawerBody>

          <DrawerFooter>
            <Button bg="black" color="white" variant={["sm","base","md"]} mr={3} onClick={onClose}>
              Close
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}