 import React from 'react';
 import { Link } from 'react-router-dom';

 function Product(data) {
     return (
        <Link to={"/ProductDetails/" + data.id}    >
         <div className="  border   bg-white  flex flex-col gap-2   " >
             <div className="w-full h-full">
                 <img className=" w-full h-full object-cover aspect-square" src={data.thumbnail} />
             </div>

             <div className="text-2xs  ml-2  font-bold mt-2">{data.title}</div>
             <div className="text-red-500 text-2xs ml-2   ">{data.category}</div>
             <div className="text-1xs ml-2 -mt-1">Rating : {data.rating}/5</div>
             <div className='ml-2 -mt-1 font-bold'> Price : ${data.price}</div>
              
         </div>
         </Link>
     );

 }
 export default Product; 
