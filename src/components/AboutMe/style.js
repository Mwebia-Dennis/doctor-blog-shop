

import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#fff',
        padding: '10px 0 50px 0',
    },
    title:{
        padding: '15px',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: '40px',       
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',  
        },
    },
    image: {
            
        width: '200px',
        height: '200px',
        marginTop: '100px',        
        [theme.breakpoints.down('md')]: {
            marginTop: '0', 
        },
    },
    content: {
        padding: '10px 50px'
    },
    contentText: {
        fontSize: '20px',
    }
}))


    