import { Box, Img, Heading,Text, Button, SimpleGrid} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { homeGetData } from '../Config/data';
import styles from "./home.module.css";
import BasicUsage from './ModalComponent';
import Product from './Product';
export default function Home() {
  const [data, setData] = useState([]);
  
  const [show,setShow]= useState(false);
  const [product,setProduct]= useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Lovoda"
  },[])

  useEffect(() => {
    homeGetData().then((res) => {
      console.log(res.data);
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
            
            return <Product key={item.id} data={item} isOpen={isOpen} />
            
          })
       }

      </SimpleGrid>
      <Link to="/allproducts">
       <Button color="white" bg="black" variant={["sm","base","md"]}>View All</Button>
      </Link>
      <BasicUsage product={product} isOpen={show} isClose={isClose} />
      <Footer/>
      </>
  )
}
