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
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    postsArea: {
        marginBottom: "70px",
        backgroundColor: "#f5f5f5",
        [theme.breakpoints.down('xs')] : {
            maxWidth: "95%",
            marginLeft: "auto",
            marginRight: "auto",
            justify: "center"
        },
        [theme.breakpoints.up('sm')] : {
            marginRight: "15px",
        }
    },
    composeGrid: {
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0, 0.25)",
        padding: "2rem 2rem 2rem 3rem",
        borderRadius: "5px",
        backgroundColor: "white",
        marginTop : "80px"
    },
    composeMessageContainer: {
        flexWrap: "nowrap"
    },
    composeMessage: {
        marginLeft: "7px",
        fontSize: "1.8rem",
        fontWeight: "500",
    },
    composeButton: {
        boxShadow: 'none',
        backgroundColor: "#C5C3FF",
        fontSize: "1.5rem"
    },
    userContainer: {
        marginBottom : "7px"
    },
    userPostContainer: {
        flexWrap: "nowrap"
    },
    userImage: {
        borderRadius: "1rem",
        width: "5rem",
        height: "5rem"
    },
    usernameContainer: {
        paddingLeft : "7px"
    },
    userName: {
        fontSize: "1.8rem",
        fontWeight: "500"
    },
    dateTimeDetails: {
        fontSize: "1.6rem",
        fontWeight: "500",
        color: "rgba(0,0,0,0.6)"
    },
    moreHorizIcon: {
        fontSize: "20px",
        color: "rgba(0,0,0,0.8)",
    },
    postMainContent : {
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0,0.25)",
        borderRadius: "5px",
        backgroundColor: "white",
        padding: "2rem",
        marginTop: "15px"
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
    reactionsContainer: {
        marginTop: "7px",
        marginBottom: "7px"
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
        <Grid item container className={classes.postsArea} xs={12} sm={10} md={7}>
            <Grid item container className={classes.composeGrid} justify="space-between" xs={12}>
                <Grid item xs={8} container alignItems="center" spacing={2} className={classes.composeMessageContainer}>
                    <img src={testImg} alt="testImg" className={classes.userImage} />
                    <Typography className={classes.composeMessage}>
                        Hey! How you doing? Share your mood!
                    </Typography>
                </Grid>
                <Grid item container xs={4} justify="flex-end">
                    <Grid item >
                        <Button variant="contained" className={classes.composeButton}>Compose</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.postMainContent}>
                <Grid item container justify="space-between" xs={12} alignItems="center" className={classes.userContainer}>
                    <Grid item container xs={4} sm={3} className={classes.userPostContainer}>
                        <img src={testImg} alt="testImg" className={classes.userImage} />
                        <Grid container className={classes.usernameContainer} >
                            <Grid item xs={12}>
                                <Typography className={classes.userName}>
                                    username
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={classes.dateTimeDetails}>Time • Place</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} container justify="flex-end">
                        <Grid item> 
                            <MoreHorizIcon className={classes.moreHorizIcon} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <img src={img4} alt="testImg" className={classes.postImage} />
                    <Typography className={classes.postContentText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </Grid>
                <Grid item className={classes.break}></Grid>
                <Grid item container xs={12} className={classes.reactionsContainer}>
                    <Grid item className={classes.reactions}>
                        <ChatBubbleOutlineIcon style={{ fontSize: "2rem", width: "3em" }} />
                        <Typography style={{ fontSize: "2rem" }}>
                            Comments
                        </Typography>
                    </Grid>
                    <Grid item className={classes.reactions}>
                        <ShareIcon style={{ fontSize: "2rem", padding: "0px 8px 0px 0px", width: "3em" }} />
                        <Typography style={{ fontSize: "2rem", padding: "0px 0px 0px 0px" }}>
                            Share
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.postInputField} xs={12}>
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
    )
}