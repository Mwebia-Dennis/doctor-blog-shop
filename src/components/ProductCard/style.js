
import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({

    card: {

        width: '90%',
        borderRadius: '5px',
        backgroundColor: '#fff',
    },
    cardImageContainer: {
        width: '100%',
        height: '250px',
        padding: 0,
        margin: 0,
          
      [theme.breakpoints.down('md')]: {
        height: '150px',
      },
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
    },
    cardContent: {
        padding: '10px',
        width: '100%',
    },
    name: {

        textAlign: 'center',
        fontSize: '17px',
    },
    price: {
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    cardButtonContainer: {
        padding: '0',
        border: '1px solid #d3d3d3',
    },
    cardFooterBtn: {
        padding: '15px !important',
        width: '100% !important' ,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }, 
    },
    cardFooterIconBtn: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block',
        },
    }

}))