import React from 'react';
import Posts from './PostArea';
import Sidebar from './Sidebar.js';

import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')] : {
            display: 'none'
        },
    },
    menuIcon: {
        fontSize: "25px"
    },
    title: {
        flexGrow: 1,
        fontSize: "20px",
        color: "#C4C4C4",
        textAlign: "center"
    },
    nav: {
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        height: "10vh"
    },
    root5: {
        overflowY: "scroll",
        flexGrow: "1",
        backgroundColor: "#F5F5F5",
    },
    contentContainerGrid: {
        flexWrap: "nowrap"
    },
    notificationArea: {
        flexGrow: "1",
        maxWidth: "256px",
        width: "18%",
        backgroundColor: "white",
        display: 'none',
        height: "200px",
        [theme.breakpoints.up('md')] : {
            display: 'flex'
        },
        margin: "20px 10px 20px 10px",
        textAlign: "center",
        borderRadius: "5px",
        justifyContent: "center",
        padding: "20px"
    }
}));

export default function DashBoard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.root2} style={{height: "10%"}}>
                <AppBar className={classes.nav} position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            LOGO
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Grid container className={classes.root3} style={{flexWrap: "nowrap", height: "90%"}}>
                <Sidebar />
                <div className={classes.root5} style={{overflowY: "auto",height: "90vh"}}>
                    <Grid container className={classes.contentContainerGrid} >
                        <Posts/>
                        <Grid item className={classes.notificationArea}>
                            <Typography variant="h4">
                                Notifications
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </div>
    );
}
