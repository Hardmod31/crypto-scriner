import React from "react";
import './Coin.css'

const Coin = (props) => {
    const {name, symbol, last_updated } = props;
    const formattedDate = last_updated.replace('T', ' время: ').slice(0, -5);

    return (
        <div className="coin-item">
            <span>Монета: {name}</span>
            <span>Тикер: ({symbol})</span>
            <span> Текущая цена: {props.quote.USD.price.toFixed(2)} USD </span>
            <span> Последнее обновление цены: {formattedDate} </span>
        </div>
    );
};

export default Coin;