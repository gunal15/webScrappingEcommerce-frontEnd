import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { product_context } from "../App";
import { FaShoppingBag } from "react-icons/fa";

function Header() {

  let navigate = useNavigate();
  let context = useContext(product_context);
  let setuser = context.setUser;
  let user = context.user;
  let logout = ()=>{

    localStorage.removeItem('webscrapser')
    setuser('');
    navigate("/")

  }
  return <>
    <div className="head">
        <div className="head-row">
        <h1 style={{fontFamily:"Segoe Print",display:"flex" ,flexDirection: "row"}}> Shopzy <FaShoppingBag style={{marginTop:"5px"}} /> </h1> 
          {
            user?<div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>
              <h2 style={{fontSize:"21px", fontFamily:"Trebuchet MS",color:"black"}}>{user.name}</h2>
               <button className="btn btn-info" onClick={()=>logout()}>Logout</button> 
            </div>:""
          }
        </div>
    </div>
    </>

}

export default Header;