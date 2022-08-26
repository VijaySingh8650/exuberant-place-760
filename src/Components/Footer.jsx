import { CheckIcon } from '@chakra-ui/icons'
import { Box, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./footer.module.css"
import {BsFacebook, BsInstagram,BsTwitter} from "react-icons/bs"

export default function Footer() {
  return (
    <>
      <Box className={styles.contain}>
        <Box className={styles.container}>
          
          <Box>
            <Heading  mb={2} variant={["sm","base","md"]}>Contact Us!</Heading>
            <Text  varint={["sm", "base", "md"]}>Need to talk? Reach us via email, phone or text!</Text>
            <Text  varint={["sm", "base", "md"]}><b>Email: Customerservice@Lovoda.com</b></Text>
            <Text  varint={["sm", "base", "md"]}><b>Phone: (443) 500-1200</b></Text>
            <Text  varint={["sm","base","md"]}>**Msg &data rates may apply</Text>
           </Box>
        </Box>
        <Box className={styles.email}>
          <Text varint={["sm", "base", "md"]}>Subscribe to our emails</Text>

          <Box className={styles.subs}>

          <InputGroup>
           
            <Input placeholder='Enter Email' />
            <InputRightElement children={<CheckIcon color='gray.500' />} />
          </InputGroup>
          </Box>
          <Box className={styles.iconParent}>
            <BsFacebook className={styles.icon} />
            <BsInstagram className={styles.icon} />
            <BsTwitter className={styles.icon}/>
          </Box>

          
        </Box>

      </Box> 
      <Text color="gray" mb={2}>© 2022, Lovoda Powered by Shopify</Text>
    </>
  )
}
