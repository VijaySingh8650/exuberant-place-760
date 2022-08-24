import { Link,  useNavigate } from 'react-router-dom';
import { Container, FormErrorMessage, InputGroup, InputRightElement, Heading, Text, Spinner } from '@chakra-ui/react'
import React from 'react'
import { FiEyeOff,FiEye} from "react-icons/fi";
import {
  FormControl,
  FormLabel,
 Input, Button, Alert,AlertIcon
} from '@chakra-ui/react'
import { useState} from 'react'
import styles from "./register.module.css";

import {loginData, loginGetData } from '../Config/data';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';




export default function Register() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name:""
  })
  const [show, setShow] = useState(false);
  const [checkData, setCheckData] = useState([]);

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorFirst, setIsErrorFirst] = useState(false);
  const [isErrorLast, setIsErrorLast] = useState(false);
  
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginPassWrong, setLoginPassWrong] = useState(false);
  const [exist, setExist] = useState(false);
  let navigate = useNavigate();
  

  useEffect(() => {
     loginGetData().then((res) => {
        console.log(res.data);
        setCheckData(res.data);
      }).catch((err) => {
        console.log(err);
      })
  },[])

  const symbol = "!@#$%^&*";
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  


  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
   
  }
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email) {
      setIsErrorEmail(true);
      setLoginError(false);
            setLoginSuccess(false);
            setLoginPassWrong(false);
      
    }
    if(!formData.password) {
      setIsErrorPassword(true);
      setLoginError(false);
            setLoginSuccess(false);
            setLoginPassWrong(false);
    }
    if(!formData.last_name) {
      setIsErrorLast(true);
      setLoginError(false);
            setLoginSuccess(false);
            setLoginPassWrong(false);
    }
    if(!formData.first_name) {
      setIsErrorFirst(true);

      setLoginError(false);
            setLoginSuccess(false);
            setLoginPassWrong(false);
    }
    else {
      let lowerCase = false;
      let upperCase = false;
      let symbolChar = false;
      let int = false;
      for (var i = 0; i < formData.password.length; i++){
        if (alpha.includes(formData.password[i])) {
          lowerCase = true;
          
        }
        else if (number.includes(formData.password[i])){
          int = true;
        }
        else if (bigAlpha.includes(formData.password[i])) {
          upperCase = true;
        }
        else if (symbol.includes(formData.password[i])) {
          symbolChar = true;
        }
      }

      if (!lowerCase || !upperCase || !symbolChar || !int || formData.password.length<7) {
        setLoginPassWrong(true);
        setLoginSuccess(false);
        setLoginError(false);
        setIsErrorLast(false);
        setIsErrorFirst(false);
        setIsErrorEmail(false);
        setIsErrorPassword(false);
      }

      else {
           
          let check = checkData.filter((item) => {
            return item.email === formData.email && item.password === formData.password;
          })
        if (check.length !== 0) {
          setExist(true);
            setLoginPassWrong(false);
        setLoginError(false);
        setIsErrorLast(false);
        setIsErrorFirst(false);
        setIsErrorEmail(false);
          setIsErrorPassword(false);
            toast({
          title: 'Log-in, To see your favorite jewellery',
          description: "You are already a member of our family",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
          
            setTimeout(() => {
              
              navigate("/login");
            }, 2000);
          }


        else {
          setExist(false);
          setLoginPassWrong(false);
        setLoginError(false);
        setIsErrorLast(false);
        setIsErrorFirst(false);
        setIsErrorEmail(false);
        setIsErrorPassword(false);

        var upperFirst = formData.first_name[0].toUpperCase();
        for (var j = 1; j < formData.first_name.length; j++){
          upperFirst+=formData.first_name[j].toLowerCase();
        }
        formData.first_name = upperFirst;

        var upperLast = formData.last_name[0].toUpperCase();
        for (var j = 1; j < formData.last_name.length; j++){
          upperLast+=formData.last_name[j].toLowerCase();
        }
        formData.last_name = upperLast;
             
        // console.log(formData);
       
        loginData(formData).then((res) => {
          // console.log(res);
          setLoginSuccess(true);
           toast({
          title: 'Log-in to buy what suits you',
          description: "Welcome to our family",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
           setTimeout(() => {
              
              navigate("/login");
            }, 2000);
        }).catch(err => console.log(err));
          
        }
        
            
           
          
      }


      
      
    
    }
  }



  return (
    <Container className={styles.login}>
      {
       loginPassWrong? <Alert status='warning'>
          <AlertIcon />
           The password must be 8 characters long. Passwords must contain the character types: at least one uppercase letter: "A-Z", at least one lowercase letter: "a-z", at least one number: "0-9", at least one symbol: "!@#$%^&*"
  </Alert>:null
      }
      {
       exist? <Alert status='warning'>
          <AlertIcon />
           Hey! You are already registred with us.
  </Alert>:null
      }
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
    You have successfully created account!
  </Alert>
        : null
      }
      
      

      {
        loginSuccess || exist ? <Spinner mt={8} /> :<>
          <Heading fontWeight="600" variant={["sm", "base", "md"]}>Create Account</Heading> 
          <FormControl isInvalid={isErrorEmail || isErrorPassword || isErrorEmail || isErrorLast} isRequired>
            <FormLabel>First Name</FormLabel>
       
            <Input value={formData.first_name} id="firstName" onChange={handleChange} name="first_name" type='text' placeholder='First Name' />
            {
          !isErrorFirst?null:<FormErrorMessage>First name is required.</FormErrorMessage>
        }
            <FormLabel>Last Name</FormLabel>
       
            <Input value={formData.last_name} id="lastName" onChange={handleChange} name="last_name" type='text' placeholder='Last Name' />
            {
          !isErrorLast?null:<FormErrorMessage>Last name is required.</FormErrorMessage>
        }
              
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
              Create
        </Button>
        
        <Text mt={2} className={styles.register}>
          <Link to="/login">
          Have an account ?
          </Link>
        </Text>
              
              
              

          </FormControl>
          </>
      }
          
        
      
    </Container>
  )
}

