import React from 'react'
import './coin.css'
const Coin = ({
    name,
    image,
    symbol,
    price,
    volume,
    priceChange,
    marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>

                    {/* the toLocaleString is used to enter the commas in the numbers as it is large so it is easier too assess the amount by the position of the commas */}
                <p className="coin-volume">${volume.toLocaleString()}</p>
{/* we use ternary operator to give classes of green and red when prices are positive or negative accordingly and use toFixed() operator to set the decimal places */}
                {priceChange<0?(<p className="coin-percent red">{priceChange.toFixed(2)}%</p>):
                (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
                <p className="coin-marketcap">
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
