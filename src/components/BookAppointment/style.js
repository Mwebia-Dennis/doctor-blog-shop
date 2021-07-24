
import { makeStyles } from '@material-ui/core/styles';
import apples from '../../images/apples.jpg'

export const useStyles = makeStyles((theme) => ({

    container: {
        width: '100%',
        height: '650px',
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url('+apples+')',
    },
    content: {
        background: 'rgba(255, 255, 255, 0.9)',
        // background: 'rgba(121, 210, 166, 0.8)',
        width: '90%',
        marginTop: '30px',
        borderRadius: '5px',
        [theme.breakpoints.down('md')]: {
            marginLeft: 14,
        }
    },
    form: {
        width: '90%',
        padding: '20px',
    },
    title: {
        fontSize: '28px',
        color: '#000',
        padding: '15px',
        fontWeight: 'bold',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            padding: '10px 0',   
        },
    },
    input: {
        marginBottom: '15px',
        marginTop: '5px',
    },
    btn: {
        border: '1px solid #000',
        color: '#000',
        marginTop: '20px',
        padding: '15px',
        "&:hover": {
            backgroundColor: 'rgba(121, 210, 166, 1.0)',
            border: 'rgba(121, 210, 166, 1.0)',
            color: '#fff'
        },     
        [theme.breakpoints.down('md')]: {
            marginLeft: '16%',
        },
    }
}))