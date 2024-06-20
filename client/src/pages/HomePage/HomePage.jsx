import React, { useEffect, useState } from "react";
import axios from "axios";
import { OPTIONS } from "../../constants/index.js";
import Coin from "../../components/Coin/Coin.jsx";

const HomePage = () => {

  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${import.meta.env.VITE_CoinKey}`, OPTIONS, { withCredentials: true })
      .then((res)=>setCoinsData(res.data.data))
  }, []);

  return (
    <div>
      {coinsData.map((el)=>{
        return (
        <Coin key={el.id} {...el}/>
        )
      })}
    </div>
  );
};

export default HomePage;