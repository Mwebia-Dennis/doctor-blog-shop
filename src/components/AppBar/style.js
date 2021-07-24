
import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#fff',
        color: '#000'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    avatar: {
        marginRight: '10px',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        textTransform: 'uppercase',
        display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    linksContainer: {

        padding: '0 10px',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
    },
    link: {
        margin: '0 20px'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    drawerTitle: {
        padding: '10px'
    },
    list: {
        width: 250,
    },
  }));