import React,{useContext} from "react";
import { product_context } from "../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Home() {
  let context = useContext(product_context)
  if(context.dress_pro=== undefined){
    console.log(false);
  }else   console.log(true)
  let navigate = useNavigate();
  let product = [{title:'Beauty Products',img:'https://i.guim.co.uk/img/media/8dd53de9f75eec05f73f5b2baee3a43b67c40baf/0_0_5000_3000/master/5000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=5822b4385001d684e5d6133c72aced15',link:'/beauty'},
  {title:"Men's wear",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxwAprssPB2ocPCJL9tBvBeK_Wz6Chc_uAFNzt7EhMFnIjjFaTMcjSJOIFzw6ZHJoa-o&usqp=CAU',link:'/dress'},
  {title:"Shoes for Men",img:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=',link:'/shoes'},
  {title:"Furniture",img:'https://media.istockphoto.com/photos/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-picture-id968086564?k=20&m=968086564&s=612x612&w=0&h=dlB2NThpsLZliGMy_RAdjESDjFtgMgLWZjQnG_CchOM=',link:'/furniture'},
  {title:"Laptops",img:'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg',link:'/laptops'},
  {title:"Mobiles",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BN4KjY9UE01pP509pq8qvJpFS0dlyBU31AXszP2VJ799m8geB08gTVnLWe4Z__QKs94&usqp=CAU',link:'/mobiles'},
  {title:"Shelves",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreQH2a9S8x9T1VW8rlkJ5w0LqrNY-ROrAJw&usqp=CAU',link:'/shelves'}]
  function changePath(data){
    console.log(data);
    if(data === 'dress'){
      navigate('/dress')
    }  if(data === 'beauty'){
      navigate('/beauty')
    }  if(data === 'shoes'){
      navigate('/shoes')
    }  if(data === 'furniture'){
      navigate('/furniture')
    }  if(data === 'laptops'){
      navigate('/laptops')
    }  if(data === 'mobiles'){
      navigate('/mobiles')
    } 
     if(data === 'shelves'){
      navigate('/shelves')
    }

   }
  
  return <>
  {context.dress_pro=== undefined? <div className="spinner-con">
  <h3>Loading</h3> &nbsp;
    <span className="spinner"></span></div>:
    <div className="container">
    <select className="custom-select col-6" onChange={(e)=>changePath(e.target.value)}>
         <option>Categories</option>
         <option value='dress' >Men's Wear </option>
        <option value='beauty' >Beauty Products</option>
         <option value='shoes' >Shoes for Men</option>
        <option value='furniture' >Furnitures</option>
         <option value='laptops' >Laptops</option> 
         <option value='mobiles' >Mobiles</option>
         <option value='shelves' >Shelves</option>
        </select> 
       
      <div className="main-cards">
        
      {
        product.filter?
         product.filter(val=>val.title.toLowerCase().includes(context.searchItem.toLowerCase())).map((e,i)=>{
          return <Link className="link" key={i} to={e.link}>
          
             <div className="product-box">
               <img src={e.img} alt="img"/><div className="box">{e.title}</div>
             </div>
  
          </Link>
           }):
           product.map((e,i)=>{
            return <Link className="link" key={i} to={e.link}>
            
               <div className="product-box">
                 <img src={e.img} alt="img"/><div className="box">{e.title}</div>
               </div>
    
            </Link>
             })
      }
      </div>


       
    </div>}
    </>

}

export default Home;
