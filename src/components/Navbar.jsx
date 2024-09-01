import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import DrawerNavbar from "./DrawerNavbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/image/logo-01-1.png";



function Navbar() {


  return (
    <AppBar position="static" sx={{ backgroundColor: "#0e515d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <img src={Logo} alt="logo" width={"150"} />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} alt="logo" width={"100"} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <List style={{ display: "flex", justifyContent: "flex-end" }}>
              <ListItem disablePadding>
                <ListItemButton to="/" component={NavLink}>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/about" component={NavLink}>
                  <ListItemText primary="Membership" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/about" component={NavLink}>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/about" component={NavLink}>
                  <ListItemText primary="Services" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/about" component={NavLink}>
                  <ListItemText primary="Page" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/about" component={NavLink}>
                  <ListItemText primary="Blog" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/about" component={NavLink}>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "block" },
                mr: 1,
                backgroundColor: "#2FFFB9",
              }}
            >
              Contact US
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <DrawerNavbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
