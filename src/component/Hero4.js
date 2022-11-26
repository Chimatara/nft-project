import React from "react";
import Product from "./Product";
import "../css/hero4.css";


const Hero4 = () => {
    return ( 
        <div className="hero4-container">
            {/*use display flex and wrap css property to display this  */}           
            
            <Product 
                    videoSrc="https://nftb.mypinata.cloud/ipfs/QmVqN5GnCgu59DEwdibVfHVt7tTgAquq1WeBgas4S6Z61E"
                    title="BKong#19"
                    likes="4"
                    editionNum="1" 
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/k8koAfi1AOewMR3at84gx51649101498258.jpg"
                    isVerified="true"
                    creatorName="Tipper"
                    isCreatorOwner={true}
                    ownerAddress="0x6Ecb...d4E8E"
                    price="2"
                />
            
            <Product 
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/zyevR8KE8nDBu0WrJEbSxL1649278527790.png"
                    title="BKong#19"
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/ptEZ6Nt7gJCg2EZNN3pe0w1649087075187.gif"
                    likes="4" 
                    editionNum="1"
                    creatorName="Tipper"
                    ownerAddress="0x6Ecb...d4E8E"
                    price="0.3"
                />

                <Product 
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/R0Hch1oq0A7rHKxz5IeSh91658676827488.jpg"
                    title="Unique Crypto Avatar"
                    likes="1" 
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/0pb0EWMkIQTwgP3qevd4Z31656961538083.jpg"
                    isVerified="true"
                    editionNum="1"
                    creatorName="yunus"
                    ownerAddress=""
                    price="0.2"
                />
                
                <Product
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/c2hpGszMG18f1GRem4Xvb51667387625777.jpeg"
                    title="K(AI) X Piggy I/I"
                    likes="2" 
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/Qzpa5OmHcncvnx8MZmmFjm1656838420421.jpeg"
                    isVerified={true}
                    isCreatorOwner={false}
                    editionNum="1"
                    creatorName="MssArts"
                    ownerAddress="0xc93b...73dd"
                    price=""
                />

                <Product 
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/R0Hch1oq0A7rHKxz5IeSh91658676827488.jpg"
                    title="Unique Crypto Avatar"
                    likes="1" 
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/0pb0EWMkIQTwgP3qevd4Z31656961538083.jpg"
                    editionNum="1"
                    isVerified={true}
                    isCreatorOwner={true}
                    creatorName="yunus"
                    price="0.2"
                />
                
                
                
                <Product
                    imageSrc="https://media.nftb.io/media/thumbnails/nfts/vPVfXvQXcd21TARTBnkcai1667214245892.jpeg"
                    title="K(AI) X Piggy I/I"
                    likes="2" 
                    editionNum="1"
                    miniImage="https://media.nftb.io/media/thumbnails/users/avatar/Qzpa5OmHcncvnx8MZmmFjm1656838420421.jpeg"
                    isVerified={true}
                    creatorName="MssArts"
                    ownerAddress="0xc93b...73dd"
                    price=""
                />
        </div>
     );
}
 
export default Hero4;