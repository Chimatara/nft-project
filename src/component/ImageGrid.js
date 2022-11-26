import React from "react";
import "../css/imageGrid.css";


const ImageGrid = () => {
    return ( 
        <div className="imageGrid-container">
            <div className="backedUp-text">
                <small>BACKED BY</small>
            </div>
            
    

            <div className="imageGrid">
                <div>
                    <img src="https://nftb.io/static/img/svg/logos/partner-spark.svg" alt="swag image" />
                </div>
                
                <div>
                    <img src="https://nftb.io/static/img/svg/logos/partner-next-ventures.svg" alt="" />
                </div>

                <div>
                    <img src="https://nftb.io/static/img/svg/logos/partner-malbec.svg" alt="MalBec" />
                </div>
                
                <div>
                    <img src="https://nftb.io/static/img/svg/logos/partner-binance.svg" alt="bnb image" />
                </div>

                <div>
                    <img src="https://nftb.io/static/img/svg/logos/partner-meta-constant.svg" alt="metaConstant" />
                </div>
                
                <div>
                    <img src="https://nftb.io/static/img/svg/logos/partner-rarestone.svg" alt="rarestone" />
                </div>

                <div> 
                    <img src="https://nftb.io/static/img/svg/logos/partner-polygon-studios.svg" alt="polygon image" />
                </div>
            </div>
        </div>
     );
}
 
export default ImageGrid;