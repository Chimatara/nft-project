import React from "react";
import "../css/navbar2.css"

const Navbar2 = () => {
     const handleNavbar= () => {
          const hiddenUl = document.getElementsByClassName("movable-list")[0];
          let cancelbutton = document.getElementsByClassName("nav-toggle-btn")[0];
          let hiddenBnb = document.getElementsByClassName("new-bnb-image")[0];

          if (!hiddenUl.className.includes("visible")) {
               hiddenUl.className += "visible";
               cancelbutton.className = "bad-button";
               // hiddenBnb.style.display = "flex";
              

          } else {
               hiddenUl.className="movable-list ";
               
               cancelbutton = document.getElementsByClassName("bad-button")[0];
               cancelbutton.className = "nav-toggle-btn";
               // hiddenBnb.style.display= "none";
          
          }

     }

    return (
          <nav className="navbar2-container">
               <div className="nftb-image">
                    <a href="#">
                         <img src="https://nftb.io/static/img/svg/logo.svg" alt="nftb-image icon" width="142px"  height="48px"/> 
                    </a>
               </div>
               
               <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder="Searching..." />
               </div>

               <nav className="movable-list ">
                    <div className="new-bnb-image">
                         <img src="https://nftb.io/static/img/networks/bnb.svg" alt="" width="32" height="32" decoding="async" />
                         Bnb Chain
                    </div>

                    <ul className="nftb-options">
                         <li className="transform-opp-container">
                              <a className="test-test" href="#">
                                   <span>NFT</span>
                                   <svg className="transform-opposite" width="9" height="6" viewBox="0 0 9 6" fill="#BCC2C9" xmlns="http://www.w3.org/2000/svg"><path d="M0.472243 0.910841C0.716321 0.666764 1.11205 0.666764 1.35613 0.910841L4.49997 4.05469L7.64382 0.910841C7.88789 0.666764 8.28362 0.666764 8.5277 0.910841C8.77178 1.15492 8.77178 1.55065 8.5277 1.79472L4.94191 5.38051C4.69784 5.62459 4.30211 5.62459 4.05803 5.38051L0.472243 1.79472C0.228165 1.55065 0.228165 1.15492 0.472243 0.910841Z"></path></svg>
                              </a>

                              <div className="drop-down-container">
                                   <ul className="drop-down">
                                        <li>
                                             <a href="#">
                                                  MarketPlace
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#">
                                                  Collections
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#">
                                             Creators 
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </li>
                    
                         <li className="transform-opp-container">
                              <a href="#">
                                   Earn
                                   <svg className="transform-opposite" width="9" height="6" viewBox="0 0 9 6" fill="#BCC2C9" xmlns="http://www.w3.org/2000/svg"><path d="M0.472243 0.910841C0.716321 0.666764 1.11205 0.666764 1.35613 0.910841L4.49997 4.05469L7.64382 0.910841C7.88789 0.666764 8.28362 0.666764 8.5277 0.910841C8.77178 1.15492 8.77178 1.55065 8.5277 1.79472L4.94191 5.38051C4.69784 5.62459 4.30211 5.62459 4.05803 5.38051L0.472243 1.79472C0.228165 1.55065 0.228165 1.15492 0.472243 0.910841Z"></path></svg> 
                              </a>

                              <div className="drop-down-container">
                                   <ul className="drop-down">
                                        <li>
                                             <a href="#">
                                                  Vault
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#">

                                                  Learn more
                                             </a>
                                             <ul>
                                                  <li>
                                                       <a href="#">
                                                            label
                                                       </a>
                                                  </li>
                                             </ul>

                                        </li>
                                        
                                   </ul>
                              </div>
                         </li>
                         
                         <li>
                              <a href="#">Launchpad </a>
                         </li>
                         
                         <li>
                              <a href="#">Gaming </a>                    
                         </li>
                         
                         <li className="transform-opp-container">
                              <a href="#">
                                   Learn
                                   <svg  className="transform-opposite" width="9" height="6" viewBox="0 0 9 6" fill="#BCC2C9" xmlns="http://www.w3.org/2000/svg"><path d="M0.472243 0.910841C0.716321 0.666764 1.11205 0.666764 1.35613 0.910841L4.49997 4.05469L7.64382 0.910841C7.88789 0.666764 8.28362 0.666764 8.5277 0.910841C8.77178 1.15492 8.77178 1.55065 8.5277 1.79472L4.94191 5.38051C4.69784 5.62459 4.30211 5.62459 4.05803 5.38051L0.472243 1.79472C0.228165 1.55065 0.228165 1.15492 0.472243 0.910841Z"></path></svg> 
                              </a>

                              <div className="drop-down-container">
                                   <ul className="drop-down">
                                        <li>
                                             <a className="" href="#">About NFTb</a>
                                             <ul>
                                                  <li><a className="" href="#">NFTb/market</a></li><li><a className="" href="/nftb-earn/">NFTb/earn</a></li>
                                                  <li><a className="" href="#">NFTb/launch</a></li><li><a className="" href="/nftb-gaming/">NFTb/gaming</a></li>
                                             </ul>
                                        </li>
               
                                        <li>
                                             <a className="" href="#">NFTb Members</a></li><li><a className="" href="/labs/">NFTb Labs</a>
                                        </li>
                                        
                                        <li>
                                             <a className="" href="#">DeFi as a Service</a>
                                        </li>
                                        
                                        <li>
                                             <a className="" href="#">Help Center</a></li><li><a className="" href="https://blog.nftb.io/">Blog</a>
                                        </li>
                                        
                                        <li>
                                             <a className="" href="#">Charity</a>
                                        </li>

                                        <li>
                                             <div className="social-media-grid">
                                                  <ul className="social-media-container">
                                                       <li>
                                                            <a href="https://twitter.com/nftbmarket" target="_blank" rel="noreferrer">
                                                                 <svg fill="#6B6B6B" width="45" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M36.5,22.6487778 C35.8928,22.9286056 35.2405,23.1178667 34.5552,23.2026278 C35.2548,22.7672111 35.7916,22.0775111 36.0435,21.2566056 C35.3901,21.6595111 34.6652,21.9521111 33.8941,22.1100222 C33.277,21.4261278 32.397,21 31.4235,21 C29.2389,21 27.6318,23.1178667 28.1257,25.3181722 C25.313,25.1718722 22.8182,23.7715722 21.1484,21.6432556 C20.2618,23.2235278 20.6886,25.2926278 22.1967,26.33995 C21.6412,26.3213722 21.1198,26.1634611 20.6633,25.8998889 C20.6259,27.5289278 21.7501,29.0534667 23.3781,29.3925111 C22.9018,29.5272 22.3793,29.55855 21.8491,29.4528889 C22.2803,30.8508667 23.5299,31.868 25.0116,31.8958667 C23.5882,33.0546556 21.7963,33.5725111 20,33.3530611 C21.4982,34.3504556 23.278,34.9333333 25.1887,34.9333333 C31.4741,34.9333333 35.0249,29.4168944 34.8104,24.4694 C35.4726,23.9736056 36.0457,23.3535722 36.5,22.6487778"></path></svg>
                                                            </a>
                                                       </li>

                                                       <li>
                                                            <a href="https://t.me/nftbmarket" target="_blank" rel="noreferrer">
                                                                 <svg fill="#6B6B6B" width="45" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M25.5749425,30.9883493 L25.2556057,35.6433114 C25.7124907,35.6433114 25.9103669,35.4399069 26.1476575,35.1956547 L28.2897082,33.0740791 L32.7282495,36.4427577 C33.542277,36.9129223 34.1157964,36.6653356 34.3353908,35.6666529 L37.2488371,21.5183692 L37.2496414,21.5175355 C37.5078458,20.2704325 36.8144746,19.7827619 36.0213608,20.0887023 L18.8962168,26.8835797 C17.7274599,27.3537443 17.7451562,28.0289805 18.6975362,28.3349209 L23.0757494,29.746248 L33.2454626,23.1514406 C33.7240658,22.8229923 34.1592327,23.0047226 33.8012858,23.3331708 L25.5749425,30.9883493 Z"></path></svg>
                                                            </a>
                                                       </li>

                                                       <li>
                                                            <a href="https://www.instagram.com/nftb_market/" target="_blank" rel="noreferrer">
                                                                 <svg fill="#6B6B6B" width="45" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M31.6377029,19 C34.5205346,19 36.8793782,21.2867417 36.9955186,24.1416009 L37,24.3622971 L37,31.6377029 C37,34.5205664 34.7132583,36.8793798 31.8583991,36.9955186 L31.6377029,37 L24.3622971,37 C21.4794336,37 19.1206202,34.7132583 19.0044814,31.8583991 L19,31.6377029 L19,24.3622971 C19,21.4794336 21.2867417,19.1206202 24.1416009,19.0044814 L24.3622971,19 L31.6377029,19 Z M28,24 C25.7943965,24 24,25.7944028 24,27.999986 C24,30.2055692 25.7943965,32 28,32 C30.2056035,32 32,30.2055972 32,27.999986 C32,25.7943747 30.2056035,24 28,24 Z M32.999944,20.9003469 C32.3849269,20.9003469 31.8863571,21.3989167 31.8863571,22.0139338 C31.8863571,22.6289509 32.3849269,23.1275208 32.999944,23.1275208 C33.6149611,23.1275208 34.113531,22.6289509 34.113531,22.0139338 C34.113531,21.3989167 33.6149611,20.9003469 32.999944,20.9003469 Z"></path></svg>
                                                            </a>
                                                       </li>

                                                       <li>
                                                            <a href="https://discord.gg/xEPCR6VnT4" target="_blank" rel="noreferrer">
                                                                 <svg fill="#6B6B6B" width="45" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M37.2436085,21.2171053 C37.2436085,21.2171053 35.4922416,19.2803122 31.5156771,19 L31.5156771,19.6115517 C31.5156771,19.6115517 33.6967373,19.4791978 36.3965803,22.2552253 C34.3586606,20.7237217 31.4514404,19.7643332 28.2222217,19.7643332 C24.9930031,19.7643332 22.0857829,20.7235799 20.0478632,22.2552253 C22.7477061,19.4791978 24.9287664,19.6115517 24.9287664,19.6115517 L24.9287664,19 C20.9522019,19.2803122 19.200835,21.2171053 19.200835,21.2171053 C16.1707094,25.2941164 16,34.2131812 16,34.2131812 C18.8542555,37.8061714 22.4405107,37.3476849 22.4405107,37.3476849 L23.7578385,35.3601066 C22.0590289,34.8800576 20.845865,33.7779595 20.1167173,32.9197161 C22.1509702,34.4215712 25.028992,35.3601066 28.2222217,35.3601066 C31.4154515,35.3601066 34.2934733,34.4217131 36.3277262,32.9197161 C35.5985784,33.7778177 34.3854146,34.8800576 32.6866049,35.3601066 L34.0039328,37.3476849 C34.0039328,37.3476849 37.590188,37.8064551 40.4444438,34.2131812 C40.4447151,34.2130393 40.2738699,25.2941164 37.2436085,21.2171053 Z M24.4166382,31.690371 C23.2713779,31.690371 22.3430013,30.6600532 22.3430013,29.3888599 C22.3430013,28.1178084 23.2713779,27.0873488 24.4166382,27.0873488 C25.5618986,27.0873488 26.4902752,28.1178084 26.4902752,29.3888599 C26.4902752,30.6599114 25.5618986,31.690371 24.4166382,31.690371 Z M32.0280768,31.690371 C30.8828165,31.690371 29.9544399,30.6600532 29.9544399,29.3888599 C29.9544399,28.1178084 30.8828165,27.0873488 32.0280768,27.0873488 C33.1733372,27.0873488 34.1017138,28.1178084 34.1017138,29.3888599 C34.1017138,30.6599114 33.173473,31.690371 32.0280768,31.690371 Z"></path></svg>
                                                            </a>
                                                       </li>

                                                  </ul>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                         </li>
                    </ul>
               </nav>

               <div className="bnb-chain-info">
                    
                    <div className="main-bnb-image">
                         <img  src="https://nftb.io/static/img/networks/bnb.svg" alt="bnb chain icon" />
                         <div className="bnb-chain-text">
                              BNB Chain
                         </div>
                    </div>
                   

                    <div>
                         <button className="bnb-info-button">
                              Connect Wallet
                         </button>
                    </div>

                    <div className="hamburger-container">
                         <div>
                              <img src="https://nftb.io/static/img/icons/search.svg" alt="" />
                         </div>

                         <button className="nav-toggle-btn" onClick={handleNavbar}>
                              <span></span>

                         </button>

                    </div>
               </div>

               


          </nav>                          
    )
}

export default Navbar2;