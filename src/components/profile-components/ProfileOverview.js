import React from 'react';
import { ReactComponent as Boy } from '../../assets/boy.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        fontFamily: "Rubik",
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
            height: "39vh",
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
    usernameContainer : {
        color: "#000",
        fontSize: "14px",
        padding: "5px",
        fontWeight: "600"
    },
    nameContainer: {
        color: "#000",
        fontSize: "14px",
        fontWeight: "600"
    },
    nameAboutContainer: {
        padding: "10px 0px 0px 10px"
    },
    aboutContainer: {
        width: "70%",
        padding: "5px 10px 10px 0px",
        [theme.breakpoints.up('md')]: {
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            paddingBottom: "20px"
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
    followersIcon : {
        fill: "#1E31DA",
        height: "20px",
        width: "20px"
    },
    followingIcon: {
        fill: "rgb(52, 210, 38)",
        height: "20px",
        width: "20px"
    },
    followText : {
        fontSize: "1.7rem",
        textTransform: "none"
    },
    followButtonContainer : {
        paddingTop : "2.5rem",
        paddingBottom : "2.5rem"
    },
    followButton : {
        backgroundColor: "#C5C3FF",
        boxShadow: "none",
        padding: "0.8rem 3rem",
        color: "#424242",
        fontSize: "12px"
    },
    settingContainer: {
        color: "#c4c4c4",
        [theme.breakpoints.down('sm')]:{
            display: "none"
        } 
    },
    settingsIcon: {
        height: "20px",
        width: "20px",
        paddingRight: "3px"
    }
}));

export default function ProfileOverview(){
    const classes = useStyles();

    const [profileData,setProfileData] = React.useState({});
    const [profileImageUrl,setProfileImageUrl] = React.useState('');

    React.useEffect(() => {

        /* For Fetching profile data we need userId which we will get after login, For now I'm hardcoding it. */
        const user_id = "5fe8969fcd8ebe40fc8eede3";
        /* *********** */

        //Fetch Profile Data
        getProfileData(user_id);

    },[]);

    const getProfileData = (user_id) => {
        axios.get(`/user/${user_id}/getProfile`,{
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
        })
        .then(res => {
            console.log(res);
            setProfileData(res.data.user);
            var profileImageName = res.data.user.profilePic.filename;
            setProfileImageUrl(`/image/${profileImageName}`);
        })
    }

    return(
        <Grid item container className={classes.mainContainer} justify="space-between" xs={10} >
            <Grid item container direction="column" xs={6} md={12}>
                <Grid item container alignItems="center" direction="column">
                    <Grid item>
                        <Avatar src={profileImageUrl} className={classes.largeAvatar} />
                    </Grid>
                    <Grid item className={classes.usernameContainer}>
                        <span>{profileData.username}</span>
                    </Grid>
                </Grid>
                <Grid item className={classes.nameAboutContainer}>
                    <Grid item className={classes.nameContainer}>
                        <span>{profileData.name}</span>
                    </Grid>
                    <Grid item className={classes.aboutContainer}>
                        <span className={classes.aboutText}>About</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center" direction="column" xs={6} md={12} spacing={2}>
                <Grid item container alignItems="center" justify="center" className={classes.followContainer} >
                    <Grid item>
                        <Boy className={classes.followersIcon}/>
                    </Grid>
                    <Grid item>
                        <Button className={classes.followText}>
                            Followers
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" justify="center" className={classes.followContainer}>
                    <Grid item>
                        <Boy className={classes.followingIcon}/>
                    </Grid>
                    <Grid item>
                        <Button className={classes.followText}>
                            Following
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" justify="center" className={classes.followButtonContainer}>
                    <Button variant="contained" className={classes.followButton}>
                        Follow
                    </Button>
                </Grid>
            </Grid>
            <Grid item container  md={12} className={classes.settingContainer} alignItems="flex-end">
                <Link to={{
                    pathname: "/editProfile",
                    userId : profileData._id
                }}>
                    <Settings className={classes.settingsIcon} />
                    <span>Edit Profile</span>
                </Link>
            </Grid>
        </Grid>
    )
}