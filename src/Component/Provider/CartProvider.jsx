import React, { useEffect, useState } from "react";
import { CartContext } from "../context";
import { withUser } from "../withProvider";
import { getCart, saveCart, getProductByIds } from "../api";


function CartProvider({ isLoggedIn, children }) {

  const [cart, setCart] = useState([]);

  useEffect(function () {
    if (!isLoggedIn) {
      const saveDatastring = localStorage.getItem('Cart') || "{}";
      const saveData = JSON.parse(saveDatastring);
      quantityMapToCart(saveData);
    }
    else {
      getCart().then(function (response) {
        setCart(response);
      })
    }
  }, [isLoggedIn]);

  function quantityMapToCart(quantityMap) {
    getProductByIds(Object.keys(quantityMap)).then(function (products) {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(savedCart);
    });
  }


  function handleAddTocart(productId, count) {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

    const oldCount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    if (isLoggedIn) {
      saveCart(newCart).then(function (response) {
        quantityMapToCart(newCart);
      });
    } else {
      const quantityMapString = JSON.stringify(newCart);
      localStorage.setItem("Cart", quantityMapString);
      quantityMapToCart(newCart);

    }

  }
  const totalCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;

  }, 0);


  return (
    <CartContext.Provider value={{ cart, updateCart, handleAddTocart, totalCount }}>{children} </CartContext.Provider>)
    ;
}
export default withUser(CartProvider);