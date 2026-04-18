'use client';
import React, { createContext } from 'react';
import  { useState } from 'react';

export const historyContext = createContext('');

const Contextpage = ({children}) => {

    const [arr, setArr] = useState([]);

    const addToArr = (item,type,timeAndDate) => {

        

         item.type = type;
         item.timeAndDate = timeAndDate;
        setArr([...arr, item]);
    }

    const data ={
        arr,
        addToArr
    }

    return (
        
            <historyContext.Provider value={data}>
                {children}
            </historyContext.Provider>
    
    );
};

export default Contextpage;

