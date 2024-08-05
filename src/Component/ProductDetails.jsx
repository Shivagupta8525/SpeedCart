 import React, { useEffect, useState,useCallback } from "react";
 import { useParams, Link } from "react-router-dom";
 import { ImSpinner10 } from "react-icons/im";
 import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
 import { getProData } from "./api";
 import NotFound from './NotFound';
import Button from "./Button";
import { withCart } from "./withProvider";

 function ProductDetails({ onAddToCart }) {

     const id = parseInt(useParams().id);
     const [product, setProduct] = useState();
     const [loading, setLoading] = useState(true);
     const [count, setCount] = useState(1);

     useEffect(function () {
         const PD = getProData(id);

         PD.then(function (product) {
             console.log("Api ka response aya", product);
             setProduct(product);
             setLoading(false);
             setCount(1);

         }).catch(function () {
             setLoading(false);
             console.log("error ayaa")

         })


     }, [id]);

     const handleCountChange=useCallback(function (event) {
        if (event.target.value <= 0){
            setCount(1);
        }
        else{ 
         setCount(+event.target.value);
        }

     }
    ,[]);

     function handleButtonClick() {
         onAddToCart(id, count);

     }



     if (loading) {
         return <div className=" grow text-indigo-700 text-6xl h-full flex items-center justify-center"> <ImSpinner10 className="animate-spin" /></div>
     }
     if (!product) {
         return <div className=" grow text-indigo-700 text-6xl h-full flex items-center justify-center"><NotFound /></div>;
     }


     return (


         < div className=" grow bg-gray-200  max-w-6xl mx-auto px-auto  px-1  ">
             <Link to={"/"} className="text-4xl  px-2 lg:px-80  " >
                 <HiArrowSmLeft />
             </Link>
             <div className=" bg-white  border lg:flex max-w-6xl  mx-auto my-20 -mt-10 ">
                 <img
                     className="w-screen sm:max-w-80 lg:w-2/5 lg:h-96   h-80  "
                     src={product.thumbnail}
                     alt="cooffe mug"
                 />

                 <div className="lg:space-y-2 m-2 lg:gap-2   " >

                     <h1 className=" text-xl  lg:text-3xl "> {product.title}</h1>
                     <h1 className=" lg:text-lg  ">{product.category}</h1>
                     <h2 className="lg:text-xl font-bold"> Price : ${product.price}</h2>
                     <p className="lg:text-xl ">Rating : {product.rating}/5</p>
                     <p className="text-gray-500 text-xs lg:text-xl ">{product.description}
                     </p>
                     <div className="flex gap-2 pt-4  max-h-16">
                         <input type="number" value={count} onChange={handleCountChange}  className="border-2 border-gray-300 rounded-lg px-1  w-12 " />
                         {/* <button onClick={handleButtonClick} className="bg-orange-600 text-white rounded py-2 px-6">
                             ADD TO CART
                         </button> */}
                         <Button onClick={handleButtonClick}>Add to cart</Button>
                     </div>
                 </div>
             </div>
             <div className="flex px-5 justify-between mb-2  ">

                 <div>
                     {id > 1 && (<Link className="lg:text-2xl  border  border-yellow-500 rounded-lg px-2 py-1 bg-yellow-400  flex" to={"/ProductDetails/" + (id - 1)}>
                         <HiArrowSmLeft className="text-2xl lg:text-4xl" />
                         Previous </Link>)}
                 </div>
                 <div> <Link className="border lg:text-2xl border-yellow-500 rounded-lg px-4 py-1 bg-yellow-400 flex " to={"/ProductDetails/" + (id + 1)}>
                     <HiArrowSmRight className="text-2xl lg:text-4xl" />
                     Forword </Link>
                 </div>
             </div>
         </div>


     );
 }

 export default withCart(ProductDetails);