import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { product_context } from "../App";
const ProtectRoute = () => {
  let context = useContext(product_context);
  let user = context.user;
  return user?<Outlet/>:<Navigate to='/'/>
}

export default ProtectRoute