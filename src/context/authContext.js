import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));

    const login = async (inputs) => {
        try {
          const res = await axios.post("http://localhost:5000/login", inputs);
          setCurrentUser(res.data);
        } catch (error) {
          console.error("Login failed:", error);
        }
      };
      
    const logout = async(inputs) =>{
    await axios.post("http://localhost:5000/logout");
    setCurrentUser(null);
    }

    useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));    
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}