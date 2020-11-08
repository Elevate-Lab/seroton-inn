import React from 'react';

import testImg from '../../assests/image/test.jpg';
import img4 from '../../assests/image/image4.png';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoodIcon from '@material-ui/icons/Mood';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    postsArea: {
        [theme.breakpoints.down('sm')]: {
            width: "95%",
            margin: "20px 10px 20px 10px",
        },
        [theme.breakpoints.down('lg')]: {
            width: "900px"
        },
        width: "70%",
        margin: "20px 10px 20px 10px"
    },
    composeGrid: {
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        padding: "15px",
        backgroundColor: "white",
        flexGrow: "1",
        justifyContent: "space-between"
    },
    composeMessage: {
        paddingLeft: '12px',
        fontSize: "1.8rem",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
    },
    composeButton: {
        boxShadow: 'none',
        backgroundColor: "#F5F5F5",
        fontSize: "1.5rem"
    },
    userImage: {
        borderRadius: "1rem",
        width: "4.2rem",
        height: "4.2rem"
    },
    userName: {
        paddingLeft: '12px',
        fontSize: "1.8rem",
        fontWeight: "500"
    },
    dateTimeDetails: {
        paddingLeft: '12px',
        fontSize: "1.6rem",
        fontWeight: "500",
        color: "rgba(0,0,0,0.6)"
    },
    moreHorizIcon: {
        fontSize: "20px",
        color: "rgba(0,0,0,0.8)",
        transform: "translate(0, -8px)"
    },
    postGridItem: {
        padding: "12px",
        backgroundColor: "white",
        borderRadius: "10px",
        marginTop: "16px"
    },
    postContentText: {
        fontSize: "2rem",
        lineHeight: "2.6rem",
        margin: "16px 0"
    },
    postImageTextGrid: {
        borderRadius: "5px",
        margin: "16px auto 0px auto",
    },
    postImage: {
        width: "100%"
    },
    postInputField: {
        display: "flex",
        alignItems: "center",
        '& .MuiOutlinedInput-adornedEnd': {
            paddingRight: "0px"
        }
    },
    reactions: { 
        width: "auto",
        display: "flex",
        alignItems: "center"
    },
    break: {
        borderBottom: "0.1px solid rgba(0,0,0,0.1)",
        width: "100%",
    },
    postInputBox: {
        paddingLeft: "12px",
        width: "100%",
        fontSize: "16px",
        backgroundColor: "#F5F5F5",
        outline: "none",
        '& .MuiInputBase-input': {
            padding: "5px",
            fontSize: "16px",
            outline: "none",
        }
    },
    commentImage: {
        borderRadius: "5px",
        width: "29px",
        height: "29px"
    },
}));

export default function Posts() {
    const classes = useStyles();
    return(
        <Grid item className={classes.postsArea}>
            <Grid container alignItems="center" justify="space-between">
                <Grid item className={classes.composeGrid}>
                    <Grid item style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                        <img src={testImg} alt="testImg" className={classes.userImage} />
                        <Typography className={classes.composeMessage}>
                            Hey! How you doing? Share your mood! <MoodIcon style={{fontSize: "20px", paddingLeft:"4px"}} />
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={classes.composeButton}>Compose</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item className={classes.postGridItem}>
                    <Grid item style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                            <img src={testImg} alt="testImg" className={classes.userImage} />
                            <Grid>
                                <Typography className={classes.userName}>
                                    username
                                </Typography>
                                <Typography className={classes.dateTimeDetails}>
                                    Time • Place
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <MoreHorizIcon className={classes.moreHorizIcon}/>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.postImageTextGrid}>
                        <img src={img4} alt="testImg" className={classes.postImage} />
                        <Typography className={classes.postContentText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                    </Grid>
                    <Grid className={classes.break}></Grid>
                    <Grid item>
                        <Grid container style={{ display: "flex",flexWrap: "nowrap", padding: "10px 0px 10px 0px", transform: "translate(-16px, 0)" }} justify="flex-start">
                            <Grid container className={classes.reactions}>
                                <ChatBubbleOutlineIcon style={{ fontSize: "2rem", width: "3em" }} />
                                <Typography style={{ fontSize: "2rem", transform: "translate(-8px,0)" }}>
                                    Comments
                                </Typography>
                            </Grid>
                            <Grid container className={classes.reactions}>
                                <ShareIcon style={{ fontSize: "2rem", padding: "0px 8px 0px 0px", width: "3em" }} />
                                <Typography style={{ fontSize: "2rem", padding: "0px 0px 0px 0px", transform: "translate(-12px,0)" }}>
                                    Share
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.postInputField}>
                        <img src={testImg} alt="testImg" className={classes.commentImage} />
                        <TextField
                            className={classes.postInputBox}
                            id="outlined-search"
                            type="search"
                            variant="outlined" InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <GifIcon style={{ fontSize: "20px" }} />
                                        <InsertEmoticonIcon style={{ fontSize: "20px" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}