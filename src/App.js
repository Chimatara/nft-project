// import React from "react-dom";
// import Hero from "./component/Hero.js";
// import data from "./data";
// import Navbar from "./component/Navbar.js";

// export default function App() {
//   const HeroData = data.map( item => {
//     return (

//           <Hero
//           key= {item.id}
//           {...item}/>
//     )
//   })
//   return (
//     <div>
//       < Navbar />
//        {HeroData}
//     </div>
//   )
// }
import React from "react";
import Navbar1 from "./component/Navbar1";
import Navbar2 from "./component/Navbar2";
import Hero from "./component/Hero";
import Hero2 from "./component/Hero2";
import Hero3 from "./component/Hero3";
import Hero4 from "./component/Hero4";
import Carousel2 from "./component/Carousel2";
import ImageGrid from "./component/ImageGrid";
import Jumbotron from "./component/Jumbotron";
import Footer  from "./component/Footer";
import "./style.css";
import TopTraders from "./component/TopTraders";


export default function App() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Carousel2 />
      <TopTraders />
      <ImageGrid />
      <Hero4 />
      <Jumbotron />
      <Footer/>
    </div>
  );
}
