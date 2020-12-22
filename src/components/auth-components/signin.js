import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import logo from "../../assests/image/logo.png";
import backgroundImage from "../../assests/image/auth-image.png";
import e1 from "../../assests/vector/Ellipse.png";
import e2 from "../../assests/vector/Ellipse1.png";
import gButton from "../../assests/vector/gButton.png";

import "./auth.css"

// This will send the data to the back-end:

import axios from "axios";
import querystring from "querystring";

const font =  "'Secular One', sans-serif";
const font2 =  "'Roboto'";

axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background:"no-repeat bottom right url("+ e2 +")",
        backgroundSize:"250px",
        minHeight :"100%",
    },
    root2: {
        flexGrow: 1,
        background:"no-repeat top left url("+ e1 +")",
        backgroundSize:"250px",
    },
    padd70:{
        paddingTop:"50px",
        paddingBottom:"50px",
    },
    gridContainer:{
        boxShadow: "0px 0px 74px -12px rgba(0, 0, 0, 0.18)",
        borderRadius: "20px",
        overflow: "hidden",
    },
    gridLeft:{
        textAlign:"center",
        borderRadius:"16px 0 0 16px",
        backgroundColor: "white",
        order: 1,
        [theme.breakpoints.up("md")]: {
            order: 2
        }
    },
    gridRight:{
        textAlign:"center",
        background:"url("+ backgroundImage +")",
        paddingBottom: "40px",
        order: 2,
        [theme.breakpoints.up("md")]: {
            order: 1
        }
    },
    logo:{
        width:"150px",
        padding: "30px 0 20px 0",
    },
    heading:{
        color:"#2E7FCE",
        fontFamily:font,
        paddingTop:"50px",
    },
    subheading:{
        color:"#535353",
        fontSize:"18px",
    },
    e1:{
        position:"absolute",
        top:"0",
        left:"0",
        width: "200px",
    },
    e2:{
        position:"absolute",
        bottom:"0",
        right:"0",
        width: "100px",
    },
    inputText:{
        width:"100%",
        margin:"10px 0px",
    },
    formButton:{
        width: "224px",
        height: "56px",
        background: "#78A0FF",
        borderRadius: "55px",
        margin:"20px",
        color: "white",
    },
    heading2:{
        color:"white",
        fontFamily:font2,
        paddingTop:"50px",
        fontWeight: "700",
    },
    subheading2:{
        color: "white",
        padding:"30px 0px",
    },
    signInLink:{
        color: "white",
        textDecoration: "none",
        padding: "3px 20px",
        border: "3px solid white",
        fontSize: "24px",
        fontWeight: "600",
        marginBottom:"40px",
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

   // Using useState to store and update login info.

    const [info, updateInfo] = React.useState({
        username: '',
        password: ''
    });

    // This function will be called upon clicking the button and will send the login info to the back end.

    function sendInfo(){
        axios.post(`/login`, querystring.stringify({username: info.username, password: info.password}), {
            headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            credentials: 'include',
            withCredentials: true
        }).then(function(response){
        if (response.status === 200) {
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('newUser',"false");
            window.location = `/profile/${response.data.username}`
        }
        console.log(response);
      });
    }

    // Function to update the info.

    const handleChange = (prop) => (event) => {
        updateInfo({...info, [prop]: event.target.value});
        // console.log(info);
    };

    //These two functions help operate the Visibility Icon.

    const handleClickShowPassword = () => {
        updateInfo({ ...info, showPassword: !info.showPassword });
      };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (
    <div className={classes.root}>
        <div className={classes.root2}>
            <Container className={classes.padd70} maxWidth="lg">
                <Grid container className={classes.gridContainer}>
                    <Grid item className={classes.gridRight} md={4} xs={12}>
                        <img src={logo} className={classes.logo} alt="logo"></img>  
                        <Typography className={classes.heading2} variant="h4">New Here!?</Typography>
                        <Typography className={classes.subheading2} variant="h5">Start your journey with us! <br></br>Sign up now</Typography>
                        <a href="/signup" className={classes.signInLink}>
                            Sign Up
                        </a> 
                    </Grid>
                    <Grid item className={classes.gridLeft} md={8} xs={12}>
                        <Typography className={classes.heading} variant="h3">Sign In <br></br>to Seroton-Inn</Typography>
                        <a href="/auth/google">
                            <img src={gButton} className={classes.logo} alt="google button"></img>
                        </a> 
                        <Typography className={classes.subheading}>or Sign in the old-fashioned way</Typography>
                        <Container maxWidth="sm">
                            <form noValidate autoComplete="off">
                                <TextField id="outlined-basic" 
                                className={classes.inputText} 
                                label="Username" 
                                value={info.username}
                                onChange={handleChange('username')}
                                variant="outlined" />
                                <TextField id="outlined-basic" 
                                className={classes.inputText} 
                                type={info.showPassword ? 'text' : 'password'}
                                label="Password" 
                                value={info.password}
                                onChange={handleChange('password')}
                                variant="outlined" 
                                InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                            {info.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}   
                                />
                                <Button onClick={sendInfo} className={classes.formButton} variant="contained">Sign In</Button>
                            </form>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>    
    </div>
  );
}