import {  makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: '#fff',
        padding: '30px 0'
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 22,
        paddingTop: '15px',
        paddingLeft: '15px',
    },
    links: {
        color: '#000',
        fontSize: 14,
    },
    phone: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    appointmentComponent: {
        backgroundColor: '#40bf80',
        padding: '20px 20px',
        [theme.breakpoints.down('md')]: {
            
            padding: '20px 20px',
        }
    },
    appointmentComponentLink: {
        color: "#fff",
        textAlign: 'right'
    },
    appointmentDatesContainer: {
        padding: '20px 0'
    },
    appointmentDates: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: '8px 5px',
        textTransform: 'uppercase',
    },
    appointmentTime: {
        textAlign: 'right',
        fontSize: 17,
        padding: '8px 5px',
        textTransform: 'uppercase',
    },
    footerNav: {
        marginLeft: '40px',
        fontSize: '20px'
    },
    bottomFooter: {
        width: '90%',
        margin: '40px',
        backgroundColor: '#40bf80',
        padding: '30px',
        borderRadius: '20px'
    },
    bottomFooterLink: {color: '#fff'},
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },


}))