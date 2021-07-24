import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'



export default function BookAppointment(props) {
    
    const classes = useStyles()
    return (
        <div className={classes.container}>

            <Grid container>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={5}>
                    <div className={classes.content}>

                        <Typography className={classes.title}>Book Appointment Today</Typography>
                        <div className={classes.form}>

                            <form>


                                <Grid container >
                                    <Grid item xs={12}>

                                        <label>Your Full Name</label>
                                        <TextField
                                            required
                                            id="full_name"
                                            label="Your Full Name"
                                            variant="outlined"
                                            fullWidth
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label>Phone Number</label>
                                        <TextField
                                            required
                                            id="phone_no"
                                            label="Phone Number"
                                            variant="outlined"
                                            fullWidth
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label>Appointment Date</label>
                                        <TextField
                                            required
                                            type="date"
                                            id="date"
                                            variant="outlined"
                                            fullWidth
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label>Appointment Time</label>
                                        <TextField
                                            required
                                            type="time"
                                            id="time"
                                            variant="outlined"
                                            fullWidth
                                            className={classes.input}
                                        />
                                    </Grid>


                                    <Button className={classes.btn}>Book Appointment</Button>
                                </Grid>


                            </form>
                        </div>



                    </div>
                </Grid>
                <Grid item xs={12} md={3}></Grid>
            </Grid>
        </div>
    )
}
