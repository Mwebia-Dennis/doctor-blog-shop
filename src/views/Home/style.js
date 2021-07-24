
import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
    }, 
    mainComponent: {
        width: '100%',
        backgroundColor: '#f2f2f2',
    },
    headers: {
        textAlign: 'center',
        padding: '10px 0',
        marginTop: '10px',
        fontWeight: 'bold',
    },
    topHeader: {
        fontWeight: 'bold',
        margin: '20px 0 7px 0',
        textAlign: 'center',
    },
    tabPanel: {
        marginTop: '10px',
        backgroundColor: 'inherit',
    },
    viewMore: {
        margin: '20px 0 !important'
    },

}))