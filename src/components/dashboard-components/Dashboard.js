import React from 'react';
import Posts from './PostArea';
import BottomNav from '../BottomNav';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f5f5f5"
    },
    root2: {
        backgroundColor: 'white'
    },
    root3: {
        backgroundColor: "#f5f5f5",
    },
    menuIcon: {
        fontSize: "25px"
    },
    title: {
        paddingLeft: "10px",
        flexGrow: 1,
        fontSize: "20px",
        color: "#C4C4C4",
        textAlign: "center"
    },
    nav: {
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0, 0.25)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
        height: "10vh"
    },
    navIcon: {
        textAlign: "center",
        '& .MuiSvgIcon-root': {
            fontSize: '20px',
            color: "red"
        },
    },
    notificationArea: {
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0, 0.25)",
        padding: "20px",
        marginTop: "80px",
        flexGrow: "1",
        backgroundColor: "white",
        display: 'none',
        height: "400px",
        [theme.breakpoints.up('md')] : {
            display: 'flex'
        },
        textAlign: "center",
        borderRadius: "5px",
        justifyContent: "center",
    },
}));

export default function DashBoard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.root2}>
                <AppBar className={classes.nav} position="fixed">
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="h6" className={classes.title}>
                                LOGO
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.navIcon}>
                            <PowerSettingsNewIcon />
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
            <Grid container className={classes.root3}>
                <Grid item md={1} sm={1}/>
                <Posts />
                <Grid item className={classes.notificationArea} xs={false} md={3}>
                    <Typography variant="h4">
                        Notifications
                    </Typography>
                </Grid>
                <Grid item md={1} sm={1}/>
            </Grid>
            <BottomNav />
        </div>
    );
}
