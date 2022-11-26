import React from "react";
import ExchangeProduct from  "./ExchangeProduct";
import "../css/topTraders.css";

const TopTraders = () => {
    return (
        <div className="traders-container">
            <div className="top-traders">
                <div className="top-sellers">
                    <div className="trader-header">
                        <img className="rating-image" src="https://nftb.io/static/img/icons/circle-sellers.svg" alt="love image" />
                        <h3>Top sellers</h3>
                    </div>

                    <div className="grid-container">
                    {/* traderImage, traderName, price */}
                        <ExchangeProduct 
                            traderImage="https://media.nftb.io/media/thumbnails/users/avatar/RFPAjKc9ir6hk9jlVl3ARd1649088076275.jpg"
                            traderName="Nael G"
                            price="163.72"
                            isVerified={true}
                        />
                        <ExchangeProduct 
                            traderImage="https://media.nftb.io/media/thumbnails/users/avatar/bERk9o2XMQx8oTYG5bO0ZC1649063421291.jpg"
                            traderName="Degen Demons"
                            price="163.72"
                            isVerified={true}
                        />
                        <ExchangeProduct 
                            traderImage="https://media.nftb.io/media/thumbnails/users/avatar/CKEDupPUzrEudCqU8iY2XY1660895011104.jpg"
                            traderName="Bored Clowns"
                            price="149.58"
                            isVerified={true}
                        />
                        <ExchangeProduct 
                            traderImage="https://media.nftb.io/media/thumbnails/users/avatar/SsOYJnxSGHmmsP2YlW3cVQ1649082764627.jpg"
                            traderName="ZOOBKO"
                            price="123.73"
                            isVerified={true}
                        />
                        <ExchangeProduct 
                            traderImage="https://media.nftb.io/media/thumbnails/users/avatar/4HIpA5xJiQWXplBl4XyQbp1649104092639.jpg"
                            traderName="myplse"
                            price="103.56"
                            isVerified={true}
                        />
                        <ExchangeProduct 
                            traderImage="https://media.nftb.io/media/thumbnails/users/avatar/PvawdXGZqNQmlHiwXEWzUC1649103639610.jpg"
                            traderName="Skere"
                            price="82.83"
                            isVerified={true}
                        />
                    </div>
                </div>

                <div className="top-buyers">
                    <div className="trader-header">
                        <img className="rating-image" src="https://nftb.io/static/img/icons/circle-buyers.svg" alt="love image" />
                        <h3>Top Buyers</h3>
                    </div>

                    <div className="grid-container">
                        <ExchangeProduct 
                                traderImage="https://media.nftb.io/media/thumbnails/users/avatar/jUGNvYRTvC7Dn2bUpvDwV01649102369659.jpg"
                                traderName="Xiaoba_ART"
                                price="123.1"
                                isVerified={false}
                            />
                            <ExchangeProduct 
                                traderImage="https://media.nftb.io/media/thumbnails/users/avatar/2rXCLaMXJIqfM2Uq6wEOky1649086857438.png"
                                traderName="J.pegVC"
                                price="92.87"
                                isVerified={false}
                            />
                            <ExchangeProduct 
                                traderImage="https://media.nftb.io/media/thumbnails/users/avatar/tEPH0XZIDbZ5CA13Jqwazl1649102451306.png"
                                traderName="VISIONARY"
                                price="83.43"                            
                                isVerified={false}
                            />
                            <ExchangeProduct 
                                traderImage="https://media.nftb.io/media/thumbnails/users/avatar/uuG0yZvfR3XRYdAop7aR4S1649102528026.png"
                                traderName="Private Collector 1"
                                price="64.58"
                                isVerified={false}
                            />
                            <ExchangeProduct 
                                traderImage="https://media.nftb.io/media/thumbnails/users/avatar/u9FAanEQpTdx5ZcVmB9syN1649104481561.png"
                                traderName="Generation Wealth"
                                price="61.98"
                                isVerified={false}
                            />
                            <ExchangeProduct 
                                traderImage="https://media.nftb.io/media/thumbnails/users/avatar/hWM8QSeSpLBxNgXXJ5zVij1649102648724.jpg"
                                traderName="hichhaneh"
                                price="49.22"
                                isVerified={false}
                            />
                    </div>

                </div>
            </div>
        </div>
      );
}
 
export default TopTraders;
