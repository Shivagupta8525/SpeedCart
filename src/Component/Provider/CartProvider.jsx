import React, { useMemo, useState }  from "react";
import { CartContext } from "../context";
import { withUser } from "../withProvider";

function CartProvider({Children}){
    const saveDatastring = localStorage.getItem('productCart') || "{}";
    const saveData = JSON.parse(saveDatastring);
    const [cart, setCart] = useState(saveData);
    
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

      return (<CartContext.Provider value={{cart,  updateCart ,handleAddTocart,totalCount}}>{Children} </CartContext.Provider>);

}
export default withUser(CartProvider);
