import React, { useState } from "react";
import { AlertContext } from "../context";

function AlertProvider({children}){
  const [alert, setAlert] = useState();
   const removeAlert = () => {
        setAlert(undefined);
      }
     return ( <AlertContext.Provider value={{ alert, setAlert, removeAlert }} >{children}</AlertContext.Provider>);
 }
export default AlertProvider;
