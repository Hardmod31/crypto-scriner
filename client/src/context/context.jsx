import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext();

export const MyProvider = ({children}) => {
    const [coinsArrayData, setCoinsArrayData] = useState([]);
    const value = {coinsArrayData, setCoinsArrayData};

    return <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
};

export const useMyContext = () => useContext(MyContext);