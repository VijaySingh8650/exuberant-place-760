
import { Box, Button, Heading,  SimpleGrid, Spinner, Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState} from 'react';

import Footer from '../Components/Footer';

import { searchData } from '../Config/data';
import { AuthContext } from '../Context/ContextProvider';
import styles from "./searchproducts.module.css";
import BasicUsage from './ModalComponent';
import Product from './Product';
import { Link } from 'react-router-dom';



export default function SearchProducts() {
    const {search} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [show,setShow]= useState(false);
  const [product, setProduct] = useState({});
  
    // console.log(querry);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Search Products – Lovoda"
  },[])

  useEffect(() => {
      setIsLoading(true);
      setIsError(false);
    setTimeout(() => {
      searchData(search).then((res) => {
        // console.log("inside")
        window.scrollTo(0, 0);
        setData(res.data);
          setIsLoading(false);
          setIsError(false);
      }).catch((err) => {
          console.log(err);
        setIsError(true);
        setIsLoading(false);
      })
    }, 1000)
  }, [search]);

  


  



  

  
  const isOpen = (item) => {
    setShow(true);
    setProduct(item);
  }
   const isClose = () => {
    setShow(false);
  }


  return (
    <>
      {
        isLoading &&  <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='black'
          size='xl'
          m={40} />
}
          {
             data.length===0 || isError?  <Box className={styles.heading}>
        <Heading variant={["sm","base","md"]}>Nothing Got !</Heading>
              <Text mt={2} variant={["sm", "base", "md"]}>Why don't you search something like "Earrings", "Bag", "Necklace", "Ring" & many more?</Text>
              <Text>Have a look at our products..</Text>
              <Link  to="/allproducts">
                  
        <Button mt={2} bg="black" color="white" variant={["sm","base","md"]}>Show Products</Button>
              </Link>
              </Box> :
               <>
                                   <Heading align="left" ml="20px" mt="20px" variant={["sm","base","md"]}>Products</Heading>
     
        <SimpleGrid columns={[1, 2, 4, 4]} className={styles.grid}>
        
        {
          data && data.map((item) => {
            
            return <Product key={item.id} data={item} isOpen={isOpen} />
            
          })
       }

      </SimpleGrid>
            <BasicUsage product={product} isOpen={show} isClose={isClose} />
          </>
                      
                    
                  
          }
        

          
     
      

    
      <Footer/>
      </>
  )
}

