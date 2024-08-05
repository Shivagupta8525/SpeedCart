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


  const saveDatastring = localStorage.getItem('productCart') || "{}";
  const saveData = JSON.parse(saveDatastring);



  const [cart, setCart] = useState(saveData);
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState();
  // const [alert, setAlert] = useState({ type: "error", message: "error" });
  // const token = localStorage.getItem("token");
  // // console.log("logged user", user);
  // // console.log("alert", alert);

  // const removeAlert = () => {
  //   setAlert(undefined);
  // }
  // useEffect(() => {
  //   if (token) {
  //     axios.get("https://myeasykart.codeyogi.io/me", {
  //       headers: {
  //         Authorization: token,
  //       }
  //     }).then((response) => {
  //       setUser(response.data);
  //       setLoading(false);
  //     }
  //     )
  //     .catch(()=>{
  //       localStorage.removeItem("token");
  //       setLoading(false)
  //     })
  //   }
  //   else {
  //     setLoading(false);
  //   }
  // }, [])


  function handleAddTocart(productId, count) {

    const oldCart = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCart + count };


    updateCart(newCart);
    const cartSrting = JSON.stringify(newCart);
    localStorage.setItem("productCart", cartSrting);
  }
  function updateCart(newCart) {
    setCart(newCart);
    let cartString = JSON.stringify(cart);
    localStorage.setItem("productCart", cartString);
    console.log("newcart from acrt", newCart);
  }

  const totalCount = useMemo(function () {

    return (Object.keys(cart).reduce(function (previous, current) {

      return previous + cart[current];

    }, 0))
  }, [cart]);
  console.log("totalCount is totalCount ", totalCount);


  return (

    <div className="  grow bg-gray-200 h-screen overflow-scroll flex flex-col">
       <UserProvider>
      
         <AlertProvider>
           
          

          <Header totalCount={totalCount} />
 
          <Alert />
          <div className="grow">
            <Routes>
              <Route path="/login" element={<AuthRoute  ><Login /> </AuthRoute>} />

              <Route index element={<UserRoute><ProductListPage /> </UserRoute>} />
              <Route path="/ProductDetails/:id" element={<UserRoute> <ProductDetails onAddToCart={handleAddTocart} /> </UserRoute>} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/my_cart" element={<UserRoute> <Cart cart={cart} updateCart={updateCart} /></UserRoute>}></Route>

              <Route path="/signup" element={<Signup />} />
              <Route path='/forget' element={<Forget />} />

            </Routes>
          </div>

          <Footer />
            
          </AlertProvider>
           
         
      </UserProvider>





    </div>
  );
}

export default App;


