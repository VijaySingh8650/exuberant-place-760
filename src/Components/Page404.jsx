import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const style = {
    margin: "150px 0",
    
}
export default function Page404() {
  return (
    <Box style={style}>
          <Heading variant={["sm", "base", "md"]}>Oops...You search something wrong 404</Heading>
          <Link to="/new"><Button mt={2} bg="black" color="white" variant={["sm", "base", "md"]}>Do Shopping</Button></Link>
          
    </Box>
  )
}
