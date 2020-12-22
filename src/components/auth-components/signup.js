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

// For sending info to the back end:
import axios from "axios";
import querystring from "querystring";

import "./auth.css";

axios.defaults.withCredentials = true;




const font =  "'Secular One', sans-serif";
const font2 =  "'Roboto'";

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
    },
    gridRight:{
        textAlign:"center",
        background:"url("+ backgroundImage +")",
        paddingBottom: "40px",
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

    // Using useState to store and update sign up info.

    const [info, updateInfo] = React.useState({
        username: '',
        email: '',
        password: '',
        cpassword: '',
        showPassword: false
    });

    // Note: This function will send the username, email and password to the back end, which will be stored in the local database.

    function sendInfo() {

        // This condition ensures that the passwords match.

        if(info.password!==info.cpassword) {
            alert("The password in both fields should match! Please try again.");
        } else {

            axios.post(`/register`, querystring.stringify({username: info.username, password: info.password, email: info.email}), {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                credentials: 'include',
                withCredentials: true
              }).then(function(response){
                if (response.status === 200) {
                  localStorage.setItem('username', response.data.username)
                  localStorage.setItem('newUser',"true");
                  window.location = `/profile/${response.data.username}`          
                }
                console.log(response);
              });
        }

        
    }

    //This function helps update the info.

    const handleChange = (prop) => (event) => {
        updateInfo({ ...info, [prop]: event.target.value });
      };

      //Both of these functions below help operate the Visiblity Icon.

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
                    <Grid item className={classes.gridLeft} md={8} xs={12}>
                        <Typography className={classes.heading} variant="h3">Create Account</Typography>
                        <a href="/auth/google">
                            <img src={gButton} className={classes.logo} alt="google button"></img>
                        </a> 
                        <Typography className={classes.subheading}>or use your email for registration</Typography>
                        <Container maxWidth="sm">
                            <form noValidate autoComplete="off">
                                <TextField id="outlined-basic" 
                                    className={classes.inputText} 
                                    value={info.username} 
                                    label="Username" 
                                    onChange={handleChange('username')}
                                    variant="outlined" />
                                <TextField id="outlined-basic" 
                                    className={classes.inputText} 
                                    value={info.email} 
                                    label="Email" 
                                    onChange={handleChange('email')}
                                    variant="outlined" />
                                <TextField id="outlined-basic" 
                                    className={classes.inputText} 
                                    type={info.showPassword ? 'text' : 'password'}
                                    value={info.password} 
                                    label="Password" 
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
                                <TextField id="outlined-basic" 
                                    className={classes.inputText} 
                                    type={info.showPassword ? 'text' : 'password'}
                                    value={info.cpassword} 
                                    label="Confirm Password" 
                                    onChange={handleChange('cpassword')}
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
                                <Button onClick={sendInfo} className={classes.formButton} variant="contained">Sign Up</Button>
                            </form>
                        </Container>
                    </Grid>
                    <Grid item className={classes.gridRight} md={4} xs={12}>
                        <img src={logo} className={classes.logo} alt="logo"></img>  
                        <Typography className={classes.heading2} variant="h4">Already Joined!</Typography>
                        <Typography className={classes.subheading2} variant="h5">To keep connected with us login <br></br> with your personal info</Typography>
                        <a href="/login" className={classes.signInLink}>
                            Sign In
                        </a> 
                    </Grid>
                </Grid>
            </Container>
        </div>    
    </div>
  );
}