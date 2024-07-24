import React from 'react';
import Cart from "./cartDetails";

function CartList({cart}){
    const keys_array = Object.keys(cart);
    // console.log("key arry",keys_array);

    if(!keys_array){
        return( 
        <div className=" grow text-indigo-700 text-6xl h-full flex items-center justify-center"> <ImSpinner10 className="animate-spin" /></div>
        );
    }
    
    return(
        <>
          {keys_array.map(function (item) {
                             return (
                                 <>
                                     <Cart id={item} quantity={cart[item]} />
                                 </>
                             )
                         })}
        </>
    )
}

export default CartList;