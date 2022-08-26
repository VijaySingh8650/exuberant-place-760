import { Box, Heading,  Text,  Table,
  Thead,
  Tbody,
  
  Tr,
  Th,
 
  
  TableContainer,
  
 
  Spinner,
  Button} from '@chakra-ui/react'
import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { cartGetData } from '../Config/data';
import styles from "./cart.module.css";

import CartIndividual from './CartIndividual';
import { useToast } from '@chakra-ui/react'
import Footer from '../Components/Footer';

export default function Cart() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Your Shopping Cart – Lovoda"
  },[])
  
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
    },1000)
    
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
          <Thead size="md">
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
              
              
                return <CartIndividual key={item.id} item={item} callfunction={getData} total={amount} setTotal={setAmount} />
            })
          }

            
          </Tbody>


          
        </Table>

      </TableContainer>
      }
            <Box className={styles.checkout}>
              <Text variant={["sm", "base", "md"]}>Subtotal ${amount.toFixed(parseInt(2))}</Text> 
              <Link to="/new" ><Button className={styles.btn}  bg="black" color="white" variant={["sm", "base", "md"]}
                
                 onClick={() =>
        toast({
          title: 'Successfully Dispatched',
          description: "Your products are on the way. Keep shopping!",
          status: 'success',
          duration: 4000,
          isClosable: true,
          
        })
      }
              >Check out</Button></Link>
       </Box>
      
            
      
    </Box>
    }
    <Footer/>
    
    
    </>
  )
}
