import {
  Box,
  Button,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../assets/image/Logo-01-1.png";
import { Link, NavLink } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <>
      <Container maxWidth="xl" sx={{ background: "#0E3B43", borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}>
        <Box textAlign="center" pt={8} pb={8}>
          <img src={logo} alt="logo" width="150px" />
          <Typography variant="body1" pt={2} pb={2} color="#FFFFFF80">
            Subscribe to our newsletter and we will keep you informed about
            <br />
            upcoming webinars, news, events and updates to our products.
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter Your Email"
              sx={{
                background: "white",
                borderRadius: "8px 0 0 8px",
                height: "41px",
              }}
            />
            <Button variant="contained" size="large" sx={{background:"#FFFFFF80"}}>
              Subscribe
            </Button>
          </Box>
        </Box>

        <Grid2 container spacing={2} justifyContent={'space-evenly'}>
          <Grid2 size={{ xs: 6, md: 4, lg: 2 }} sx={{ color: "white" }}>
            <Typography variant="h6" pb={2} fontWeight={'bold'}>Home</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="Membership" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </ListItem>
            </List>
        
          </Grid2>
          <Grid2 size={{ xs: 6, md: 4, lg: 2 }} sx={{ color: "white" }}>
            <Typography variant="h6" pb={2} fontWeight={'bold'}>Services</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="HomeTrading" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="The Swing Report" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="Indicators" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="TradrPro™ Alerts" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 4, lg: 2 }} sx={{ color: "white" }}>
            <Typography variant="h6" pb={2} fontWeight={'bold'}>Products</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="Articles" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="Educational&nbsp;Videos" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                  <ListItemText primary="E-Books&nbsp;&&nbsp; Guides" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                  <ListItemText primary="Trading&nbsp;Tools" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 4, lg: 2 }} sx={{ color: "white" }}>
            <Typography variant="h6" pb={2} fontWeight={'bold'}>Resources</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton to="#" component={Link}>
                  <ListItemText primary="traderoom&nbsp;Blog" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                  <ListItemText primary="Success&nbsp;Stories" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                  <ListItemText primary="Terms&nbsp;of&nbsp;Service" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                  <ListItemText primary="Privacy&nbsp;Policy" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }} sx={{ color: "white" }}>
            <Typography variant="h6" pb={2} fontWeight={'bold'} className="textcentercontact" >Contact</Typography>
            <List sx={{display: { xs: 'none', md: 'block',  },}}>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                <FacebookOutlinedIcon/>
                  <ListItemText primary="Facebook"  sx={{ml: 2}}  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                <XIcon />
                  <ListItemText primary="Twitter" sx={{ml: 2}}/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                    <SubscriptionsOutlinedIcon />
                  <ListItemText primary="Youtube" sx={{ml: 2}}/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                    <InstagramIcon />
                  <ListItemText primary="Instagram" sx={{ml: 2}}/>
                </ListItemButton>
              </ListItem>
            </List>

            <List sx={{display: { xs: 'flex', md: 'none',  }, justifyContent: 'space-around', }}>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                <FacebookOutlinedIcon/>
                  
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                <XIcon />
                  
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                    <SubscriptionsOutlinedIcon />
                  
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton to="#" component={NavLink}>
                    <InstagramIcon />
                  
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
        </Grid2>
        
        <Grid2 container spacing={2} pb={2} pt={2} color='white'>
            <Grid2 size={{ xs: 12, md: 6 }} >
                <Typography variant="body2"  className="textcopyalign">Disclaimer | Privacy Service | Corporation</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" style={{textAlign: "right"}} className="textcopyalign">Copyright © 2024 Traderoom | Powered by Onecontributor</Typography>
            </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
