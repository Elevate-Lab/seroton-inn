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
        paddingLeft: '5px',
        fontSize: "1.8rem",
        fontWeight: "800"
    },
    composeButton: {
        boxShadow: 'none',
        backgroundColor: "#F5F5F5",
        fontSize: "1.5rem"
    },
    userImage: {
        borderRadius: "5px",
        width: "25px",
        height: "25px"
    },
    postGridItem: {
        padding: "15px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "10px"
    },
    postContentText: {
        fontSize: "12px"
    },
    postImageTextGrid: {
        borderRadius: "5px",
        margin: "5px auto 5px auto",
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
    postInputBox: {
        paddingLeft: "5px",
        width: "100%",
        fontSize: "16px",
        backgroundColor: "#F5F5F5",
        outline: "none",
        '& .MuiInputBase-input': {
            padding: "5px",
            fontSize: "16px",
            outline: "none",
        }
    }
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
                            Hey! How you doing? Share your mood! <MoodIcon />
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
                            <Typography className={classes.composeMessage}>
                                username
                                        </Typography>
                        </Grid>
                        <Grid item>
                            <MoreHorizIcon />
                        </Grid>
                    </Grid>
                    <Grid item className={classes.postImageTextGrid}>
                        <img src={img4} alt="testImg" className={classes.postImage} />
                        <Typography className={classes.postContentText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Typography>
                    </Grid>
                    <hr />
                    <Grid item>
                        <Grid container style={{ flexWrap: "nowrap", padding: "10px 0px 10px 0px" }} justify="flex-start">
                            <Grid container style={{ width: "auto" }}>
                                <ChatBubbleOutlineIcon style={{ fontSize: "16px", padding: "0px 8px 0px 0px", width: "3em" }} />
                                <Typography style={{ fontSize: "16px", padding: "0px 8px 0px 0px" }}>
                                    Comments
                                                </Typography>
                            </Grid>
                            <Grid container style={{ width: "auto" }}>
                                <ShareIcon style={{ fontSize: "16px", padding: "0px 8px 0px 0px", width: "3em" }} />
                                <Typography style={{ fontSize: "16px", padding: "0px 8px 0px 0px" }}>
                                    Share
                                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.postInputField}>
                        <img src={testImg} alt="testImg" className={classes.userImage} />
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