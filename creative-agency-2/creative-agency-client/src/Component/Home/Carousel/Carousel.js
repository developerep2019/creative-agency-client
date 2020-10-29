import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousell from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  pauseOnHover: true,
                }
            },
            {
                breakpoint: 1,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  pauseOnHover: true,
                }
            }
          ]
      };

    const style = {
        width: '350px'
    }

    return (
        <section className="container-fluid">
            <Slider {...settings}>
            <div className="text-center">
                <img className="img-fluid p-3" style={style} src={carousell} alt=""/>
            </div>
            <div className="text-center">
                <img className="img-fluid p-3" style={style} src={carousel2} alt=""/>
            </div>
            <div className="text-center">
                <img className="img-fluid p-3" style={style} src={carousel4} alt=""/>
            </div>
            <div className="text-center">
                <img className="img-fluid p-3" style={style} src={carousell} alt=""/>
            </div>
            <div className="text-center">
                <img className="img-fluid p-3" style={style} src={carousel5} alt=""/>
            </div>
            <div className="text-center">
                <img className="img-fluid p-3" style={style} src={carousel4} alt=""/>
            </div>
            </Slider>
        </section>
    );
};

export default Carousel;