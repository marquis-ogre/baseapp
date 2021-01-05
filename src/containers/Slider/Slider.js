import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
		  dots: true,
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  speed: 2000,
		  autoplaySpeed: 3000,
		  cssEase: "linear",
		  nextArrow: (
			  <div>
				<div className="next-slick-arrow"> > </div>
			  </div>
			),
		  prevArrow: (
			  <div>
				<div className="prev-slick-arrow">  </div>
			  </div>
			)
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/1.png" alt="image1"/>
                    </div>                    
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/2.png" alt="image2" />
                    </div>                    
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/3.png" alt="image3" />
                    </div>                    
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/4.png" alt="image4" />
                    </div>
               </div>
            </div>
			
			<div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/5.png" alt="image5" />
                    </div>
                 </div>
            </div>
			
			
			<div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/6.png"  alt="image6" />
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider

//... is called spread operator
