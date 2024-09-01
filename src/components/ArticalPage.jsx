import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";

export default function ArticalPage() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          p={8}
          //   pb={10}
          className="paddingArtical"
        >
          <Typography variant="h3" fontWeight={"bold"} mb={8}>
            Our Latest Articles
          </Typography>
        

        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-06.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    How to Use TradingView
                  </Typography>
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      oneprobl4ckMild
                    </Typography>
                    <Typography variant="body2" component="li" ml={2}>
                      August 13, 2024
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-06.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    How to Use TradingView
                  </Typography>
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      oneprobl4ckMild
                    </Typography>
                    <Typography variant="body2" component="li" ml={2}>
                      August 13, 2024
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-06.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"bold"}
                  >
                    How to Use TradingView
                  </Typography>
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      oneprobl4ckMild
                    </Typography>
                    <Typography variant="body2" component="li" ml={2}>
                      August 13, 2024
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Grid2>
        </Box>
      </Container>
    </>
  );
}
