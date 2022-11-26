import React from 'react';
import {Row} from 'react-bootstrap';
import TinySlider from "tiny-slider-react";
import {Link} from 'react-router-dom';

    const Gallery = (props) => {

        const items = props.imagesGallery.map((item, ind) => {
            return ( 
              <div key={ind} className={`tns-lazy-img`}>
                <Link to="/images" >              
                  <img                    
                      src={item.value}
                      alt="myimg"
                      data-src={item.value}
                    />
                </Link>                
              </div> 
            );
        });

        const SETTINGS = {
          "items": 3,
          "controls": true,
          "gutter": 10,
          "autowidth": true,
          "speed": 400,
          "autoplay": true,
          "swipeAngle": false,
          "slideBy": "page",
          "controlsPosition": "bottom",
          "navPosition": "bottom",
          "autoplayPosition": "bottom",
          "mouseDrag": true,
          "responsive": {
            "0": {
              "items": 1
            },
            "768": {
              "items": 2
            },
            "992": {
              "items": 3
            }
          }
        };
        return (
          <Row className="mb-5 justify-content-center">
            <TinySlider settings={SETTINGS}>
              {items}
            </TinySlider>
          </Row>
        );
    }

export default Gallery;