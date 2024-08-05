import React, { useEffect, useState } from "react";
import { UserContext } from "../context";
import axios from "axios";

function UserProvider({children}){

    const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const token = localStorage.getItem("token");
  useEffect(() => {

    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        }
      }).then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(()=>{
        localStorage.removeItem("token");
        setLoading(false)
      });
    }
    else {
      setLoading(false);
    }
  }, [token])
  if(loading)
    
    {
    return<>Loading...</>;
  }
      return (<UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
      
      
       );

}
export default UserProvider;
