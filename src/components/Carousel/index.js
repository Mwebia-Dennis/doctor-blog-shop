import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import doctor from '../../images/doctor.jpg'
import wheelchair2 from '../../images/wheelchair2.jpg'
import thermometer from '../../images/thermometer.jpg'
import therapy2 from '../../images/therapy2.jpg'
import { useStyles } from './style';
import Button from '../Button';

export default function CarouselComponent (props) {
    
    const classes = useStyles()

    const carouselItems = [
        {
            img: doctor,
            legend: "Doctors Prescribe This Products",
            action: <Button text={"More Details"} />
        },
        {
            img: thermometer,
            legend: "New German Thermometers @ 20% Off",
            action: <Button text={"Buy Now"} />
        },
        {
            img: therapy2,
            legend: "Book An Appointment With Doctor Ian Muguna For More Consultation",
            action: <Button text={"Book Today"} />
        },
        {
            img: wheelchair2,
            legend: "Dont Miss Out Our Daily Offers",
            action: <Button text={"View Today's Offers"} />
        },
    ]

    return (
        <Carousel
            interval={2000}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
        >

            {
                carouselItems.map((item, index)=>(
                    <div key={index} className={classes.carouselDiv}>
                        <div className={classes.overlay}></div>
                        <img src={item.img} alt="carousel" className={classes.carouselImg} />
                        <p className="legend" style={{opacity: '1', backgroundColor: 'inherit', color: '#fff'}}>

                            <h1 className={classes.legendHeader}>{item.legend}</h1>
                            {item.action}
                        </p>
                    </div>
                ))
            }
        </Carousel>
    )
}
