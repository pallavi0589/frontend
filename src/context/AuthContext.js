import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email, password) => {

        // TODO:  authentication
        // If successful:
      //  setUser(Pallavi);
        setIsAuthenticated(true);
     };
    
     const logout = () => {
         setUser(null);
         setIsAuthenticated(false);
     };

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
