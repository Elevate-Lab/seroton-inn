import React from 'react';
import { 
    makeStyles,
    Grid,
    Button
} from '@material-ui/core';

import {
    FiberManualRecord
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    mainContainer : {
        marginBottom: "12vh",
        backgroundColor: "white",
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0, 0.25)",
        [theme.breakpoints.up('md')] : {
            maxWidth: "68%",
            marginLeft: "20px",  
        },
        [theme.breakpoints.up('lg')] : {
            width: "70%"
        },
        [theme.breakpoints.down('sm')] : {
            margin: "20px auto 12vh auto"
        },
    },
    tabButtonContainer : {
        flexBasis: "0%"
    },
    tabButtons: {
        width: "100%",
        fontSize: "2.0rem",
        padding: "1.5rem",
        textTransform: "none",
        fontWeight: "400",
        borderRadius : "0px"
    },
    firstTabButton : {
        borderBottom : "2px solid #362073"
    },
    secondTabButton : {
        backgroundColor : "#E3E1FF",
        border : "1px solid #E3E1FF"
    },
    imageGridContainer: {
        flexBasis : "0%",
    },
    imageGrid : {
        border: "1px solid #e0e0e0",
        padding : "15px 15px 5px 15px",
        margin : "15px",
        [theme.breakpoints.up('sm')]: {
            maxWidth: "45%",
            margin: "2.5%",
        }
    },
    imageTag : {
        width: "100%"
    },
    imageCaptionContainer : {
        padding: "10px"
    },
    imageCaptionText: {
        fontSize: "2.2rem"
    },
    imageCaptionIcons: {
        color: "#c4c4c4",
        height: "2.5rem",
        width: "2.5rem"
    }
}));

export default function ProfilePosts(){
    const classes = useStyles();

    return(
        <Grid item container xs={10} direction="column" className={classes.mainContainer}>
            <Grid item container xs={12} className={classes.tabButtonContainer}>
                <Grid item xs={6}>
                    <Button className={`${classes.tabButtons} ${classes.firstTabButton}`}>
                        Posts
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={`${classes.tabButtons} ${classes.secondTabButton}`}>
                        Stats
                    </Button>
                </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.imageGridContainer}>
                <Grid item container direction="column" alignItems="center" xs={12} sm={6} className={classes.imageGrid}>
                    <Grid item>
                        <img className={classes.imageTag} src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic"/>
                    </Grid>
                    <Grid item container justify="space-between" className={classes.imageCaptionContainer}>
                        <Grid item className={classes.imageCaptionText}>
                            <p>Hallelujah</p>
                        </Grid> 
                        <Grid item>
                            <FiberManualRecord className={classes.imageCaptionIcons}/>
                            <FiberManualRecord className={classes.imageCaptionIcons}/>
                            <FiberManualRecord className={classes.imageCaptionIcons}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6} className={classes.imageGrid}>
                    <Grid item>
                        <img className={classes.imageTag} src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                    </Grid>
                    <Grid item container justify="space-between" className={classes.imageCaptionContainer}>
                        <Grid item className={classes.imageCaptionText}>
                            <p>Hallelujah</p>
                        </Grid>
                        <Grid item>
                            <FiberManualRecord className={classes.imageCaptionIcons}/>
                            <FiberManualRecord className={classes.imageCaptionIcons}/>
                            <FiberManualRecord className={classes.imageCaptionIcons}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" xs={12} sm={6} className={classes.imageGrid}>
                    <Grid item>
                        <img className={classes.imageTag} src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                    </Grid>
                    <Grid item container justify="space-between" className={classes.imageCaptionContainer}>
                        <Grid item className={classes.imageCaptionText}>
                            <p>Hallelujah</p>
                        </Grid>
                        <Grid item>
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" xs={12} sm={6} className={classes.imageGrid}>
                    <Grid item>
                        <img className={classes.imageTag} src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                    </Grid>
                    <Grid item container justify="space-between" className={classes.imageCaptionContainer}>
                        <Grid item className={classes.imageCaptionText}>
                            <p>Hallelujah</p>
                        </Grid>
                        <Grid item>
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" xs={12} sm={6} className={classes.imageGrid}>
                    <Grid item>
                        <img className={classes.imageTag} src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                    </Grid>
                    <Grid item container justify="space-between" className={classes.imageCaptionContainer}>
                        <Grid item className={classes.imageCaptionText}>
                            <p>Hallelujah</p>
                        </Grid>
                        <Grid item>
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" xs={12} sm={6} className={classes.imageGrid}>
                    <Grid item>
                        <img className={classes.imageTag} src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Card Pic" />
                    </Grid>
                    <Grid item container justify="space-between" className={classes.imageCaptionContainer}>
                        <Grid item className={classes.imageCaptionText}>
                            <p>Hallelujah</p>
                        </Grid>
                        <Grid item>
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                            <FiberManualRecord className={classes.imageCaptionIcons} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}