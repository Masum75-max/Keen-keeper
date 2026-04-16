import React, { createContext } from 'react';
import { useState } from 'react';
 
export const typeContext = createContext('');

 
const InteractionContex = ({ children }) => {
    const [type, setType] = useState("none");

    const typeHandler = (t) => {
        setType(t);
    }
    return (
        <typeContext.Provider value={{type,typeHandler}}>
            {children}
        </typeContext.Provider>
    );
};

export default InteractionContex;