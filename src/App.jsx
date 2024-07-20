import React from 'react';
import {useState, useEffect} from 'react';
import ProductListPage from './Component/ProductListPage';
import ProductDetails from './Component/ProductDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import {PageNotFound} from './Component/NotFound';
import Cart from './Component/cart';



 function App() {
   
 // // const [totalCount ,setTotalCount]= useState(0);
 //   const [storedData, setStoredData] = useState(null);

   // useEffect(() => {
   //   const data = localStorage.getItem('my-data-key');
   //   if (data) {
   //     setStoredData(JSON.parse(data));
   //   }
   // }, []);

   const saveDatastring =localStorage.getItem('added-item') ||"{}";
   const saveData = JSON.parse(saveDatastring);
   const [storedData, setStoredData] = useState(saveData);

   // useEffect(function () {
   //    if (saveDatastring) {
   //      setStoredData(saveData);
        
   //    }
     
   // }, []);
   
   
   const [cart, setCart]= useState(saveData);
   console.log("cart is cart " ,cart);
   
   function handleAddTocart(productId, count ) {
     // console.log(productId, count);
     // setTotalCount(totalCount + count);
     const oldCart = cart[productId] || 0;
     const newCart = {...cart,[productId]:oldCart + count};

     // const newCart = {...cart};
     // newCart[productId] = oldCart + count;
     setCart (newCart);
     const cartSrting = JSON.stringify(newCart);
     localStorage.setItem("added-item",cartSrting);
     }
   
  const totalCount =Object.keys(cart).reduce(function(previous , current){
    
    return previous + cart[current];
    
   },0);
   console.log("totalCount is totalCount " ,totalCount);


   return ( 
    
     <div className="  grow bg-gray-200 h-screen overflow-scroll flex flex-col">
       <Header productCount={totalCount}/>
<div className="grow">
       <Routes>
         <Route index element={<ProductListPage />} />
         <Route path="/ProductDetails/:id" element={<ProductDetails onAddToCart= {handleAddTocart} />} />
          <Route path="*"element={<PageNotFound/>}/>
         <Route path="/my_cart" element={<Cart cart = {cart} />}></Route>
         
       </Routes>
  </div>

       <Footer />



     </div>
     );
 }

 export default App;


