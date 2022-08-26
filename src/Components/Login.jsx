import { Link,  useNavigate } from 'react-router-dom';
import { Container, FormErrorMessage, InputGroup, InputRightElement, Heading, Text, Spinner } from '@chakra-ui/react'
import React from 'react'
  import { useToast } from '@chakra-ui/react'
import { FiEyeOff,FiEye} from "react-icons/fi";
import {
  FormControl,
  FormLabel,
 Input, Button, Alert,AlertIcon
} from '@chakra-ui/react'
import { useState} from 'react'
import styles from "./login.module.css";

import {loginGetData, loginSuccessData } from '../Config/data';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';

export default function Login() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password:""
  })
  const { toggleAuth } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [checkData, setCheckData] = useState([]);

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  
  
  let navigate = useNavigate();



  


  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
   
  }
  useEffect(() => {
    document.title="Login – Lovoda"
     loginGetData().then((res) => {
        console.log(res.data);
        setCheckData(res.data);
      }).catch((err) => {
        console.log(err);
      })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email) {
      setIsErrorEmail(true);
      setLoginError(false);
            setLoginSuccess(false);
          
      
    }
    if(!formData.password) {
      setIsErrorPassword(true);
      setLoginError(false);
            setLoginSuccess(false);
            
    }
    else {
      
            
        setIsErrorEmail(false);
        setIsErrorPassword(false);

            let check = checkData.filter((item) => {
            return item.email === formData.email && item.password === formData.password;
          })
          console.log(check);
          if (check.length === 0) {
            setLoginError(true);
            setLoginSuccess(false);
         
            // console.log("null");
          }
          else {
            setLoginSuccess(true);
            setLoginError(false);
            toggleAuth();
            loginSuccessData(check[0]).then((res) => {
              console.log(res);
            }).catch(err => console.log(err));
             toast({
          title: 'Successfully Logged-in.',
          description: "Enjoy the shopping",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
            
            setTimeout(() => {
              
              navigate("/cart");
            }, 2000);
          
      }


      
      
    
    }
  }



  return (
    <Container className={styles.login}>
      
      {
        loginError ?
          <Alert status='error'>
    <AlertIcon />
    Wrong Credentials 
  </Alert>
        : null
      }
      {
        loginSuccess ?
          <Alert status='success'>
    <AlertIcon />
    You are successfully logged-in
  </Alert>
        : null
      }
      

      {
        loginSuccess ? <Spinner mt={8} /> :<>
          <Heading fontWeight="600" variant={["sm", "base", "md"]}>Login</Heading> 
          <FormControl isInvalid={isErrorEmail || isErrorPassword} isRequired>
              
        <FormLabel>Email address</FormLabel>
       
          <Input value={formData.email} id="email" onChange={handleChange} name="email" type='email' placeholder='Email' />
          
        {
          !isErrorEmail?null:<FormErrorMessage>Email is required.</FormErrorMessage>
        }
              
        <FormLabel>Password</FormLabel>
         <InputGroup>
          <Input value={formData.password} id="password" onChange={handleChange} name="password" type={show ? "text" : "password"} placeholder='Password' />
          {
            !formData.password?null:<InputRightElement width="4rem">
            
              {show ? <FiEyeOff onClick={()=>setShow(!show)} />:<FiEye onClick={()=>setShow(!show)} />}
           
          </InputRightElement>
          }
          
        </InputGroup>
        {
          !isErrorPassword?null:<FormErrorMessage>Password is required.</FormErrorMessage>
        }
              
        <Button color="white" bg="black" variant={["sm", "base", "md"]} mt={4}
        onClick={handleSubmit}
        >
              Sign in
        </Button>
        
        <Text mt={2} className={styles.register}>
          <Link to="/register">
          Create account ?
          </Link>
        </Text>
              
              
              

          </FormControl>
          </>
      }
          
        
      
    </Container>
  )
}
