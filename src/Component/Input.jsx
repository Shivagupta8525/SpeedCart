import React from "react";
import {useField} from "formik";


function Input({lable,id,className,name,...rest}) {

const field = useField(name);
  const[data,meta] = field;
  const {vaule,onBlur,onChange}=data;
  const {error,touched} =meta;
  console.log(data);

  
  let borderClass = "border-gray-300 focus:border-indigo-500";
  if(error && touched){
    borderClass = "border-red-500";
  }
   
  return(
    <div>
       <label htmlFor={id} className=" "> {lable}  

       </label>
       <input
           
        id={id}
         vaule={vaule}
         name={name}
         onChange={onChange}
         onBlur={onBlur}
           className={"  w-full rounded-md  border   pt-1  placeholder-gray-500   "+" "+className+" "+borderClass}
         {...rest}
          
       />
       { error && touched && <div className="text-red-300">{ error}</div>}

    </div>
     
  )
  
}


export default Input;