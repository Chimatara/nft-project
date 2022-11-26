import React from "react";
import "../css/corusel2.css";
import Card2  from "./Card2.js"
import Carousel from 'react-elastic-carousel';

const Carousel2 = () => {
    return ( 
        <div className="carousel2-container">
            <div className="carousel-header">         
                <h2>Hottest Games</h2>
                
                <div>
                    {/* below is a button */}
                    <span>
                        All games
                    </span>

                    <span>Left button</span>
                    <span>right button</span>
                </div>
            </div>

            <div className="carousel2-images">
            {/* https://media.nftb.io/media/thumbnails/games/bsc-news-nft/NkwH1rqPZ6sTfGtVNltnur1663049373700.jpg */}
            
            {/* https://media.nftb.io/media/thumbnails/games/tap-fantasy/5sLig6PGZd8bFGcuCAibjN1655461033396.png */}
            
            {/* https://media.nftb.io/media/thumbnails/games/dragon-kart/AFPcNeg30s0uVq74FgjaB41655291188175.png */}
            
            {/* https://media.nftb.io/media/thumbnails/games/animalia/xfjE7AjUgtCzUdNPgdIeVJ1655804714766.png */}

            {/* binance images
            https://nftb.io/static/img/networks/bnb.svg 
            
            */}

            {/* verification image
            https://nftb.io/static/img/icons/checkmark-verified.svg */}

            <Carousel itemPadding={[0,1]} itemsToShow={3}>
                <Card2 
                    imgSrc="https://media.nftb.io/media/thumbnails/games/bsc-news-nft/NkwH1rqPZ6sTfGtVNltnur1663049373700.jpg"
                    charName="BSC News NFT"
                    verification={true}
                    badge="https://nftb.io/static/img/icons/checkmark-verified.svg"
                />
                
                <Card2 
                    imgSrc="https://media.nftb.io/media/thumbnails/games/tap-fantasy/5sLig6PGZd8bFGcuCAibjN1655461033396.png"
                    charName="Tap Fantasy"
                    verification={true}
                    badge="https://nftb.io/static/img/icons/checkmark-verified.svg"
                />

                <Card2 
                    imgSrc="https://media.nftb.io/media/thumbnails/games/animalia/xfjE7AjUgtCzUdNPgdIeVJ1655804714766.png"
                    charName="Animalia"
                    verification={true}
                    badge="https://nftb.io/static/img/icons/checkmark-verified.svg"
                />
                
                
                <Card2 
                    imgSrc="https://media.nftb.io/media/thumbnails/games/dragon-kart/AFPcNeg30s0uVq74FgjaB41655291188175.png"
                    charName="Dragon Kart"
                    verification={true}
                    badge="https://nftb.io/static/img/icons/checkmark-verified.svg"
                />
            
            </Carousel>

            </div>
            
        </div>
     );
}
 
export default Carousel2;
