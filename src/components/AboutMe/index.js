import { Avatar, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'
import profile from '../../images/profile.jpg'

export default function AboutMe(props) {
    
    const classes =useStyles ()


    return (

        <div className={classes.container}>
            <Grid container justify="center" align="center" >
                <Grid item xs={12} md={2}>
                    <Avatar src={profile} alt="Ian Muguna" className={classes.image} />
                </Grid>
                <Grid item xs={12} md={5} className={classes.content}>
                    <Typography className={classes.title}> About Doctor Muguna</Typography>
                    <Typography className={classes.contentText}>
                            My name is Ian Muguna. I work at Meru Hospital. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. 
                    </Typography>
                    <Button variant="contained" color="primary" style={{margin: '15px 0'}}>View Portfolio</Button>
                </Grid>

            </Grid>
        </div>
    )
}