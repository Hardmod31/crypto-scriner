import React, {useEffect, useState} from "react";
import axios from "axios";
import { OPTIONS } from "../../constants/index.js";
import Coin from "../../components/Coin/Coin.jsx";
import {Link} from "react-router-dom";
import {useMyContext} from "../../context/context.jsx";

const HomePage = () => {
  const {setCoinsArrayData} = useMyContext();
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${import.meta.env.VITE_CoinKey}`, OPTIONS, { withCredentials: true })
      .then((res)=>setCoinsData(res.data.data))
  }, []);

  useEffect(() => {
      setCoinsArrayData(coinsData)
  }, [coinsData]);

  return (
    <div className='coin-list'>
      {coinsData.map((el)=>{
        return (
            <div key={el.id}>
              <Link to={`/coin/${el.id}`}>{<Coin {...el}/>}</Link>
            </div>
        )
      })}
    </div>
  );
};

export default HomePage;