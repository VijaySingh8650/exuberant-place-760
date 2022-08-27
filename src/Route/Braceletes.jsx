import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Menu, MenuButton, MenuItem, SimpleGrid, Spinner, Text, MenuList} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../Components/Footer';

import { newGetData } from '../Config/data';
import styles from "./home.module.css";
import BasicUsage from './ModalComponent';
import Product from './Product';

export default function Bracelets() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show,setShow]= useState(false);
  const [product, setProduct] = useState({});
  
  const [search, setSearch] = useSearchParams();
  let num = Number(search.get("page")) || 1;
  let orderby = (search.get("order")) || "asc";
  const [order, setOrderby] = useState(orderby);
  const [page, setPage] = useState(num);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Products – Lovoda"
  },[])

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      newGetData({ page, limit: 8, order }).then((res) => {
        
        window.scrollTo(0, 150);
        setData(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
      })
    }, 1000)
  }, [page, order]);

  useEffect(() => {
    setSearch({
      page,order
    })
  },[page,order])


  



  
  function handleLTH() {
    setOrderby("asc");
  }
  function handleHTL() {
    setOrderby("desc");
  }
  
  const isOpen = (item) => {
    setShow(true);
    setProduct(item);
  }
   const isClose = () => {
    setShow(false);
  }


  return (
    <>
      <Heading align="left" ml="20px" mt="20px" variant={["sm","base","md"]}>Products</Heading>
      <Box m="20px"  style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Text mr={2} variant={["sm","base","md"]}>Filter: </Text>



                 <Menu >
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                    Price
                  </MenuButton>
                  <MenuList>
                  <MenuItem onClick={() => {
                      handleLTH()
                    }}>Low To High</MenuItem>
                    <MenuItem onClick={() => handleHTL()}>High To Low</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
            
      



        </Box>
        <Text variant={["sm","base","md"]}>Total: {32} Products</Text>

      </Box>
    
   
      {
        isLoading ?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='black'
          size='xl'
          m={40}
/>: <>
        <SimpleGrid columns={[1, 2, 4, 4]} className={styles.grid}>
        
        {
          data && data.map((item) => {
            
            return <Product key={item.id} data={item} isOpen={isOpen} />
            
          })
       }

      </SimpleGrid>
      <BasicUsage product={product} isOpen={show} isClose={isClose} /></>
      }
      

      {isLoading?null: new Array(4).fill(0).map((a,i)=>{
          return <Button className={styles.page} bg="black" color="white" variant={["sm", "base", "md"]} key={i} disabled={page === i + 1}
            onClick={() => {
              setPage(i + 1);
            }}
          >{i + 1}</Button>
        })
      }
      <Footer/>
      </>
  )
}


