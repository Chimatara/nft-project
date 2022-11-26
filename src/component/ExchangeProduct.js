import React from "react";
import "../css/exchangeProduct.css";

const ExchangeProduct = ({traderImage, traderName, price, isVerified}) => {
    return ( 
        <div className="exchange-container">
            <div className="trade-image-container">
                <img className="trader-image" src={traderImage} alt="image of the trader" />
                {isVerified && <span className="verified"></span>}
            </div>

            <div>
                <h3>{traderName}</h3> 
                <small>{price}  BNB</small>
            </div>
        </div>
    );
}
 
export default ExchangeProduct;