 import React,{memo} from 'react';
 import Product from './Product';


 function Productlist({ products }) {
     return (<>

         <div className=" md:grid   md:grid-cols-3  gap-2 space-y-2 md:space-y-0 "  >
             {products.map(function (items) {
                 return <Product key={items.title} {...items} />;

             })}
         </div>
     </>
     );
 }
 export default memo(Productlist);