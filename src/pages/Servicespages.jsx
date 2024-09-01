import React from 'react'
import Slidercom from '../components/Slidercom'
import { Box, Button, Container, Grid2, Paper, Typography } from '@mui/material'
import Icon004 from '../assets/image/Icon-004.png';
import Icon005 from '../assets/image/Icon-005.png';
import Icon003 from '../assets/image/Icon-003.png';

export default function Servicespages() {
    return (
        <Container maxWidth="xl">
            <Slidercom />
            <Box sx={{ backgroundColor: "#0E3B43", borderRadius: '20px 20px 20px 20px', textAlign: 'center' }} mt={10}>
                <Button variant='contained' size='small' sx={{ mt: 12, mb: 4, bgcolor: "#10505C" }}>OUR SERVICES</Button>
                <Typography variant='h3' color='white'>Learn to trade with</Typography>
                <Typography variant='h3' sx={{ color: "#2FFFB9" }}>technical analysis</Typography>
                <Container maxWidth='lg'>
                    <Grid2 container spacing={4} mt={8}>
                        <Grid2 size={{ xs: 12, md: 4, }}>
                            <Paper elevation={3}  sx={{backgroundColor: '#10505C', borderRadius: "10px 10px 10px 10px", mb:5}}>
                                <Typography variant='h6' color='white' mb={5} pt={5}>Beginner</Typography>
                                <img src={Icon004} alt="Icon004" width={"30%"} height={"30%"} />
                                <Typography variant='h4' sx={{fontSize: '28px'}} color='white' mb={2} pt={5}>The best place to learn to trade. Period.</Typography>
                                <Typography variant='h6' sx={{color: '#FFFFFF80', marginBottom: '25px'}}>Lorem ipsum dolor sit amet</Typography>
                                <Button sx={{pb: 4, color: "#2FFFB9"}}>View Course</Button>
                            </Paper>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4, }}>
                            <Paper elevation={3}  sx={{backgroundColor: '#10505C', borderRadius: "10px 10px 10px 10px", mb:5}}>
                                <Typography variant='h6' color='white' mb={5} pt={5}>Intermediate</Typography>
                                <img src={Icon003} alt="Icon003" width={"30%"} height={"30%"} />
                                <Typography variant='h4' sx={{fontSize: '28px'}} color='white' mb={2} pt={5}>The best place to learn to trade. Period.</Typography>
                                <Typography variant='h6' sx={{color: '#FFFFFF80', marginBottom: '25px'}}>Lorem ipsum dolor sit amet</Typography>
                                <Button sx={{pb: 4, color: "#2FFFB9"}}>Join Membership</Button>
                            </Paper>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4, }}>
                            <Paper elevation={3}  sx={{backgroundColor: '#10505C', borderRadius: "10px 10px 10px 10px", mb:5}}>
                                <Typography variant='h6' color='white' mb={5} pt={5}>Advanced</Typography>
                                <img src={Icon005} alt="Icon005" width={"30%"} height={"30%"} />
                                <Typography variant='h4' sx={{fontSize: '28px'}} color='white' mb={2} pt={5}>Collaborate with other professional traders.</Typography>
                                <Typography variant='h6' sx={{color: '#FFFFFF80', marginBottom: '25px'}}>Lorem ipsum dolor sit amet</Typography>
                                <Button sx={{pb: 4, color: "#2FFFB9"}}>Join Membership</Button>
                            </Paper>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

        </Container>
    )
}
