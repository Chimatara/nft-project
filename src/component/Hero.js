import React from "react";
import "../css/hero.css";
import Carousel1 from "./Carousel1";

const Hero = () => {
    return ( 
        
        <section className="hero1-section">
            <div className="hero-container">
                <div className="featured-artwork-properties">
                    <h2 className="artwork-heading">Featured artwork</h2>

                    <div className="featured-g-container">
                        <div className="featured-artwork">
                            <div className="nft-image-container">
                                <img className="nft-image" src="https://media.nftb.io/media/thumbnails/nfts/WrNtg4Kdp0Y5UP6iqqkQRr1656692945721.png" alt="Featured art work" />
                                <button>
                                    <div class="style_icon__3GZuk">
                                        {/* <div class="style_heart__KND0z">
                                            <svg fill="#000" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class=""><path d="M19.158647,9.04472473 C17.974656,9.10071971 16.8549248,9.54559726 15.9633903,10.2930527 L15.9051639,10.3437095 L15.8480246,10.2930326 C14.8928316,9.49218078 13.6757195,9.03870954 12.3981302,9.03870954 C9.43683525,9.03870954 7.02916392,11.4463809 7.02916392,14.4076758 C7.02916392,15.2875421 7.24426164,16.1508601 7.65679867,16.9277744 L7.80159936,17.1834499 C8.68066367,18.6191381 10.1963042,20.1940895 12.1275847,21.8429224 C12.3217658,22.0087048 12.5133033,22.1695405 12.7010874,22.3248889 L13.2520703,22.7739309 L13.7738754,23.1868031 L14.2598448,23.5602603 L14.7033208,23.8910572 L15.0976453,24.1759488 C15.2936573,24.3152206 15.5200902,24.3992856 15.754468,24.4234386 L15.9157208,24.4307033 C16.2003926,24.4307033 16.4802324,24.3427655 16.7162154,24.1742062 L17.1072587,23.8918045 L17.5494073,23.5620151 L18.0354064,23.1885349 L18.5580014,22.7750614 L19.1099376,22.3252915 C19.2980005,22.1697296 19.4897444,22.0087345 19.6839604,21.8429224 C21.4945076,20.2971657 22.9397616,18.816291 23.8319496,17.4636221 L24.0170171,17.1713275 C24.5166967,16.3425042 24.7822494,15.385305 24.7822494,14.4076758 C24.7822494,11.4463809 22.3745781,9.03870954 19.4132831,9.03870954 L19.158647,9.04472473 Z M19.4132831,11.0387095 C21.2700086,11.0387095 22.7822494,12.5509504 22.7822494,14.4076758 C22.7822494,14.9450645 22.6547798,15.4717091 22.4119945,15.9448416 L22.2904464,16.1617967 C21.561646,17.3518785 20.1689606,18.7991069 18.3853541,20.3218629 L17.8028757,20.810861 L17.2128989,21.2898818 C17.1174283,21.3661032 17.0235325,21.4404412 16.9314292,21.5127821 L16.4020623,21.9219535 L15.9061639,22.2927095 L15.4130857,21.9247062 L14.8916113,21.5218625 C14.8009685,21.4507208 14.7085904,21.3776439 14.614672,21.30273 L14.0342373,20.8319867 C13.8356373,20.6682472 13.6324354,20.4979444 13.426191,20.3218629 C11.7540133,18.8942394 10.4254364,17.5330463 9.65940465,16.3779123 L9.51376378,16.1496743 C9.19565483,15.6219597 9.02916392,15.0218343 9.02916392,14.4076758 C9.02916392,12.5509504 10.5414047,11.0387095 12.3981302,11.0387095 C13.4674915,11.0387095 14.4685552,11.5443864 15.1029628,12.3983967 L15.9057067,13.4790134 L16.7084505,12.3983967 C17.3428163,11.5444428 18.3440282,11.0387095 19.4132831,11.0387095 Z"></path></svg>
                                        </div>
                                        <div class="style_circle__2IabP"></div>
                                        <div class="style_shadow__2V4n4"></div> */}
                                        <span>❤</span>
                                        <div>13</div>
                                    </div>
                                </button>
                                <span className="small-bnb-image">
                                 <img src="https://nftb.io/static/img/networks/bnb.svg" alt="bnb-image" />    
                                </span>
                            </div>
                            <section className="artwork-info">
                                <h4>Sadalbari</h4>
                                <p className="grey-intense">
                                    Sadalbari is a star in the northern constellation of Pegasus.
                                    The star is visible to the naked eye on a moonless night. 
                                    Measurements of annual parallax by the Hipparcos spacecraft
                                    gave an estimate of the distance from the Sun of approximately 106 light-years.
                                    The traditional name Sadalbari comes from the Arabic phra...
                                </p>

                                <div className="middle-section-container">
                                    <div>
                                        <div className="vlad-image-container">
                                            <img className="vlad-image" src="https://media.nftb.io/media/thumbnails/users/avatar/7imoi1YjlElG01RYgAVUg41649104216261.png" alt="" />
                                        </div>
                                        <div>
                                            <p className="grey-opac">Created and owned by</p>
                                            <span className="special-text">Vlad Drem</span>
                                        </div>
                                    </div>
                                </div>

                                <p> <span className="grey-medium">Reserve price: </span> <span className="special-text">0.25BNB</span></p>
                            </section>
                        

                            
                        </div>

                        <div className="aside-div"></div>
                    </div>
    
                </div>
        
            </div>

            <Carousel1 />
        </section>
     );
}

export default Hero;