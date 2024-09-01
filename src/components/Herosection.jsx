import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import img from '../assets/image/Heros-04.png';
import { Avatar, AvatarGroup, Button, Container, Typography } from '@mui/material';
import Servicespages from '../pages/Servicespages';
import Navbar from './Navbar';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export const Herosection = () => {
    return (
        <>
            <Box className="SliderBgColor">
                
            
                <Container maxWidth="xl" sx={{ flexGrow: 1, background: "#0e515d", borderBottomLeftRadius: "30px", borderBottomRightRadius: '30px' }}>
                    <Grid container spacing={2} pl={7} className="container">
                        <Grid size={{ xs: 12, md: 6, }}>
                            {/* <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  height: "500px" }}> */}
                            <Box className="container_box">
                                <Typography variant="h2" sx={{ fontWeight: 800 }} component="h4" color='white'>
                                    Your path to trading Mastery<span style={{ color: '#2FFFB9' }}> starts here</span>
                                </Typography>
                            </Box>
                            <Button sx={{ backgroundColor: '#C5FF7C', color: 'black', fontSize: '12px', marginBottom: '25px', marginTop: '80px', marginLeft: "35px" }}><Typography component='p'>Explore Membership</Typography> </Button>
                            {/* <Container maxWidth={'xxl'}> */}
                            <Grid container spacing={5} mb={5} mt={2}>
                                <Grid size={{ xs: 12, md: 6, }}>
                                    <AvatarGroup max={5} sx={{ marginLeft: "35px" }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                    </AvatarGroup>
                                </Grid>

                                <Grid size={{ xs: 12, md: 6, }}>
                                    <Typography variant='p' color='white'>15,000 Members Joined: Rated<br /> Excellent at 9.1/10 from 200 Reviews</Typography>

                                </Grid>
                            </Grid>
                            {/* </Container> */}

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <div className='img1'>
                            <div className='img2'>

                            </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <Servicespages />
            </Box>
        </>
    )

}