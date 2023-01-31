import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { product_context } from "../App";

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
          <h1 >WebScraper</h1>
          {
            user?<div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>
              <h2 style={{fontSize:"21px"}}>{user.name}</h2>
               <button className="logout" onClick={()=>logout()}>Logout</button> 
            </div>:""
          }
        </div>
    </div>
    </>

}

export default Header;