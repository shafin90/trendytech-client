// This component is used for Context API.

import { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({children}) => {
    // State declaration of this website========================================================================
    const [theme, setTheme] = useState(true); // determine the bg-color of the website. true?'white':'black'
    
    
    
    // Handle functionality of this website======================================================================
    
    // Handle theme
    const handleTheme = ()=>{
        setTheme(!theme);
    }
    
    
    // Data to pass throughout the whole app======================================================================
    const data = {
        theme,
        handleTheme
    }
    
    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;