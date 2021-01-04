import React from 'react';
import BottomNav from '../BottomNav';
import ProfileOverview from './ProfileOverview';
import ProfilePosts from './ProfilePosts';

import {
    AppBar,
    makeStyles,
    Grid,
    Typography,
} from '@material-ui/core';

import {
    PowerSettingsNew
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
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
    mainContainer: {
        justifyContent: "center",
        marginTop: "13vh",
        [theme.breakpoints.up('md')] : {
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto"
        }
    }
}));

export default function Profile(){
    const classes = useStyles();

    return(
        <div>
            <div>
                <AppBar className={classes.nav} position="fixed">
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="h6" className={classes.title}>
                                LOGO
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.navIcon}>
                            <PowerSettingsNew />
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
            <div>
                <Grid container className={classes.mainContainer}>
                    <ProfileOverview />
                    <ProfilePosts />
                </Grid>
            </div>
            <div>
                <BottomNav />
            </div>
        </div>
    )
}