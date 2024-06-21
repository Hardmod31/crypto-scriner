import React from "react";
import './Coin.css'
import {useLocation, useNavigate} from "react-router-dom";

const Coin = (props) => {
    const {name, symbol, last_updated} = props;
    const formattedDate = last_updated.replace('T', ' время: ').slice(0, -5);
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;

    console.log(props);
    return (
        <div className="coin-item">
            <nav>
                { pathname !== '/coin:id' && <span onClick={()=>navigate('/coin:id')}>Монета: {name}</span> }
                { pathname !== '/coin:id' && <span onClick={()=>navigate('/coin:id')}>Тикер: ({symbol})</span> }
                { pathname !== '/coin:id' && <span onClick={()=>navigate('/coin:id')}> Текущая цена: {props.quote.USD.price.toFixed(2)} USD </span> }
                { pathname !== '/coin:id' && <span onClick={()=>navigate('/coin:id')}> Последнее обновление цены: {formattedDate} </span> }
            </nav>
        </div>
);
};

export default Coin;