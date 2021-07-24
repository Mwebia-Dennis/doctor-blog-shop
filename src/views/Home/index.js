import React, {useState } from 'react'
import { useStyles } from './style'
import { Paper, Grid, Tabs, Tab, Typography } from '@material-ui/core'
import AppBar from '../../components/AppBar'
import Carousel from '../../components/Carousel'
import mask from '../../images/mask.jpg'
import clutches1 from '../../images/cluthches1.jpg'
import pressure from '../../images/pressure.jpg'
import stethoscope from '../../images/stethoscope.jpg'
import thermogun from '../../images/thermogun.jpg'
import sanitizer from '../../images/sanitizer.jpg'
import spects from '../../images/spects.jpg'
import hearingAid from '../../images/hearing-aid.jpg'
import ProductCard from '../../components/ProductCard'
import Button from '../../components/Button'
import AboutMe from '../../components/AboutMe'
import BookAppointment from '../../components/BookAppointment'
import ServicesContainer from '../../components/Services'
import Footer from '../../components/Footer'

export default function Home(props){
    
    const classes =  useStyles()
    const [tabValue, setTabValue] = useState(0)
    const tabsData = ["New Arrivals", "Top Products", "Special Products"]
    const newProducts = [
        {
            image: clutches1,
            name: "Walking Aids",
            price: "4000"
        },
        {
            image: pressure,
            name: "Pressure Pump",
            price: "4000"
        },
        {
            image: stethoscope,
            name: "Steshoscope",
            price: "1000"
        },
        {
            image: thermogun,
            name: "Digital Thermogun",
            price: "2500"
        },
        {
            image: sanitizer,
            name: "Aloe Vera Herbal Hand Sanitizers",
            price: "200"
        },
        
        {
            image: mask,
            name: "Surgical Mask",
            price: "20"
        },
        
        {
            image: spects,
            name: "Spectacles",
            price: "20000"
        },
        
        {
            image: hearingAid,
            name: "Hearing Aid",
            price: "4000"
        }
    ]
    const handleTabChange = (event, value)=> {
        setTabValue(value)
    }

    return (
        <div className={classes.root}>

            <Paper className={classes.mainComponent} style={{backgroundColor: '#f2f2f2'}}>

                <AppBar />
                
                <Carousel />
                
                <AboutMe />


                <div style={{marginTop: 30}}>

                    <Typography variant={"h6"} className={classes.topHeader}>
                        My Products
                    </Typography>
                    <Typography variant={"h4"} className={classes.headers}>
                        Shop By Category
                    </Typography>

                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        {
                            tabsData.map((item, index)=><Tab label={item} key={index} />)
                        }
                    </Tabs>
                        
                    <div className={classes.tabPanel}>
                        <Grid container>

                            {
                                newProducts.map((item, index)=>(

                                    
                                    <Grid item xs={6} md={3}  key={index} style={{marginTop: '15px'}}>
                                        <ProductCard image={item.image} productName={item.name} productPrice={item.price}/>
                                    </Grid>
                                ))
                            }

                            <Grid item xs={12} className={classes.viewMore}>
                                <Grid container justify="center" align="center" >
                                    <Grid item xs={12}>
                                        <Button text={"View More On Shop"} />
                                    </Grid>
                                </Grid>
                            </Grid>

                            

                        </Grid>


                    </div>
                </div>


                <ServicesContainer />

                <BookAppointment />

                <Footer />
            </Paper>
        
        </div>
    )

}
