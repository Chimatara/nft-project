import React from "react";
import "../css/product.css";

const Product = ({imageSrc, miniImage, creatorImage, isVerified ,videoSrc, isCreatorOwner ,title, likes, editionNum, creatorName, ownerAddress, price}) => {
    return (
        <div className="product-container">
            <div className="bigImage-container">
            { imageSrc ? <img src={imageSrc} height="100%" width="100%" alt="nft-image" /> :
                <video  className="video-object" src={videoSrc} autoplay="true" muted="true" loop playsinline ></video>
            }
            <span>
                <img src="https://nftb.io/static/img/networks/bnb.svg" alt="" />
            </span>
            </div>
            
            <div className="product-info">
                <div className="product-info1">
                    <div>
                        <h3>{title}</h3>
                        <small>Edition of {editionNum}</small>
                    </div>

                    <div className="like-container" >
                        <span>❤</span>
                        <span>4</span>
                    </div>
                </div>
                
                { isCreatorOwner ? 
                    <div className="product-info2-alt"> 
                        <div className="creator-image-container">
                            <img className="creator-image" src={miniImage} alt="" />
                            {isVerified && <span className="mini-verified"></span>}
                        </div>

                        <div>
                            <small className="small-grey">Created and owned by</small>
                            <p className="mid-black-text">{creatorName}</p>
                        </div>

                    </div> 
                    : 
                    
                    <div className="product-info2">
                        <div className="creator-container">
                            <div className="creator-image-container">
                                <img className="creator-image" src={miniImage} alt="" />
                                { isVerified &&  <span className="mini-verified"></span>}
                            </div>

                            <div>
                                <small className="small-grey">Created by</small>
                                <p className="mid-black-text">{creatorName}</p>
                            </div>
                        </div>

                        <div>         
                            <div className="owner-container">
                                <div className="center-image-container">
                                   { creatorImage ? <img className="center-image" src={creatorImage} alt="" />                                :
                                        <img className="center-image" src="https://nftb.io/static/img/user/avatar.png" alt="" />
                                    }

                                </div>

                                <div>
                                    <small className="small-grey">Owner</small>
                                    <p className="mid-black-text word-breaker">{ownerAddress}</p>
                            
                                </div>

                            </div>
                            
                        </div>
                    </div>

                }

                <div className="product-info3">
                    <small className="small-grey">Fixed price</small>
                    <p className="mid-black-text">{price}BNB</p>
                </div>

            </div>
        </div>
    )
}

export default Product;