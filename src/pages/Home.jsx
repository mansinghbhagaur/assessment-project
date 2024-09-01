import React, { useState } from "react";
import { Herosection } from "../components/Herosection";
import Servicespages from "./Servicespages";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

import Traderoom1 from "../assets/image/Traderoom-jpg-01.jpg";

import Traderoom2 from "../assets/image/Traderoom-jpg-02.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Icon008 from "../assets/image/Icon-008.png";
import Icon0121 from "../assets/image/Icon-012-1.png";
import Icon3 from "../assets/image/Icon-010.png";
import Icon4 from "../assets/image/Icon-009.png";
import Icon5 from "../assets/image/Icon-011-1.png";
import Icon6 from "../assets/image/Icon-013.png";
import ProductSection from "../components/ProductSection";
import TestimonialSlider from "../components/TestimonialSlider";
import ArticalPage from "../components/ArticalPage";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";

export default function Home() {
  const cardData = [
    {
      img: Icon008,
      title: "Stocks Trading",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      img: Icon0121,
      title: "Forexs Trading",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      img: Icon3,
      title: "Cryptos Trading",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      img: Icon4,
      title: "Stocks Indices",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      img: Icon5,
      title: "Commodities Trading",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      img: Icon6,
      title: "Bonds Trading",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
  ];

  
  return (
    <>
      <Herosection />
      {/* community section start */}
      <Container maxWidth="xl">
        <Grid2 container spacing={2} p={8} className="padding">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <div className="tradeMain">
                <img src={Traderoom2} alt="traderoom1" width={"70%"} />
              <img
                src={Traderoom1}
                alt="traderoom1"
                width={"55%"}
                className="inner-image"
              />
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" mt={10} className="textSize">
              A Trading Community Dedicated To Your Success!
            </Typography>
            <Typography variant="h6" mt={2} mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#2FFFB9",
                color: "black",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Explore Membership
            </Button>
          </Grid2>
        </Grid2>
      </Container>

      {/*  Our trading learning provider section*/}
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", color: "#0E3B43", fontWeight: 600 }}
        >
          Our trading learning provider
        </Typography>

        <Container maxWidth="xl">
          <Grid2 container spacing={4} p={4} className="cardpadding">
            {cardData.map((item, i) => (
              <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                <Paper elevation={4}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={3}
                  >
                    <Typography variant="h5">{item.title}</Typography>
                    <ArrowForwardIcon />
                  </Box>
                  <Box display="flex" justifyContent="space-between" p={3}>
                    <Typography variant="body1">{item.text}</Typography>
                    <img src={item.img} alt="iconimg" width={"27%"} />
                  </Box>
                </Paper>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Container>
      {/* card section end */}

      {/* Benefits of joining our course section start */}
      <Container maxWidth="xl" sx={{ backgroundColor: "#ECFAF1" }}>
        <Typography
          variant="h4"
          pt={8}
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"38px"}
        >
          Benefits of joining our course
        </Typography>
        <Typography variant="body1" mt={2} textAlign={"center"} pb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec <br />
          ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        <Container maxWidth="lg">
          <Grid2 container spacing={3}>
            <Grid2
              size={{ xs: 6, md: 3 }}
              display={"flex"}
              justifyContent={"flex-start"}
              mt={5}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: "#0E3B43",
                    color: "#2FFFB9",
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <AssignmentIcon />
                </Avatar>
              </Stack>
              <Box ml={3}>
                <Typography variant="h4" fontWeight={"bold"}>
                  12<sup>+</sup>
                </Typography>
                <Typography variant="body1" fontWeight={"bold"}>
                  New Lessons Weekly
                </Typography>
              </Box>
            </Grid2>
            <Grid2
              size={{ xs: 6, md: 3 }}
              display={"flex"}
              justifyContent={"flex-start"}
              mt={5}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: "#0E3B43",
                    color: "#2FFFB9",
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <AssignmentIcon />
                </Avatar>
              </Stack>
              <Box ml={3}>
                <Typography variant="h4" fontWeight={"bold"}>
                  50M<sup>+</sup>
                </Typography>
                <Typography variant="body1" fontWeight={"bold"}>
                  Views Videos
                </Typography>
              </Box>
            </Grid2>
            <Grid2
              size={{ xs: 6, md: 3 }}
              display={"flex"}
              justifyContent={"flex-start"}
              mt={5}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: "#0E3B43",
                    color: "#2FFFB9",
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <AssignmentIcon />
                </Avatar>
              </Stack>
              <Box ml={3}>
                <Typography variant="h4" fontWeight={"bold"}>
                  535K<sup>+</sup>
                </Typography>
                <Typography variant="body1" fontWeight={"bold"}>
                  Total subscribers
                </Typography>
              </Box>
            </Grid2>

            <Grid2
              size={{ xs: 6, md: 3 }}
              display={"flex"}
              justifyContent={"flex-start"}
              mt={5}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: "#0E3B43",
                    color: "#2FFFB9",
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <AssignmentIcon />
                </Avatar>
              </Stack>
              <Box ml={3}>
                <Typography variant="h4" fontWeight={"bold"}>
                  2K<sup>+</sup>
                </Typography>
                <Typography variant="body1" fontWeight={"bold"}>
                  Lessons video
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Container>

        {/* our product start section */}
        <ProductSection />
        {/* Grid Container product start */}

      </Container>

      <TestimonialSlider />

        {/* Our Artical page */}
        <ArticalPage />

        {/* FaqSection start code */}
        <FaqSection />

        
    </>
  );
}
