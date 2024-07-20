 import React, { useEffect, useState } from "react";
 import { getProData } from "./api";
 import { ImSpinner10 } from "react-icons/im";
 function cartProductDetails({ id, quantity }) {
     const [product, setProduct] = useState();
     useEffect(function () {
         getProData(id).then(function (data) {
             setProduct(data)
         })
     }, [])
     if (!product) {
         
        return(
        <></>
        );
        //  return <div className=" grow text-indigo-700 text-6xl h-full flex items-center justify-center"> <ImSpinner10 className="animate-spin" /></div>
     }

     return ( 
         <tr className="  w-screen flex-col">
             <td className="border-b p-2  flex  items-center justify-around">
                 <img src={product.thumbnail} alt={product.name} className="h-16 w-16 object-cover mr-4" />
                 <span>{product.title}</span>
                 {/* <button onClick={() => onRemoveItem(product.id)} className="ml-4 text-red-500">X</button> */}
             </td>
             <td className="border-b p-2 text-center  ">${product.price}</td>
             <td className="border-b p-2 text-center">${quantity}

             </td>
             <td  className="border-b p-2 text-center">${(product.price *quantity.toFixed(2)) }</td>
         </tr>


     );
 }
 export default cartProductDetails;