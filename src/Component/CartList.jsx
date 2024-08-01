import React, { useState, useEffect } from 'react';

import CartRow from './cartRow';


function CartList({ products, cart, updateCart }) {
    const [localCart, setLocalCart] = useState(cart);



    useEffect(function () {
        setLocalCart(cart);
    }, [cart]);



    function handleChange(productId, newValue) {
        const newLocalCart = { ...localCart, [productId]: newValue };
        const text = { [productId]: newValue };
        setLocalCart(newLocalCart);
        updateCart(newLocalCart);
        // change(productId,newValue);

        // console.log("newlocal cart form cartlist", newLocalCart);
        // console.log("setlocalcart from acrt list", setLocalCart);
        // console.log("upade value in cartlist", text );

    }


    function handleRemove(productId) {
        const newCart = { ...cart };
        delete newCart[productId];
        setLocalCart(newCart);
        console.log("handelremove called");
        updateCart(newCart);
         

    }
    //  console.log("updateCart",updateCart);

    if (!products) {
        return (
            <div className=" grow text-indigo-700 text-6xl h-full flex items-center justify-center"> <ImSpinner10 className="animate-spin" /></div>
        );
    }

    return (
        <><div className="flex border bg-gray-200 ">
            <div className="flex w-1/2 items-center justify-center font-bold">
                <h3 className="bold text-1xl ">Product</h3>
            </div>
            <div className="flex items-center gap-10 bg--600 ">
                <h3 className="font-bold px-10  ">Price</h3>
                <h3 className="font-bold px-10">Quantity</h3>
                <h3 className="font-bold px-10">SubTotal</h3>
            </div>
        </div>
            {products.map(function (item) {
                return (

                    <CartRow
                        key={item.id}
                        quantity={localCart[item.id]}
                        product={item}
                        onQuntityChange={handleChange}
                        onRemove={handleRemove} />
                )
            })}

        </>


    )
}

export default CartList;