import React from 'react';
import img4 from '../../assests/image/image4.png';
import { ReactComponent as Boy } from '../../assets/boy.svg';

import { 
    Grid,
    Avatar,
    makeStyles,
    Button
} from '@material-ui/core';

import {
    Settings
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        alignItems: "center",
        [theme.breakpoints.up('md')]: {
            flexDirection: "column",
            padding: "20px",
            flexWrap: "nowrap",
            maxWidth: "250px",
            height: "75vh"
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "row",
            height: "35vh",
            padding: "20px",
            background: "white",
            width: "90%",
            margin: "0px auto"
        }
    },
    largeAvatar: {
        height: theme.spacing(18),
        width: theme.spacing(18),
    },
    aboutContainer: {
        width: "70%",
        padding: "20px 10px 20px 10px",
        marginBottom: "20px",
        textAlign: "center",
        [theme.breakpoints.up('md')]: {
            borderBottom: "1px solid rgba(0,0,0,0.1)"
        }
    },
    aboutText: {
        fontSize: "12px",
        opacity: "0.5"
    },
    followContainer: {
        borderBottom : "1px solid rgba(0,0,0,0.1)",
        [theme.breakpoints.up('md')] : {
            width: "70%"
        },
        [theme.breakpoints.down('sm')] : {
            width: "60%"
        }
    },
    settingContainer: {
        color: "#c4c4c4",
        [theme.breakpoints.down('sm')]:{
            display: "none"
        } 
    }
}));

export default function ProfileOverview(){
    const classes = useStyles();

    return(
        <Grid item container className={classes.mainContainer} justify="space-between" xs={10} >
            <Grid item container alignItems="center" direction="column" xs={6} md={12}>
                <Grid item>
                    <Avatar src={img4} className={classes.largeAvatar}/>
                </Grid>
                <Grid item className={classes.aboutContainer}>
                    <span className={classes.aboutText} style={{
                        
                    }}>About</span>
                </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center" direction="column" xs={6} md={12} spacing={2}>
                <Grid item container alignItems="center" justify="center" className={classes.followContainer} >
                    <Grid item>
                        <Boy
                            style={{
                                "fill": "#1E31DA",
                                "height": "20px",
                                "width": "20px"
                            }} />
                    </Grid>
                    <Grid item>
                        <Button style={{
                            "fontSize": "1.7rem",
                            "textTransform": "none"
                        }}>
                            Followers
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" justify="center" className={classes.followContainer}>
                    <Grid item>
                        <Boy
                            style={{
                                "fill": "rgb(52, 210, 38)",
                                "height": "20px",
                                "width": "20px"
                            }} />
                    </Grid>
                    <Grid item>
                        <Button style={{
                            "fontSize": "1.7rem",
                            "textTransform": "none"
                        }}>
                            Following
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" justify="center" style={{
                    "paddingTop": "2.5rem",
                    "paddingBottom": "2.5rem"
                }}>
                    <Button variant="contained" 
                    style={{
                        "backgroundColor": "#C5C3FF",
                        "boxShadow": "none",
                        "padding" : "0.8rem 3rem",
                        "color": "#424242",
                        "fontSize": "12px"
                    }}>
                        Follow
                    </Button>
                </Grid>
            </Grid>
            <Grid item container xs={0} md={12} className={classes.settingContainer} alignItems="flex-end">
                <Settings style={{
                    "height": "20px",
                    "width": "20px",
                    "paddingRight" : "3px"
                }}/><span>Edit Profile</span>
            </Grid>
        </Grid>
    )
}