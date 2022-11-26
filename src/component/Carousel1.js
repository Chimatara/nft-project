import React from "react";
import Card from "./Card";
import "../css/carousel1.css";
import Carousel from 'react-elastic-carousel';



const Carousel1 = () => {
    
    
    return (

        <section id="slider">
            <div className="container">
                <div className="sub-container">
                    <div className="slider-wrapper">
                        <div className="controller">
                            <div>
                                <h3>Trending  video </h3>
                            </div>

                            <div id="controls">
                                <button className="previous">
                                    <i class="fa-solid fa-angle-left"></i>
                                </button>

                                <button className="next">
                                    <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                        </div>

                        <br />

                        <div className="my-slider">
                            <Carousel itemPadding={[1, 5]} itemsToShow={3}>                            
                                
                                <Card 
                                    imgSrc1="https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg"
                                    imgSrc2="https://media.nftb.io/media/thumbnails/nfts/xDFRlUmRCkXBnUfNWvPeEW1650009038605.png"
                                    imgSrc3="https://media.nftb.io/media/thumbnails/nfts/vuNurGDXWxTg2LNjSL1FsO1652547768231.jpg"
                                    imgSrc4="https://media.nftb.io/media/thumbnails/nfts/mhGEVmLB6l2C98mA5mlYmd1650011441460.png"
                                />
                            
                                <Card 
                                    imgSrc1="https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg"
                                    imgSrc2="https://media.nftb.io/media/thumbnails/nfts/xDFRlUmRCkXBnUfNWvPeEW1650009038605.png"
                                    imgSrc3="https://media.nftb.io/media/thumbnails/nfts/vuNurGDXWxTg2LNjSL1FsO1652547768231.jpg"
                                    imgSrc4="https://media.nftb.io/media/thumbnails/nfts/mhGEVmLB6l2C98mA5mlYmd1650011441460.png"
                                /> 
                            
                                <Card 
                                    imgSrc1="https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg"
                                    imgSrc2="https://media.nftb.io/media/thumbnails/nfts/xDFRlUmRCkXBnUfNWvPeEW1650009038605.png"
                                    imgSrc3="https://media.nftb.io/media/thumbnails/nfts/vuNurGDXWxTg2LNjSL1FsO1652547768231.jpg"
                                    imgSrc4="https://media.nftb.io/media/thumbnails/nfts/mhGEVmLB6l2C98mA5mlYmd1650011441460.png"
                                /> 
                            
                                <Card 
                                    imgSrc1="https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg"
                                    imgSrc2="https://media.nftb.io/media/thumbnails/nfts/xDFRlUmRCkXBnUfNWvPeEW1650009038605.png"
                                    imgSrc3="https://media.nftb.io/media/thumbnails/nfts/vuNurGDXWxTg2LNjSL1FsO1652547768231.jpg"
                                    imgSrc4="https://media.nftb.io/media/thumbnails/nfts/mhGEVmLB6l2C98mA5mlYmd1650011441460.png"
                                /> 
                            
                                <Card 
                                    imgSrc1="https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg"
                                    imgSrc2="https://media.nftb.io/media/thumbnails/nfts/xDFRlUmRCkXBnUfNWvPeEW1650009038605.png"
                                    imgSrc3="https://media.nftb.io/media/thumbnails/nfts/vuNurGDXWxTg2LNjSL1FsO1652547768231.jpg"
                                    imgSrc4="https://media.nftb.io/media/thumbnails/nfts/mhGEVmLB6l2C98mA5mlYmd1650011441460.png"
                                /> 
                            
                                <Card 
                                    imgSrc1="https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg"
                                    imgSrc2="https://media.nftb.io/media/thumbnails/nfts/xDFRlUmRCkXBnUfNWvPeEW1650009038605.png"
                                    imgSrc3="https://media.nftb.io/media/thumbnails/nfts/vuNurGDXWxTg2LNjSL1FsO1652547768231.jpg"
                                    imgSrc4="https://media.nftb.io/media/thumbnails/nfts/mhGEVmLB6l2C98mA5mlYmd1650011441460.png"
                                /> 
                            
                                <Card 
                                    imgSrc1="https://media.nftb.io/media/thumbnails/nfts/cF2Ks15gjiHGqXZQQOytcX1649855615685.jpg"
                                    imgSrc2="https://media.nftb.io/media/thumbnails/nfts/xDFRlUmRCkXBnUfNWvPeEW1650009038605.png"
                                    imgSrc3="https://media.nftb.io/media/thumbnails/nfts/vuNurGDXWxTg2LNjSL1FsO1652547768231.jpg"
                                    imgSrc4="https://media.nftb.io/media/thumbnails/nfts/mhGEVmLB6l2C98mA5mlYmd1650011441460.png"
                                /> 
                        </Carousel>

                        </div>

                    {/* <div className="my-slider">
                            <div className="slide-img first">
                                <div className="img-1"></div>
                                <div className="img-2"></div> 
                                <div className="img-3"></div>
                                <div className="img-4"></div>
                            </div>
            
                            <div className="slide-img second">
                                <div className="img-1"></div>
                                <div className="img-2"></div>
                                <div className="img-3"></div>
                                <div className="img-4"></div>
                            </div>
                            
                            <div className="slide-img third">
                                <div className="img-1"></div>
                                <div className="img-2"></div>
                                <div className="img-3"></div>
                                <div className="img-4"></div>
                            </div>

                            <div className="slide-img fourth">
                                <div className="img-1"></div>
                                <div className="img-2"></div>
                                <div className="img-3"></div>
                                <div className="img-4"></div>
                            </div>

                            <div className="slide-img fifth">
                                <div className="img-1"></div>
                                <div className="img-2"></div>
                                <div className="img-3"></div>
                                <div className="img-4"></div>
                            </div>

                            <div className="slide-img sixth">
                                <div className="img-1"></div>
                                <div className="img-2"></div>
                                <div className="img-3"></div>
                                <div className="img-4"></div>
                            </div>

                        </div> */}

                    </div> 
                </div>
            </div>
        </section>
    
)}
 
export default Carousel1;