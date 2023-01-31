import React, { useContext, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constant';

import { useNavigate } from 'react-router-dom';
import {Button, useToast } from '@chakra-ui/react';
import { product_context } from "../App";

const Register = () => {
  let navigate = useNavigate()
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [re_pasword,setRe_password]=useState('')
  const [loading,setLoading]=useState(false);
  const toast = useToast();
  let context = useContext(product_context);
  let setuser = context.setUser;
  const submitHandler=async()=>{
    setLoading(true)
    if(!name||!email||!password||!re_pasword){
      toast({
        title:"Fill all the Fields",
        status:"warning",
        duration:3000,
        isClosable:true,
        position:"top"
    });
      setLoading(false)
    }
    if(password!==re_pasword){
      toast({
        title:"Password does not match",
        status:"warning",
        duration:3000,
        isClosable:true,
        position:"top"
    });
    }
    try {
      const config = {
        headers:{
          "Content-type":"application/json",
        },
      }

      const {data}= await axios.post(`${BASE_URL}users/register`,{name,email,password},config);
      toast({
        title:"Registered successfully",
        status:"success",
        duration:3000,
        isClosable:true,
        position:"top"
    });
      localStorage.setItem('webscrapser',JSON.stringify(data));
      const cus = JSON.parse(localStorage.getItem("webscrapser"));
      setuser(cus);
      setLoading(false)
      navigate('/home')
    } catch (error) {
      toast({
        title:"Some thing went Wrong",
        status:"warning",
        duration:3000,
        isClosable:true,
        position:"top"
    });
    }
   
  }
  return <>
     <div className="mb-2">
        <label  className="form-label">Name</label>
         <input type="text" className="form-control" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} required/>
     </div>
     <div className="mb-2">
        <label  className="form-label">Email Address</label>
         <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Your Name" required/>
     </div>
       <label  class="form-label mt-1">Create Password</label>
      <input type="text" placeholder='Password'  class="form-control"onChange={(e)=>setPassword(e.target.value)}  required/>
      <label for="inputPassword5" className="form-label mt-1">Confirm Password</label>
      <input type="text" placeholder='Re-enter Password'  class="form-control"onChange={(e)=>setRe_password(e.target.value)}  required/>
      
      <div className='d-grid gap-2 col-6 mx-auto mt-4'>
        <Button
      isLoading={loading}
      loadingText='Loading..'
      colorScheme='black'
      variant='outline'
      onClick={()=>submitHandler()}
      marginLeft="3"
    >
      Register
    </Button>
    
      </div>
  
  </>
}

export default Register