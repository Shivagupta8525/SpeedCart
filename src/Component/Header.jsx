 import React from 'react';
 import { Link } from 'react-router-dom';
 import { RiShoppingBagLine } from "react-icons/ri";
 import { GrShop } from "react-icons/gr";

 function Header({ productCount }) {
     return (
         <div className="bg-white py-1">
             <div className="  max-w-6xl mx-auto  flex justify-between items-center ">
                 <Link to={'/'}>
                     <img className="h-16 "
                         src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png" alt="logo.png" /> </Link>
                 <div className="flex flex-col items-center">
                     {/* <RiShoppingBagLine  className="text-4xl text-orange-600"/>
            <span className="-mt-7">{productCount}</span> */}
                     <Link to="/my_cart">
                         <GrShop className=' text-4xl text-orange-400' />
                         <p className=' -mt-6 ml-3 text-orange-400'>{productCount}</p>
                     </Link>
                 </div>

             </div>
         </div>
     )
 }

 export default Header;