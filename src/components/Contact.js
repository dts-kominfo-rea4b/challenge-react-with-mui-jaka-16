// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Card, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => { 
    // Contact berisi foto, nama, telepon, dan email
    return (
    <div className='todo-list'>
    <Card sx={{ width: "500px"}}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem sx={{background: "aliceblue", borderRadius: "10px"}} >
                <Grid container >
                    <Grid item md="3">
                        <ListItemAvatar>
                            <Avatar src={data.photo}  sx={{ width: 60, height: 60, marginTop: "15px", marginLeft: "15px"}}/>
                        </ListItemAvatar>
                    </Grid>
                    <Grid item md="3">
                        <ListItemText primary={<Typography sx={{fontWeight: "bold" }}>{data.name}</Typography>} />
                        <ListItemText primary={data.phone} />
                        <ListItemText primary={data.email} />
                    </Grid>
                </Grid>
            </ListItem>
        </List>
    </Card>
    </div>
    );
};

export default Contact;
