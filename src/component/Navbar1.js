import React from "react";
import "../css/navbar1.css";

const Navbar1 = () => {
    return (
        <div className="navbar1-container">
            <nav className="navbar1 wrap">
                <div className="nftb-icon-price-container flex-start-center">
                    <div className="nft-phone  ">
                        <div className="phone-container ">
                            <img
                            src="https://nftb.io/static/img/icons/balance-nftb.svg"
                            alt="NFT phone icon"
                            />
                        </div>
                        <span>NFTB: </span>
                        <span> $0.01 </span>
                    </div>
                    
                </div>

                <div className="address-g-container">
                    <div className="address-main-container">
                        <div className="address">0xde3dbb...6045c71a</div>
                    </div>
                    
                    <button className="copy-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" stroke="#BCC2C9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5.04705C10.0632 4.65125 10.1576 4.30403 10.2877 4C10.9688 2.40804 12.5 2 15.9208 2C21 2 22 4 22 8.0941C22 11 21.777 13.2005 20 13.7606C19.6999 13.8552 19.3555 13.9317 18.9604 14"></path><path d="M9 22C14 22 16 20.5 16 15C16 9.5 14 8 9 8C4 8 2 9.16667 2 15C2 20.8333 4 22 9 22Z"></path><path d="M7 9C7 9 7.60457 11.3954 6.5 12.5C5.39543 13.6046 3 13 3 13"></path></svg>
                    </button>
                </div>
                

                
            

                <ul className="brands-container">
                    <li></li>
                    <li className="kucoin-container ">
                        <a className="anchor-text" href="https://trade.kucoin.com/NFTB-USDT" target="_blank" rel="noreferrer">
                            <span className="kucoin-logo logo-gap">
                                <img src="https://nftb.io/static/img/exchanges/header-kucoin.svg" alt="" width="14" height="14" loading="lazy" decoding="async"/>
                            </span>
                            <span className="mini-block">Kucoin</span>  
                        </a>
                    </li>

                    <li className="pancake-container flex-start-center">
                        <a className="anchor-text" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xde3dbbe30cfa9f437b293294d1fd64b26045c71a" target="_blank" rel="noreferrer">
                            <span className="pancake-logo logo-gap">
                                <img src="https://nftb.io/static/img/exchanges/header-pancake.svg" alt="pancake-icon" width="14" height="14" loading="lazy" decoding="async"/>
                            </span>
                            <span className="mini-block">Pancake</span>
                        </a>
                    </li>

                    <li className="Gate-container flex-start-center">
                        <a href="https://www.gate.io/trade/NFTB_USDT" target="_blank" rel="noreferrer">
                            <span class="gate-logo logo-gap">
                                <img src="https://nftb.io/static/img/exchanges/header-gate.svg" alt="gate-logo" width="14" height="14" loading="lazy" decoding="async"/>
                            </span>
                            <span className="mini-block">Gate</span>
                        </a>
                    </li>
                

                    <li className="stake-container">
                        <a href="#">
                            <span className="percentage-img-container">
                                <img className="percentage-img" src="https://nftb.io/static/img/icons/percent.svg" alt="percentage-iamge" />
                            </span>
                            <span>Stake & Earn</span>
                        </a>
                    </li>



                    {/* <li>
                        <a class="style_btn__BByc3 style_dark__VOZeW style_xs__B19y2" href="/earn/">
                            <img src="/static/img/icons/percent.svg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                            <span>Stake &amp; Earn</span>
                        </a>
                    </li> */}

                </ul>
                

            </nav>
        </div>
  );
};

export default Navbar1;
