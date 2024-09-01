import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import preview2 from "../assets/image/logo-preview-2.png";
import preview3 from "../assets/image/logo-preview-3.png";
import preview4 from "../assets/image/logo-preview-4.png";

export default function TestimonialSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,

    autoplaySpeed: 2000,
    ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          // dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#0E3B43" }}>
      <Box
        sx={{
          backgroundColor: "#0E3B43",
          borderRadius: "20px 20px 20px 20px",
          textAlign: "center",
        }}
        mt={10}
        pb={10}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ mt: 12, mb: 4, bgcolor: "#10505C" }}
        >
          OUR PRODUCTS
        </Button>
        <Typography variant="h3" color="white" mb={8}>
          Our best trading <span style={{ color: "#2FFFB9" }}>courses</span>
        </Typography>

        <div className="slider-container slides">
          <Slider {...settings}>
            <div>
              <div
                style={{
                  backgroundColor: "rgb(43 76 77)",
                  padding: "48px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "start", pb: 3 }}>
                  Traderoom’s stock trading strategies are straightforward and
                  effective. I’m now making informed trades with confidence
                </Typography>
                <Box textAlign={"start"} pb={2}>
                  <Rating name="read-only" value={5} readOnly />
                </Box>
                <Box display={'flex'} justifyContent={'flex-start'}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: "80px", height: "80px", }}
                  />
                  <div style={{margin: "20px"}}>
                    <Typography variant="h6" fontWeight={'bold'}>Emily Roberts</Typography>
                    <Typography variant="body1" sx={{color: '#C5FF7C'}}>Crypto Enthusiast</Typography>
                  </div>
                </Box>
              </div>
            </div>
            

            <div>
              <div
                style={{
                  backgroundColor: "rgb(43 76 77)",
                  padding: "48px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "start", pb: 3 }}>
                  Traderoom’s stock trading strategies are straightforward and
                  effective. I’m now making informed trades with confidence
                </Typography>
                <Box textAlign={"start"} pb={2}>
                  <Rating name="read-only" value={5} readOnly />
                </Box>
                <Box display={'flex'} justifyContent={'flex-start'}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: "80px", height: "80px", }}
                  />
                  <div style={{margin: "20px"}}>
                    <Typography variant="h6" fontWeight={'bold'}>Emily Roberts</Typography>
                    <Typography variant="body1" sx={{color: '#C5FF7C'}}>Crypto Enthusiast</Typography>
                  </div>
                </Box>
              </div>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: "rgb(43 76 77)",
                  padding: "48px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "start", pb: 3 }}>
                  Traderoom’s stock trading strategies are straightforward and
                  effective. I’m now making informed trades with confidence
                </Typography>
                <Box textAlign={"start"} pb={2}>
                  <Rating name="read-only" value={5} readOnly />
                </Box>
                <Box display={'flex'} justifyContent={'flex-start'}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: "80px", height: "80px", }}
                  />
                  <div style={{margin: "20px"}}>
                    <Typography variant="h6" fontWeight={'bold'}>Emily Roberts</Typography>
                    <Typography variant="body1" sx={{color: '#C5FF7C'}}>Crypto Enthusiast</Typography>
                  </div>
                </Box>
              </div>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: "rgb(43 76 77)",
                  padding: "48px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "start", pb: 3 }}>
                  Traderoom’s stock trading strategies are straightforward and
                  effective. I’m now making informed trades with confidence
                </Typography>
                <Box textAlign={"start"} pb={2}>
                  <Rating name="read-only" value={5} readOnly />
                </Box>
                <Box display={'flex'} justifyContent={'flex-start'}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: "80px", height: "80px", }}
                  />
                  <div style={{margin: "20px"}}>
                    <Typography variant="h6" fontWeight={'bold'}>Emily Roberts</Typography>
                    <Typography variant="body1" sx={{color: '#C5FF7C'}}>Crypto Enthusiast</Typography>
                  </div>
                </Box>
              </div>
            </div>
          </Slider>
        </div>
      </Box>
    </Container>
  );
}
