import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../AboutMe/style'
import ServicesCard from './ServicesCard'
// import { Accessibility, Eco, Favorite } from '@material-ui/icons'
import consult from '../../images/consult.jpg'
import therapy3 from '../../images/therapy3.jpg'
import tooth from '../../images/tooth.jpg'

export default function ServicesContainer(props) {


    const classes =useStyles ()
    const services = [
        {
            name: 'Occupational Therapy',
            description: "Get a 24-hour full therapy service at your convinience with utmost care."+
            " The doctor schedules an Appointment and assess your progress.",
            images: therapy3,
        },
        {
            name: 'Dentist and Dental Check-Up',
            description: "Get a 24-hour full therapy service at your convinience with utmost care."+
            " The doctor schedules an Appointment and assess your progress.",
            images: tooth,
        },
        {
            name: 'Health Consultations',
            description: "Get a 24-hour full therapy service at your convinience with utmost care."+
            " The doctor schedules an Appointment and assess your progress.",
            images: consult,
        }
    ]
    return (

        
        <div className={classes.container}>
            <Typography className={classes.title}> My services</Typography>
            <Grid container justify="center" align="center" >
                
                <Grid item xs={12}>

                    <Grid container>


                        {
                            services.map((item,index)=>(

                                <Grid item xs={12} md={4} key={index}>
                                    <ServicesCard 
                                        name={item.name}
                                        description={item.description}
                                        image={item.images}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>        

    )
    
}
