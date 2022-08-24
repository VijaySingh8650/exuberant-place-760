import { Box, Img,Text,Input,InputRightElement,InputGroup, Button,Container} from '@chakra-ui/react'
import React, { useState }  from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./navbar.module.css";
import {FiUser,FiSearch,FiShoppingBag } from "react-icons/fi";
import { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';
import { CloseIcon, SearchIcon} from '@chakra-ui/icons'


const linksOfNavbar = [{
    to:"/",
    path:"Home"
}, {
    to:"/new",
    path:"New"
    }, {
    to:"/shopall",
    path:"ShopAll"
    }, {
    to:"/earrings",
    path:"Earrings"
    }, {
   to:"/necklaces",
    path:"Necklaces" 
    }, {
    to:"/bracelets",
    path:"Bracelets" 
    }, {
    to:"/rings",
    path:"Rings" 
    }, {
     to:"/shopsocial",
    path:"Shop Social" 
    }]

const activeStyle = {
    color: "black",
    textDecoration: "underline",
    fontWeight:"600"
}
const defaultStyle = {
    color: "black",
    textDecoration: "none",
    fontWeight:"350"
}

export default function Navbar() {
    const { isAuth } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }
    
    return (<>
        
        <Box className={styles.headingTop}>

            <Text fontSize="sm" className={styles.top}>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</Text>
            
        </Box>


       




      <Box className={styles.container}>
          <Box>
              <Link to="/">
               <Img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?b=allow_avif&v=1645644264" alt=""/>
              </Link>
          </Box>
          <Box >
              {linksOfNavbar.map((ele,index) => {
                  return <NavLink className={styles.subContainer}
                      style={({isActive})=>(isActive?activeStyle:defaultStyle)}
                      to={ele.to} key={index}>{ele.path}
                      
                  </NavLink>
              })}
          </Box>
          <Box className={styles.containerIcon}>
                <FiSearch className={styles.icon} onClick={handleShow} />
              <Link to={isAuth?"/cart":"/login"}><FiUser  className={styles.icon}/></Link>
              <Link to="/cart"><FiShoppingBag  className={styles.icon}/></Link>
              
          </Box>
        </Box>
        {
            show &&
            <Box className={styles.searchIcon}>

            
            <Container className={styles.search}>
            <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type="text"
        placeholder='Search Your Favorite Jewellery'
                />
                <InputRightElement width='4.5rem'>

                                <SearchIcon className={styles.searchIconOfProduct} />
                </InputRightElement>
               
     
        
            </InputGroup>
            <CloseIcon ml={3} onClick={handleShow} className={styles.searchIconOfProduct}/>
                    </Container>
                    </Box>
        }
        
       
  </>)
}
