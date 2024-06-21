import React from 'react';
import './CoinDetail.css'
import {useMyContext} from "../../context/context.jsx";
import {useParams} from "react-router-dom";

const CoinDetail = () => {
    const params = useParams();
    const {coinsArrayData} = useMyContext();
    const findCoin =
        coinsArrayData.find((el) => {
            return String(el.id) === params.id;
        })
    const formattedDate = findCoin.last_updated.replace('T', ' время: ').slice(0, -5);
    console.log(findCoin)

        return (
            <div>
                <span>Монета: {findCoin.name}</span>
                <span>Тикер: ({findCoin.symbol})</span>
                <span>{formattedDate}</span>
                <span>Текущая цена: {findCoin.quote.USD.price.toFixed(2)} USD</span>
                <span>Капитализация: {findCoin.quote.USD.market_cap.toFixed(2)}</span>
                <span>Объём торгов за последние 24ч: {findCoin.quote.USD.volume_24h.toFixed(2)}</span>
            </div>
        );
};

export default CoinDetail;