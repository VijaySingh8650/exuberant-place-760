import { Box, Img,  Td, Text, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { MdAdd, MdRemove } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cartDeleteData } from '../Config/data';
import styles from "./cart.module.css";

export default function CartIndividual({ item, callfunction,total,setTotal}) {
  const { image1,image2, id, category, price } = item;

    const [count, setCount] = useState(1);
   
  const [amount, setAmount] = useState(0);

  const [over, setOver] = useState(false);


  useEffect(() => {
    setTotal((total)=>total+price);
  },[])


    const handleDelete = (id) => {
        
        
            
            cartDeleteData(id).then((res) => {
              callfunction();
              
              setTotal(0);
                
            }).catch((err) => {
                console.log(err);
            })
        
    }
    
    return (
        <>
            
                <Tr key={id}>
                <Td>
            <Box className={styles.product}>
              <Box className={styles.homeImage} onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}>

                <Img height="100px" src={over ? image2 : image1} alt={price} className={styles.image_homeImage}
                  
                />
              </Box>
                    <Box className={styles.subproductText}>
                      <Text variant={["sm","base","md"]}>{category}</Text>
                <Text mt={2} variant={["sm", "base", "md"]}>${price.toFixed(parseInt(2))}</Text>
                <Box mt={2} className={styles.delete_item}>

                  <Box   className={styles.quantity}>
                         
                            {
                                count===1?<MdRemove style={{ cursor: "pointer",color:"grey" }}/>:<MdRemove onClick={() => {
                                    setCount(count - 1);
                    setAmount(amount - price);
                    setTotal((total)=>total-price);
                                    
                                }}
                                    style={{ cursor: "pointer" }}
                                />
                            }
                    
                      <Text>{count}</Text>
                  <MdAdd  onClick={()=>{
                                    setCount(count + 1);
                  setAmount(amount + price);
                  setTotal((total)=>total+price);
                                
                            }}
                                style={{cursor: "pointer"}}
                            />
                  </Box>
               <RiDeleteBin6Line style={{ marginLeft: "10px", cursor: "pointer" }} onClick={()=>handleDelete(id)} />
                  </Box>
                    </Box>
                  </Box>
                </Td>
                <Td className={styles.delete_item_quant}>
                  <Box className={styles.delete}>

                  <Box   className={styles.quantity}>
                         
                            {
                                count===1?<MdRemove style={{ cursor: "pointer",color:"grey" }}/>:<MdRemove onClick={() => {
                                    setCount(count - 1);
                    setAmount(amount - price);
                    setTotal((total)=>total-price);
                                    
                                }}
                                    style={{ cursor: "pointer" }}
                                />
                            }
                    
                      <Text>{count}</Text>
                  <MdAdd  onClick={()=>{
                                    setCount(count + 1);
                  setAmount(amount + price);
                  setTotal((total)=>total+price);
                                
                            }}
                                style={{cursor: "pointer"}}
                            />
                  </Box>
               <RiDeleteBin6Line style={{ marginLeft: "10px", cursor: "pointer" }} onClick={()=>handleDelete(id)} />
                  </Box>
                </Td>
                <Td>
                  ${(amount+price).toFixed(parseInt(2))}
                </Td>
            </Tr>
       
    
            </>
    )
}
