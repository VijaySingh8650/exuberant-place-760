import { Box, Img, Heading,Text, Button, SimpleGrid, Container } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeGetData } from '../Config/data';
import styles from "./home.module.css";
import BasicUsage from './ModalComponent';
export default function Home() {
  const [data, setData] = useState([]);
  const [over, setOver] = useState(false);
  const [show,setShow]= useState(false);
  const [product,setProduct]= useState({});


  useEffect(() => {
    homeGetData().then((res) => {
      // console.log(res.data);
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  
  const isOpen = (item) => {
    setShow(true);
    setProduct(item);
  }
   const isClose = () => {
    setShow(false);
  }


  return (
    <>
    
    <Box className={styles.container}>
      <Img className={styles.image} src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_1500x.jpg?v=1645120932"/>
      <Box className={styles.box}>

        <Heading color="white" fontWeight="600" variant={["sm", "base", "md"]}>NEW NEW NEW</Heading>
        <Text color="white"  m={3} variant={["sm", "base", "md"]}>Check out the new beauties!</Text>
        <Link to="/shopall">
        <Button colorScheme='white' className={styles.btn}>Shop All</Button>
        </Link>
      </Box>

      </Box>
      <SimpleGrid columns={[1,2,4,4]} className={styles.grid}>
        
        {
          data && data.map((item) => {
            const { image1, id, category,price,image2 } = item;
            return <Box key={id} className={styles.grid_child} onClick={()=>isOpen(item)}>
              <Box className={styles.homeImage}>

                <Img src={image1} alt={price} className={styles.image_homeImage} />
                
              </Box>
              <Box align="left">
                

              <Text>{category}</Text>
                <Text>$ {price}</Text>
              </Box>
                
            </Box>
          })
       }

      </SimpleGrid>
      <BasicUsage product={product} isOpen={show} isClose={isClose} />
      </>
  )
}
