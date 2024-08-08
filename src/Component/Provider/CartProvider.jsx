import React, { useEffect, useMemo, useState } from "react";
import { CartContext } from "../context";
import { withUser } from "../withProvider";
import { getCart,  saveCart } from "../api";
 

function CartProvider({ loggedIn, children }) {
  const [cart, setCart] = useState({});

  useEffect(function () {
    if (! loggedIn) {
      const saveDatastring = localStorage.getItem('productCart') || "{}";
      const saveData = JSON.parse(saveDatastring);
     
        setCart(saveData);
      
    } else {
      getCart().then(function(saveData)  {
        setCart(saveData);
      })
    }
  }, [loggedIn]);



  function handleAddTocart(productId, count) {
    const oldCart = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCart + count };
    updateCart(newCart);
  }
  function updateCart(newCart) {
    setCart(newCart);
    if (!loggedIn) {
      let cartString = JSON.stringify(cart);

      localStorage.setItem("productCart", cartString);
      console.log("newcart from acrt", newCart);
    }
    else {
      saveCart(newCart);

    }

  }
  const totalCount = useMemo(() => {

    return (Object.keys(cart).reduce(function (previous, current) {
      return previous + cart[current];

    }, 0))
  }, [cart]);
 
  return (
    <CartContext.Provider value={{ cart, updateCart, handleAddTocart, totalCount }}>{children} </CartContext.Provider>)
    ;
}
export default withUser(CartProvider);
