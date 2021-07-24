import React from 'react'
import { Button } from '@material-ui/core';
import { useStyles } from './style';

export default function CustomButton(props) {


    const classes = useStyles()
    return (<Button className={classes.actionButton} variant="contained" color="primary">{props.text}</Button>)
    
}
