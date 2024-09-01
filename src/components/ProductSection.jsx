import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid2,
    Typography,
  } from "@mui/material";

export default function ProductSection() {
  return (
    <Container maxWidth="xl">
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
            <Typography variant="h3" color="white">
              Our best trading <span style={{ color: "#2FFFB9" }}>courses</span>
            </Typography>
            <Container maxWidth="lg">
              <Grid2 container spacing={3} mt={8}>
                <Grid2 size={{ xs: 12, md: 6, lg:3 }}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      pb: 8,
                      backgroundColor: "#0e4149",
                      color: "#FFFFFF",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 200, width: "100%" }}
                      image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="center"
                        fontWeight="bold"
                        pt={4}
                      >
                        Technical Analysis
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#FFFFFF80" }}
                        textAlign="center"
                      >
                        Over 2+ hours of Training Material
                      </Typography>
                    </CardContent>
                    <Divider variant="middle" color="#FFFFFF80" />

                    <CardActions>
                      <Box>
                        <Typography variant="body2">
                          Starting at:
                        </Typography>
                        <Typography
                          variant="h3"
                          pl={2}
                          pt={2}
                          fontWeight="bold"
                          color="#2FFFB9"
                        >
                          <span style={{ fontSize: "24px" }}>$</span> 49
                        </Typography>
                        <Typography
                          variant="body2"
                          pl={2}
                          
                          color="#2FFFB9"
                          textAlign="start"
                        >
                          .99
                        </Typography>
                      </Box>
                      <Button
                        size="medium"
                        variant="contained"
                        style={{
                          margin: "70px 0px 0 25px",
                          backgroundColor: "#C5FF7C",
                          color: "#000",
                        }}
                      >
                        <p>Get Course<br/> Now</p>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 6, lg:3 }}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      pb: 8,
                      backgroundColor: "#0e4149",
                      color: "#FFFFFF",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 200, width: "100%" }}
                      image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="center"
                        fontWeight="bold"
                        pt={4}
                      >
                        Technical Analysis
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#FFFFFF80" }}
                        textAlign="center"
                      >
                        Over 2+ hours of Training Material
                      </Typography>
                    </CardContent>
                    <Divider variant="middle" color="#FFFFFF80" />

                    <CardActions>
                      <Box>
                        <Typography variant="body2">
                          Starting at:
                        </Typography>
                        <Typography
                          variant="h3"
                          pl={2}
                          pt={2}
                          fontWeight="bold"
                          color="#2FFFB9"
                        >
                          <span style={{ fontSize: "24px" }}>$</span> 49
                        </Typography>
                        <Typography
                          variant="body2"
                          pl={2}
                          
                          color="#2FFFB9"
                          textAlign="start"
                        >
                          .99
                        </Typography>
                      </Box>
                      <Button
                        size="medium"
                        variant="contained"
                        style={{
                          margin: "70px 0px 0 25px",
                          backgroundColor: "#C5FF7C",
                          color: "#000",
                        }}
                      >
                        <p>Get Course<br/> Now</p>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 6, lg:3 }}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      pb: 8,
                      backgroundColor: "#0e4149",
                      color: "#FFFFFF",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 200, width: "100%" }}
                      image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="center"
                        fontWeight="bold"
                        pt={4}
                      >
                        Technical Analysis
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#FFFFFF80" }}
                        textAlign="center"
                      >
                        Over 2+ hours of Training Material
                      </Typography>
                    </CardContent>
                    <Divider variant="middle" color="#FFFFFF80" />

                    <CardActions>
                      <Box>
                        <Typography variant="body2">
                          Starting at:
                        </Typography>
                        <Typography
                          variant="h3"
                          pl={2}
                          pt={2}
                          fontWeight="bold"
                          color="#2FFFB9"
                        >
                          <span style={{ fontSize: "24px" }}>$</span> 49
                        </Typography>
                        <Typography
                          variant="body2"
                          pl={2}
                          
                          color="#2FFFB9"
                          textAlign="start"
                        >
                          .99
                        </Typography>
                      </Box>
                      <Button
                        size="medium"
                        variant="contained"
                        style={{
                          margin: "70px 0px 0 25px",
                          backgroundColor: "#C5FF7C",
                          color: "#000",
                        }}
                      >
                        <p>Get Course<br/> Now</p>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 6, lg:3 }}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      pb: 8,
                      backgroundColor: "#0e4149",
                      color: "#FFFFFF",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 200, width: "100%" }}
                      image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="center"
                        fontWeight="bold"
                        pt={4}
                      >
                        Technical Analysis
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#FFFFFF80" }}
                        textAlign="center"
                      >
                        Over 2+ hours of Training Material
                      </Typography>
                    </CardContent>
                    <Divider variant="middle" color="#FFFFFF80" />

                    <CardActions>
                      <Box>
                        <Typography variant="body2">
                          Starting at:
                        </Typography>
                        <Typography
                          variant="h3"
                          pl={2}
                          pt={2}
                          fontWeight="bold"
                          color="#2FFFB9"
                        >
                          <span style={{ fontSize: "24px" }}>$</span> 49
                        </Typography>
                        <Typography
                          variant="body2"
                          pl={2}
                          
                          color="#2FFFB9"
                          textAlign="start"
                        >
                          .99
                        </Typography>
                      </Box>
                      <Button
                        size="medium"
                        variant="contained"
                        style={{
                          margin: "70px 0px 0 25px",
                          backgroundColor: "#C5FF7C",
                          color: "#000",
                        }}
                      >
                        <p>Get Course<br/> Now</p>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid2>
                
              </Grid2>
            </Container>
          </Box>
        </Container>
  )
}
