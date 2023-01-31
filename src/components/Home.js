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
  let product = [{title:'Beauty Products',img:'https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg?b=1&s=170667a&w=0&k=20&c=C3sbcRcACM5E7sxFkON61OR5qqFvm8gHs8vwsFN6Nuc=',link:'/beauty'},
  {title:"Men's wear",img:'https://media.istockphoto.com/id/504742864/photo/stylish-business-clothing-for-businessman.jpg?s=612x612&w=0&k=20&c=AsGrhEMNkmpwqaJPBSACPthMuBsmsDIecRkdFXKSnl0=',link:'/dress'},
  {title:"Shoes for Men",img:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',link:'/shoes'},
  {title:"Furniture",img:'https://media.istockphoto.com/id/1285065780/photo/furniture-showroom-with-plants-spotlights-and-brick-wall.jpg?s=612x612&w=0&k=20&c=5X2jXOu4kAEW978_fNmdLGcnyqFjyl06Z-WDlX_FDVU=',link:'/furniture'},
  {title:"Laptops",img:'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80',link:'/laptops'},
  {title:"Mobiles",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirtoI1tJOi5CplNQsE6SSnkCaZXeb9wp0iv6pSs31Q3NaCLZJJu62S-UpO5YxlObGyuc&usqp=CAU',link:'/mobiles'},
  {title:"Shelves",img:'https://cdn.shopify.com/s/files/1/0096/4594/9013/articles/Kitchen_Shelves_Design.jpg?v=1673867550',link:'/shelves'}]
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
         <option value='shelves' >shelves</option>
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
