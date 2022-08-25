import { Box, Heading,  Text,  Table,
  Thead,
  Tbody,
  
  Tr,
  Th,
  Td,
  
  TableContainer,
  
  Img,
  Spinner,
  Button} from '@chakra-ui/react'
import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { cartGetData } from '../Config/data';
import styles from "./cart.module.css";

import CartIndividual from './CartIndividual';

export default function Cart() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(0);
  
  function getData() {
    setIsLoading(true);
    setIsError(false);
    setTimeout(() => {
      cartGetData().then((res) => {
      // console.log(res);
      setData(res.data);
      setIsLoading(false);
        setIsError(false);
      

    }).catch(err => {
      console.log(err);
      setIsError(true);
      setIsLoading(false);
    })
    },1500)
    
  }

  useEffect(() => {
    getData();
  }, [])
  
  

  return (<>
    {
      isLoading?<Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='black'
                                    size='xl'
                                    m={40}
                          />:data.length === 0 ?
        <Box className={styles.dataisEmpty}>
          <Heading variant={["sm", "base", "md"]}>Your cart is empty</Heading>
          <Link to="/new">
            <Button mt={2} bg="black" color="white" variant={["sm", "base", "md"]}>Continue shopping</Button>
          </Link>
      <Text mt={2} variant={["sm", "base", "md"]}>Have an account?</Text>
      <Text mt={1} variant={["sm","base","md"]} ><Link to="/login" style={{textDecoration:"underline"}}>Log-in</Link>  to check out faster</Text>
      </Box> :
        
        <Box className={styles.container}>
      <Box className={styles.heading}>
        <Heading variant={["sm","base","md"]}>Your cart</Heading>
        <Text variant={["sm","base","md"]} style={{textDecoration:"underline"}}><Link to="/shopall">Continue shopping</Link></Text>
      </Box>
       
      {
        isLoading?<Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='black'
                                    size='xl'
                                    m={40}
                          />:<TableContainer >
        <Table variant='simple' className={styles.table}>
          <Thead>
            <Tr>
              <Th>
                PRODUCT
              </Th>
              <Th className={styles.quant}>
                QUANTITY
              </Th>
              <Th>
                TOTAL
              </Th>
            </Tr>
          </Thead>
          <Tbody>

          
            {
            
            
              data?.map((item, index) => {
              
              
              return <CartIndividual key={item.id} item={item} callfunction={getData} />
            })
          }

            
          </Tbody>


          
        </Table>

      </TableContainer>
      }

      
      <h1>{total}</h1>
      
    </Box>
    }
    
    
    
    </>
  )
}
