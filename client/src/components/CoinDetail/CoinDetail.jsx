import React, {useState} from 'react';
import './CoinDetail.css'
import {useMyContext} from "../../context/context.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";

const CoinDetail = () => {
    const params = useParams();
    const {coinsArrayData, loginUserId, coinLike, setCoinLike} = useMyContext();
    const [countLike, setCountLike] = useState(0);
    const findCoin =
        coinsArrayData.find((el) => {
            return String(el.id) === params.id;
        })
    const formattedDate = findCoin.last_updated.replace('T', ' время: ').slice(0, -5);

    const likeHandler = async () => {
        const result = await axios.post(
            "http://localhost:3000/like",
            { user_id:loginUserId, coin_id: findCoin.id },
            { withCredentials: true }
        );

        if (result.status === 200) {
            setCountLike(prevState => prevState += 1)
            setCoinLike({...coinLike, coinId: result.data.coin_id, userId: result.data.user_id})
        }
    };

        return (
            <div className='coin_monitor'>
                <span className='coin_info'>Монета: {findCoin.name}</span>
                <span className='coin_info'>Тикер: ({findCoin.symbol})</span>
                <span className='coin_info'>{formattedDate}</span>
                <span className='coin_info'>Текущая цена: {findCoin.quote.USD.price.toFixed(2)} USD</span>
                <span className='coin_info'>Капитализация: {findCoin.quote.USD.market_cap.toFixed(2)}</span>
                <span className='coin_info'>Объём торгов за последние 24ч: {findCoin.quote.USD.volume_24h.toFixed(2)}</span>
                <button onClick={() => {
                        void likeHandler()
                }}> + </button>
                <p>{countLike}</p>
            </div>
        );
};

export default CoinDetail;