import { Button, Grid, IconButton, Tooltip, Typography } from '@material-ui/core'
import { ShoppingCart, Visibility } from '@material-ui/icons'
import React from 'react'
import { useStyles } from './style'

export default function ProductCard(props) {
    const {image, productName, productPrice} = props
    const classes = useStyles()
    return (
        <div className={classes.card}>

            <div className={classes.cardImageContainer}>
                <img src={image} className={classes.image} alt={productName}/>
            </div>
            <div className={classes.cardContent}>
                <p className={classes.name}>{productName}</p>
                <Typography variant="h6" className={classes.price}>Kshs.{productPrice}</Typography>
            </div>
            <div className={classes.cardFooter}>
                <Grid container justify="center" align="center">
                    <Grid item xs={6} className={classes.cardButtonContainer}>
                        <Tooltip title="Quick View">
                            <IconButton className={classes.cardFooterIconBtn}><Visibility /> </IconButton>

                        </Tooltip>
                        <Button className={classes.cardFooterBtn} startIcon={<Visibility/>}>A Quick View</Button>
                    </Grid>
                    <Grid item xs={6} className={classes.cardButtonContainer}>
                        <Tooltip title="Add To Cart">
                            <IconButton className={classes.cardFooterIconBtn}><ShoppingCart style={{color: "#009933"}} /> </IconButton>

                        </Tooltip>
                        <Button className={classes.cardFooterBtn} style={{color: "#009933"}} startIcon={<ShoppingCart/>}>Add To Cart</Button>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
    
}
