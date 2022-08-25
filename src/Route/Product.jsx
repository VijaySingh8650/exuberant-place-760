import { Box, Img, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "./home.module.css";
export default function Product({ data,isOpen }) {
    const { image1,image2,  category, price } = data;
    const [over, setOver] = useState(false);
  return (
   <Box className={styles.grid_child} onClick={()=>isOpen(data)}>
              <Box className={styles.homeImage} onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}>

                <Img src={over?image2:image1} alt={price} className={styles.image_homeImage} />
                
              </Box>
              <Box align="left">
                

              <Text>{category}</Text>
                <Text>$ {price}</Text>
              </Box>
                
            </Box>
  )
}
