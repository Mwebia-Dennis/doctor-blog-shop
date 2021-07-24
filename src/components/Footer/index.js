import { Grid, List, ListItem,ListItemText, ListItemIcon, Typography, Link, Avatar } from "@material-ui/core";
import { LocationCity, Mail, Phone } from "@material-ui/icons";
import React,{ Fragment } from "react";
import { useStyles } from "./style";
import {  appBarItems } from '../../utils/constants'
import logo from '../../images/logo.jpg'

export default function Footer (props) {

    const classes = useStyles()
    const consultationTime = [
        {
            day: 'MONDAY',
            time: '08 AM - 12 PM'
        },
        {
            day: 'TUESDAY',
            time: '08 AM - 4 PM'
        },
        {
            day: 'WEDNESDAY',
            time: '12 AM - 3 PM'
        },
        {
            day: 'THURSDAY',
            time: 'UNAVAILABLE'
        },
        {
            day: 'FRIDAY',
            time: '08 AM - 12 PM'
        },
        {
            day: 'SATURDAY & SUNDAY',
            time: 'CLOSED'
        },
    ]
    
    return (
        <div className={classes.container}>

            <Grid container>

                <Grid item xs={12} md={4} style={{padding: '10px 20px'}}>
                    <Typography variant="h6" className={classes.title}>
                        Contacts
                    </Typography>

                    <List >
                        <ListItem>
                            <ListItemIcon>
                                <Mail />
                            </ListItemIcon>
                            <ListItemText  
                                primary={<Link href="mailto:ianmuguna@gmail.com" >ianmuguna@gmail.com</Link>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationCity />
                            </ListItemIcon>
                            <ListItemText  primary="234-00600 20th floor Mutindwa House Meru, Kenya"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Phone />
                            </ListItemIcon>
                            <ListItemText  primary={<Link href="tel:+254712345678" className={classes.phone}>+254712345678</Link>}/>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={12} md={4}>
                    <div className={classes.appointmentComponent}>
                    <Typography variant="h6" className={classes.title}>
                        Doctor's Schedule
                    </Typography>
                        <Grid container className={classes.appointmentDatesContainer}>


                            {
                                consultationTime.map((item, index)=>(

                                    <Fragment key={index}>
                                        <Grid item xs={6}>
                                            <Typography className={classes.appointmentDates}>{item.day}</Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography className={classes.appointmentTime}>{item.time}</Typography>
                                        </Grid>

                                    </Fragment>
                                ))
                            }
                        </Grid>
                        <Typography className={classes.appointmentComponentLink}>
                            <Link href="#" className={classes.links}>Book Appointment</Link>
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12} md={4} style={{padding: '10px 20px'}}>
                    <Typography variant="h6" className={classes.title}>Useful Links</Typography>

                    {
                        appBarItems.map((item, index)=>(
                            
                            <Typography  key={index} className={classes.footerNav}><Link href="/" className={classes.links}>{item.name}</Link></Typography>

                        ))
                    }
                </Grid>


                <Grid item xs={12}>

                    <div className={classes.bottomFooter}>
                        <Grid container >
                            <Grid item xs={12} md={6}>
                                <Typography>Copyright 2020 Ian Muguna</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                
                                <Avatar src={logo} className={classes.avatar} />
                            </Grid>
                            
                            <Grid item xs={12} md={3}>
                            <Typography>Website design by <Link className={classes.bottomFooterLink} href="mailto:dennisgitonga139@gmail.com">Penguins Technologies</Link></Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </Grid>

        </div>
    )

}
