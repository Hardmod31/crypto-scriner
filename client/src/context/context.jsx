import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext();

export const MyProvider = ({children}) => {
    const [coinsArrayData, setCoinsArrayData] = useState([]);
    const [loginUserId, setLoginUserId] = useState('');
    const [coinLike, setCoinLike] = useState({});
    const value = {coinsArrayData, setCoinsArrayData, loginUserId, setLoginUserId, coinLike, setCoinLike};

    return <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
};

export const useMyContext = () => useContext(MyContext);