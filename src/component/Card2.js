import React from "react";
import "../css/card2.css";

const Card2 = ({imgSrc, charName, verification, badge}) => (
    <div className="card2-container">
        <div className="card2-slide">
            <div className="carousel-image-container">
                <img className="carousel-image" src={imgSrc} alt="character image" />
            </div>
            
            <div>
                <span> {verification && <img src={badge} alt="verification badge"/> }</span>
                <span>{charName}</span>
            </div>
        </div>
        
        <div>
            binance image
        </div>

    </div>
)

export default Card2;