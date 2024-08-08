import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getProData } from "./api";
import CartList from "./CartList";
import { withCart } from "./withProvider";


function cart({ cart, updateCart, totalCount }) {

    const [cart_product, setCart_product] = useState([]);
    const [loading, setLoading] = useState(true);
    const [localCart, setLocalCart] = useState(cart);
    const keys_array = Object.keys(cart);
    useEffect(
        function () {
            setLocalCart(cart);
        }, [cart]
    );

    useEffect(
        function () {
            setLoading(true);
            const allpromise = keys_array.map(function (id) {
                return getProData(id);
            });
            Promise.all(allpromise).then(function (products) {
                setCart_product(products);
                setLoading(false);
            });
        },
        [cart]
    );
    function handelCart(item) {
        setLocalCart(item)
        updateCart(item)
    }
    function updateMyCart() {
        const update = { ...localCart }
        updateCart(update);
        console.log("updated my cart is called")
        console.log("setlocart cart from cart", setLocalCart);
    };

    const Total =cart_product.reduce((total, {price,id}) => {
        return total + (price || 0 )* (localCart[id]||0);
      }, 0);
      console.log("total",Total)
    if (keys_array.length == 0) {
        return (
            <div className="flex flex-col gap-6 mx-auto">
                <h1 className="bold text-3xl">Your Cart Is Empty</h1>
                <div className="flex justify-center">
                    <Link className="border rounded-md bg-orange-500 text-white px-4 py-1" to="/">Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 max-w-6xl mx-auto bg-white border my-10 py-10 px-16  ">
            <h1 className="text-4xl text-gray-400">Cart</h1>
            <div className="  ">
                <div >
                    <CartList cart={cart}
                        products={cart_product}
                        cartUpdate={updateCart}
                        updateCart={handelCart}
                    />
                </div>
                <div className="flex py-2 justify-between px-2">
                    <div className="flex gap-2">
                        <input className="border border-gray-200 py-1 px-2" type="text" placeholder="Coupon Code"></input>
                        <button className="border rounded-md bg-red-500 px-6 text-white">Apply Coupon</button>
                    </div>
                    <button onClick={updateMyCart} className="border rounded-md bg-red-500 px-6 text-white"> Update Cart </button>
                </div>
            </div>
            <div className="border self-end sm:mx-8 flex flex-col gap-4 min-w-80 max-w-96 px-4 py-2">
                <h1 className="px-2 py-2 bold text-xl bg-gray-100">Cart totals</h1>
                <div className="flex flex-col gap-2">
                    <div className="px-2 flex gap-16 justify-between">
                        <h2>Subtotal</h2>
                        <h2>${Total}</h2>
                    </div>
                    <hr />
                    <div className="px-2 flex gap-16 justify-between">
                        <h2>Total</h2>
                        <h2>${Total}</h2>
                    </div>
                    <hr />
                </div>
                <button className="border rounded-md bg-red-500 text-white px-4 py-2">Proceed To Checkout</button>
            </div>
        </div>
    )
}
export default withCart(cart);