import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function FaqSection() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          textAlign: "center",
        }}
        mt={5}
        pb={10}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ mb: 4, bgcolor: "#b7fee6", color: "#000" }}
        >
          OUR PRODUCTS ?
        </Button>
        <Typography variant="h3" fontWeight={"bold"}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" pt={2} mb={5} color="#5D5D5D">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,
          <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        <Container maxWidth="md">
            {/* <Paper elevation={4}> */}
        <Accordion component={Paper} elevation={4}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{fontWeight: "bolder", fontSize: "20px", color: "#5D5D5D", p: 1}}
          >
            Will I learn how to pick winning stocks?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{fontWeight: "bolder", fontSize: "20px", color: "#5D5D5D", p: 1}}
          >
            What is a trading class, and who is it for?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{fontWeight: "bolder", fontSize: "20px", color: "#5D5D5D", p: 1}}
          >
            What will I learn in a trading class?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{fontWeight: "bolder", fontSize: "20px", color: "#5D5D5D", p: 1}}
          >
            How do I securely store my cryptocurrencies?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{fontWeight: "bolder", fontSize: "20px", color: "#5D5D5D", p: 1}}
          >
            Will I learn how to pick winning stocks?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      {/* </Paper> */}
      
      <Button variant="contained" fullWidth sx={{mt: 4, background: "#0e3b43"}} size="large" >Explore All FAQ</Button>
      </Container>
      </Box>
      
    </Container>
  );
}
