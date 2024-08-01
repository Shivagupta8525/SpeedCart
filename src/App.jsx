import React from 'react';
import { useState, useMemo } from 'react';
import ProductListPage from './Component/ProductListPage';
import ProductDetails from './Component/ProductDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { PageNotFound } from './Component/NotFound';
import Cart from './Component/cart';
import Signup from './Component/Signup';
import Forget from './Component/Forget';
import Login from './Component/Login';



function App() {




  const saveDatastring = localStorage.getItem('productCart') || "{}";
  const saveData = JSON.parse(saveDatastring);
  



  const [cart, setCart] = useState(saveData);

  //console.log("cart is cart ", cart);

  function handleAddTocart(productId, count) {

    const oldCart = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCart + count };

     
    updateCart(newCart);
     const cartSrting = JSON.stringify(newCart);
     localStorage.setItem("productCart",cartSrting);
   }
  function updateCart(newCart) {
    setCart(newCart);
    let cartString = JSON.stringify(cart);
    localStorage.setItem("productCart", cartString);
    console.log("newcart from acrt",newCart);
  }

  const totalCount = useMemo(function () {

    return (Object.keys(cart).reduce(function (previous, current) {

      return previous + cart[current];

    }, 0))
  }, [cart]);
  console.log("totalCount is totalCount ", totalCount);


  return (

    <div className="  grow bg-gray-200 h-screen overflow-scroll flex flex-col">
      <Header productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails onAddToCart={handleAddTocart} />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/my_cart" element={<Cart cart={cart}  updateCart={updateCart}/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/forget' element={<Forget />} />

        </Routes>
      </div>

      <Footer />




    </div>
  );
}

export default App;


