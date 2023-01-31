import React,{useEffect,useState} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import env from 'react-dotenv'
import Home from "./components/Home";
import Beauty from "./components/Beauty";
import Dress from "./components/Dress";
import Furnitures from "./components/Furnitures";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import Shelves from "./components/Shelves";
import Shoes from "./components/Shoes";
import Header from "./components/Header";
import Authtentication from "./components/Authtentication";
import ProtectRoute from "./Auth/ProtectRoute";


export const product_context = React.createContext("");

function App() {
  useEffect(()=>{
    getData();
  },[])
 
  let getData=async()=>{
    let res =  await axios.get(env.API_URL);
    let data =  await res.data.products_data;
    
        setProducts(data); 
       
        
  }
  
  const [products,setProducts]=useState([]);
  let [searchItem,setSearchItem]=useState('');
  const [user,setUser]=useState();
   

  useEffect(()=>{
    const customer = JSON.parse(localStorage.getItem("webscrapser"));
    if(customer){
      
    }else{
      setUser('')
    }
   
  },[user])
 
  let dress_pro = products.dress_product;
  let beauty_pro = products.beauty_product;
  let furniture_pro = products.furnitures_product;
  let laptops_pro = products.laptops_product;
  let mobile_pro = products.mobiles_product;
  let shelves_pro = products.shelves_product;
  let shoes_pro = products.shoes_product
 

  return <>
    <Router>
      <product_context.Provider value={{user,setUser,dress_pro,beauty_pro,furniture_pro,laptops_pro,mobile_pro,shelves_pro,shoes_pro,searchItem}}>
      {
      user?<><Header/>
      <div className="container">
      <div className="search-bar form-group">
        <input type="text"  className="form-control" placeholder="Search products" onChange={(e)=>setSearchItem(e.target.value)} />
       <button className="search-btn"><SearchIcon/></button>
      </div>
        
    </div></>:""
    }
      <Routes>
      <Route path="/" element={<Authtentication/>} />
      <Route element={<ProtectRoute/>}>
     
       
      <Route path="/home" element={<Home/>} />
        <Route path="/beauty" element={<Beauty/>}/>
        <Route path="/dress" element={<Dress/>} />
        <Route path="/furniture" element={<Furnitures/>}/>
        <Route path="/laptops" element={<Laptops/>} />
        <Route path="/mobiles" element={<Mobiles/>} />
        <Route path="/shelves" element={<Shelves/>} />
        <Route path="/shoes" element={<Shoes/>}/>
        </Route>
      </Routes>
      </product_context.Provider>
    </Router>
    </>
  
}

export default App;
