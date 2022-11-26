import React from "react";
import Navbar3 from "./Navbar3";
import Product from "./Product";
import "../css/hero2.css";

const Hero2 = () => {
    // img, title, likes, editionNum, creatorName, ownerAddress, price
    return(
        <div className="hero2-container">
            <Navbar3 />
            
            <div className="hero-product-container">
                <Product 
                    videoSrc="https://ipfs.io/ipfs/QmWCjUzJ9AkCjB5Dk2CTspbQ2M8k2UMQ7LEvxQ2jeWkRyY"
                    title="crypto edition(ETH)"
                    likes="4" 
                    editionNum="1"
                    creatorName="superiorSun_Games"
                    ownerAddress="0x6Ecb...d4E8E"
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/nKIsnE7L3SmAzW6T5YJgmK1652120204973.jpg"
                    isCreatorOwner={true}
                    isVerified={true}
                    price="0.2"
                />



                <Product 
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/kCpRedaKfqlaTSMHyHMToQ1650017692832.png"
                    title="Blockchain Heads"
                    likes="1" 
                    isVerified={true}
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/xCcaa2AAyeW8NwHWywR38m1649104529082.jpg"
                    creatorImage="https://media.nftb.io/media/thumbnails/users/avatar/F6aO7JmcXGkIBpeMmZx8GH1652810676052.jpg"
                    ownerImage="https://media.nftb.io/media/thumbnails/users/avatar/xCcaa2AAyeW8NwHWywR38m1649104529082.jpg"                    miniOwnerImage=""
                    ownerAddress="BBCDK"
                    editionNum="1"
                    creatorName="Blockchain_king"
                    price="0.2"
                />
                
                <Product
                    videoSrc="https://nftb.mypinata.cloud/ipfs/Qme9c4a2DT3S795xZFCsV7q77gWJur6nuc63nRnj7vEZLH"
                    creatorImage="https://media.nftb.io/media/thumbnails/users/avatar/F6aO7JmcXGkIBpeMmZx8GH1652810676052.jpg"
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/1bKMnNEnV91XUlR2XpvtJz1649102128923.jpg"
                    title="BNB Shuffle"
                    likes="4" 
                    editionNum="1"
                    creatorName="MssArts"
                    ownerAddress="BBCDK"
                    isVerified={true}
                    price="25"
                />

                <Product 
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/R0Hch1oq0A7rHKxz5IeSh91658676827488.jpg"
                    title="Unique Crypto Avatar"
                    likes="1" 
                    editionNum="1"
                    creatorName="yunus"
                    ownerAddress=""
                    price="0.2"
                />
                
                <Product 
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/zyevR8KE8nDBu0WrJEbSxL1649278527790.png"
                    title="BKong#19"
                    likes="4" 
                    editionNum="1"
                    creatorName="Tipper"
                    ownerAddress="0x6Ecb...d4E8E"
                    price=""
                />
                
                <Product
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/c2hpGszMG18f1GRem4Xvb51667387625777.jpeg"
                    title="K(AI) X Piggy I/I"
                    likes="2" 
                    editionNum="1"
                    creatorName="MssArts"
                    ownerAddress="0xc93b...73dd"
                    price=""
                />
            </div> 

        </div>
    )
}

export default Hero2;