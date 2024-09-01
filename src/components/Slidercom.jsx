import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography } from "@mui/material";
import preview2 from '../assets/image/logo-preview-2.png';
import preview3 from '../assets/image/logo-preview-3.png';
import preview4 from '../assets/image/logo-preview-4.png';

export default function Slidercom() {
    var settings = {
        // dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        ltr: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    autoplay: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                }
            }
        ]
    };
    return (
        <Container maxWidth="lg">
            <Typography variant="h6" sx={{ textAlign: 'center' }} mt={10} mb={10}>Collaborated with over 800+ trusted worldwide partners</Typography>
            <div className="slider-container slides">
                <Slider {...settings}>
                    <div>
                        <img src={preview2} alt="previewlogoimg" width={'100%'} />
                    </div>
                    <div>
                        <img src={preview3} alt="previewlogoimg" width={'100%'} />

                    </div>
                    <div>
                        <img src={preview4} alt="previewlogoimg" width={'100%'} />

                    </div>
                    <div>
                        <img src={preview2} alt="previewlogoimg" width={'100%'} />
                    </div>
                    <div>
                        <img src={preview3} alt="previewlogoimg" width={'100%'} />
                    </div>
                    
                </Slider>
            </div>
        </Container>
    );
}