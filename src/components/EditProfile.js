


/* This component is just for testing the API. It will be designed later. */

import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {TextField,makeStyles,Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    editContainer: {
        width: "70%",
        margin: "20px auto 0px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputFields: {
        width: "100%",
        padding: "20px"
    },
    editInputs: {
        width: "100%",
    }

}));

const EditProfile = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilepic] = useState("");
    const [id,setId] = useState("");

    useEffect(() => {

        var user = props.location.state;
        setUsername(user.username);
        setPassword(user.password);
        setName(user.name);
        setProfilepic(user.profilePic);
        setId(user.googleId);

    }, [props.location.state])

    const classes = useStyles();

    const handleUpdate = (googleId) => {
        axios({
            method: "patch",
            url: `http://localhost:5000/user/${googleId}/editUser`,
            data: {
                name,
                username,
                password,
                profilePic
            },
            params: {
                user_id: googleId
            }
        })
        .then((res) => {
            console.log("updated");
        })
        .catch((err) => console.log(err));
    }

    return(
        <form>
            <div className={classes.editContainer}>
                <div className={classes.inputFields}>
                    <TextField
                    size="medium"
                        id="outlined-helperText"
                        label= "Name"
                        variant="outlined"
                        className={classes.editInputs}
                        value={name}
                        onChange = {(e) => {setName(e.target.value)}}
                    />
                </div>
                <div className={classes.inputFields}>
                    <TextField
                        id="outlined-helperText"
                        label="username"
                        variant="outlined"
                        className={classes.editInputs}
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </div>
                <div className={classes.inputFields}>
                    <TextField
                        id="outlined-helperText"
                        label="Password"
                        value={password}
                        variant="outlined"
                        className={classes.editInputs}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className={classes.inputFields}>
                    <TextField
                        id="outlined-helperText"
                        label="ProfilePic"
                        value={profilePic}
                        variant="outlined"
                        className={classes.editInputs}
                        onChange={(e) => { setProfilepic(e.target.value) }}
                    />
                </div>      
                <div>
                    <Button variant="contained" color="primary" onClick={() => handleUpdate(id)}>
                        Update Profile
                    </Button>    
                </div> 
            </div>
        </form>
    )


}

export default EditProfile;
