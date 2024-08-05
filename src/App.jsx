import React, { useEffect } from 'react';
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
import AuthRoute from './Component/AuthRoute';
import UserRoute from './Component/UserRoute';
import Alert from './Component/Alert';
import UserProvider from './Component/Provider/UserProvider';
import AlertProvider from './Component/Provider/AlertProvider';
import CartProvider from './Component/Provider/CartProvider';



function App() {

  console.log("app component is called")

 
  return (

    <div className="  grow bg-gray-200 h-screen overflow-scroll flex flex-col">
      <UserProvider>
        <AlertProvider>
          <CartProvider>
            <Header />
            <Alert />
            <div className="grow">
              <Routes>
                <Route path="/login" element={<AuthRoute  ><Login /> </AuthRoute>} />
                <Route index element={<UserRoute><ProductListPage /> </UserRoute>} />
                <Route path="/ProductDetails/:id" element={<UserRoute> <ProductDetails /> </UserRoute>} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/my_cart" element={<UserRoute> <Cart /></UserRoute>}></Route>
                <Route path="/signup" element={<Signup />} />
                <Route path='/forget' element={<Forget />} />
              </Routes>
            </div>
            <Footer />
          </CartProvider>
        </AlertProvider>
      </UserProvider>
    </div>
  );
}

export default App;


