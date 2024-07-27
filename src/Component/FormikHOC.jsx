import React from "react";
import {useField} from "formik";
import Input from "./Input";


function FormikHOC(Component){
  return function Out({name,...rest})
    {
      const field = useField(name);
        const[data,meta] = field;
        const {vaule,onBlur,onChange}=data;
        const {error,touched} =meta;
        console.log(data);


        let borderClass = " border-gray-300 focus:border-indigo-500";
        if(error && touched){
          borderClass = "border-red-500";
        }

        return(
          <Component
              vaule={data.vaule}
               name={name}
               onChange={onChange}
               onBlur={onBlur}
            touched= {touched}
            error= {error}
                  
               {...rest}

             />
              );
    }
  return
}

export default FormikHOC;