import React, { createContext, useContext, useState } from 'react'

const AuthContextPart = createContext();

export const AuthProvider = ({children}) =>{
    const[user,setUser] = useState(null);

    const logIn = (userData) =>{
        setUser(userData)
    };

    const logout = () => {
        setUser(null);
    };

    return(
        <AuthContextPart.Provider
        value={{
            user,
            logIn,
            logout,
        }}
        > {children}
        </AuthContextPart.Provider>
    );
};

export const useAuthPart = () => {
    return useContext(AuthContextPart);
};