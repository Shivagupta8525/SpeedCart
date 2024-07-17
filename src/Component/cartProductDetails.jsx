 import React, { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 import { getProData } from "./api";
 function cartProductDetails({ id, quantity }) {
     const [product, setProduct] = useState();
     useEffect(function () {
         getProData(id).then(function (data) {
             setProduct(data)
         })
     }, [])
     if (!product) {
         return <></>
     }

     return (
         // <>
         //  <div className="flex flex-col gap-2 sm:flex-row sm:justify-evenly  sm:mr-0 sm:py-2"> 
         //      <img className="border max-w-16 max-h-16 " src={product.thumbnail} />
         //      <h2 className="self-center bold text-xl text-orange-600">{product.title}</h2>
         //      <h2 className="self-center bold text-xl">{product.price}</h2>
         //      <p className="border px-6 max-h-10 self-center py-2">{quantity}</p>
         //      <h2 className="self-center">${product.price*quantity}</h2>
         //  </div>
         //  <hr className=""/>
         //  </>
         <tr>
             <td className="border-b p-2 flex items-center">
                 <img src={product.thumbnail} alt={product.name} className="h-16 w-16 object-cover mr-4" />
                 <span>{product.title}</span>
                 {/* <button onClick={() => onRemoveItem(product.id)} className="ml-4 text-red-500">X</button> */}
             </td>
             <td className="border-b p-2">${product.price}</td>
             <td className="border-b p-2">${quantity}

             </td>
             <td className="border-b p-2">${(product.price *quantity.toFixed(2)) }</td>
         </tr>


     );
 }
 export default cartProductDetails;