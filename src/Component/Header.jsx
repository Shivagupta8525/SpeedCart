import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logoBlack.png"
import { GrShop } from "react-icons/gr";

function Header({ productCount }) {
    return (
        < div className="bg-white py-1   ">
            <div className="  max-w-6xl mx-auto  flex justify-between items-center ">
                <Link to={'/'}>
                    <img className="h-20 "
                        src={logo} alt="logo.png" /> </Link>
                <div className="flex flex-col items-center">

                    <Link to="/my_cart">
                        <GrShop className=' text-4xl text-orange-400' />
                        <p className=' -mt-6 ml-3 text-orange-400'>{productCount}</p>
                    </Link>

                </div>
            </div>
        <div  >
                <Link to="/login" className="text-orange-400 font-bold text-lg">Login</Link>
                </div>


        </div>
    )
}

export default memo(Header);