
import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    
    carouselDiv: {
        height: '350px',
        
      [theme.breakpoints.up('md')]: {
        height: '550px',
      },
    }, 
    carouselImg: {
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, .1)',
    },
    legendHeader: {
        fontSize: '30px',
    }, 
    

}))