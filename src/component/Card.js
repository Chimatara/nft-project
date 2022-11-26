import React from "react";
import "../css/card.css";
// https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg

const Card = ({imgSrc1, imgSrc2, imgSrc3, imgSrc4}) => (
    <div className="grid-container">
        <div className="grid-item">
            <img className="grid-image" src={imgSrc1} alt="first -item image" />
        </div>
        <div className="grid-item">
            <img  className="grid-image" src={imgSrc2} alt="second grid image" />
        </div> 
        <div className="grid-item">
            <img className="grid-image" src={imgSrc3} alt="third grid image" />
        </div>
        <div className="grid-item">
            <img className="grid-image" src={imgSrc4} alt="fourth grid image" />
        </div>
    </div>
)



export default Card;