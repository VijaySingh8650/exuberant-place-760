import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,Button, Img, Box, Text, SimpleGrid, AlertIcon,Alert
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react';
import { cartData, cartGetData } from '../Config/data';

export default function BasicUsage({ isOpen, isClose, product}) {
    // console.log(product);
    const { image1, image2, category, price, details } = product;
    const [isSuccess, setIsSuccess] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [check, setCheck] = useState([]);
    function showData() {
         cartGetData().then((res) => {
             setCheck(res.data);
             console.log(res.data);
           
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        showData();
        
       
   },[isSuccess])

    function handleSubmit(data) {
        
        let checkData = check.filter((item) => {
            return item.image1===data.image1 && item.image2===data.image2
        })
        if (checkData.length === 0) {
            
            cartData(data).then((res) => {
                // console.log(res);
                setIsSuccess(true);
                setIsAdded(false);
                setTimeout(() => {
                     setIsSuccess(false);
                setIsAdded(false);
                },1500)
            }).catch((err) => {
                console.log(err);
            })
        } else {
            setIsAdded(true);
            setIsSuccess(false);
            setTimeout(() => {
                     setIsSuccess(false);
                setIsAdded(false);
            },1500)
        }
    }


  return (
    <>
      

      <Modal isOpen={isOpen} onClose={isClose}>
        <ModalOverlay />
        <ModalContent>
                  <ModalHeader>{category}</ModalHeader>
          <ModalCloseButton />
                  <ModalBody>
                      {
                         isSuccess? <Alert status='success' m={4}>
                            <AlertIcon />
                                Item successfully added to cart
                            </Alert>:null
                      }
                      {
                          isAdded?<Alert status='warning' m={4}>
    <AlertIcon />
    You have already added this product
  </Alert>:null
                      }
                      <SimpleGrid columns={[1,2,2]} gap="10px">
                          <Img style={{borderRadius:"10px"}} width="200px" src={image2} alt={price} />
                      <Box>
                          <Img style={{borderRadius:"10px"}} width="100%" height="180px" src={image1} alt={price} />
                          <Text  mt={2} variants={["sm","base","md"]}><b>Price:</b> $ {price}</Text>
                          <Text className='text'>{details}</Text>
                      </Box> 
                      </SimpleGrid>
                      
                     
                </ModalBody>

          <ModalFooter>
            <Button bg="black" color="white" variant={["sm","base","md"]} mr={3} onClick={isClose}>
              Close
            </Button>
                      
                      <Button bg="black" color="white" variant={["sm", "base", "md"]} mr={3} onClick={() => {
                          handleSubmit(product);
            }}>
              Buy Now
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}