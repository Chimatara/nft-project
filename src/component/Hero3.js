import React from "react";
import "../css/hero3.css";

const Hero3 = () => {
    return ( 
        <div className="hero3-container">
            <div className="hero3">
                <div className="nftb-launch">
                    <h2>NFTB/Launch</h2>
                    <p>+100 lauches</p>
                    {/* below is a button  */}
                    <span>
                        discover more
                    </span>
                </div>

                <div className="soccer-and-warp">
                    <div className="soccer-crypto">
                        <div className="soccer-image-container">
                            <img src="https://nftb.io/static/img/pages/launchpad/ido/warp-2/cover.png" alt="soccer crypto image" />
                        </div>
                        
                        <section className="second-section amendment"> 
                            <div className="ido-date-container">
                                <div className="project-ido">
                                    {/* <img src="https://nftb.io/static/img/icons/project-ido.svg" alt="" /> */}
                                    <span>IDO</span>  
                                </div>

                                <span> November, 08 2022 </span>
                                
                            </div>

                            <div className="warp-warp">
                                Warp
                            </div>

                            <div>
                                <div className="start-container">
                                    ENDS IN
                                </div>

                                {/* below is a time counter */}

                                <p>date and time</p>
                            </div>
                        </section>
                    </div>

                    <div className="warp">
                        <div className="warp-image-container">
                           <img src="https://nftb.io/static/img/pages/launchpad/ido/airtnt/cover.png" alt="image of space" />
                            
                        </div>
                        {/* <img src="https://nftb.io/static/img/pages/launchpad/ido/airtnt/cover.png" alt="image of space" /> */}
                        
                        <section className="second-section">
                            <div className="gift-container">
                                <img src="https://nftb.io/static/img/icons/project-ino.svg" alt="" />
                                <span>November, 18 2022</span>
                            </div>

                            <div className="warp-warp">
                                Warp
                            </div>

                            <div>
                                <div className="start-container">STARTS IN</div>
                                {/* below is a time counter */}
                                <p>date and time</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero3;