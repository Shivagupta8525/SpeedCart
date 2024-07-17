 import React, { useEffect, useState } from "react";
 import ProductList from "./ProductList";
 import { getList } from "./api";
 import Nomatch from './Nomatch';
 import alldata from './data';
 import Pagenum from './Pagenum';



 function ProductListPage() {
     const [ProList, setProList] = useState([]);
     const [loading, setloding] = useState(true);

     useEffect(function () {
         const list = getList();
         list.then(function (Products) {
             setProList(Products);
             setloding(false);
         });
     }, []);

     const [query, setQuery] = useState("");
     const [sort, setSort] = useState("deafult");


     let data = ProList.filter(function (items) {
         return items.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
     });


     if (sort == "price_Low") {
         data.sort(function (a, b) {
             return a.price - b.price;
         });

     }
     else if (sort == "name") {
         data.sort(function (a, b) {
             return a.title.localeCompare(b.title);
         });

     }
     else if (sort == "price_High") {
         data.sort(function (a, b) {
             return b.price - a.price;
         });
     }
     else if (sort == "rating") {
         data.sort(function (a, b) {
             return b.rating - a.rating;
         });
     }


     function handelonSearch(event) {
         setQuery(event.target.value);
     }
     function handelonSort(event) {
         setSort(event.target.value);
         // console.log(sort);
     }


     console.log(data);


     if (!ProList) {
         return <div className=" grow text-indigo-700 text-4xl flex items-center justify-center"> <ImSpinner10 className="animate-spin" /></div>

     }
     return (

         <div className="  flex flex-col grow max-w-6xl mx-auto px-9  my-16 -2 bg-white ">
             <div className=" flex  justify-between  ">
                 <input
                     value={query}
                     type="text"
                     placeholder="Search"
                     className=" placeholder-black border border-black rounded-md lg:ml-8 h-8  mt-2 lg:mt-2 lg:mb-2 text-center lg:w-40 w-28"
                     onChange={handelonSearch}
                 />

                 {/* <div className="  lg:mr-6 lg:mt-4 mt-2  lg:mb-1  lg:mr-20  "> */}
                 <select className="border border-gray-400 bg-white my-2 mx-2 w-32 h-8 rounded-md " onChange={handelonSort}
                     value={sort}>
                     <option value="default">Default sorting</option>
                     <option value="name">Sort by Name</option>
                     <option value="rating">Sort by Rating</option>
                     <option value="price_Low"> Price (Low to high)</option>
                     <option value="price_High"> Price (High to Low)</option>

                 </select>
                 {/* </div> */}
             </div>
             {<ProductList products={data} />
             }
             {data.length == 0 && <Nomatch />}
             <Pagenum />

         </div>



     );
 }

 export default ProductListPage;


