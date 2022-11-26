import React from "react";
import "../css/jumbotron.css";

const Jumbotron = () => {
    return ( 
        <div className="jumbotron-container">
            <div className="jumbotron-first">
                <div>
                    <h1>NFTb/Earn</h1>

                    <div>TVL: 61,934,055.98574 NFTB($624,031.96)</div>

                    {/* below is a button */}
                    <span>
                        Discover more
                    </span>
                </div>
            </div> 
        
            <div className="jumbotron-second">
                {/* below is an advert image */}
                <img src="https://nftb.io/static/img/pages/home/section-earn.png" alt="nftb advert" />
            </div>
            
        </div>
     );
}
 
export default Jumbotron;