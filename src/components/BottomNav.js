import React, { useState } from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { makeStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "white",
        boxShadow: '0px 0px 50px -18px rgba(0, 0, 0, 0.25)',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            '& .MuiSvgIcon-root':{
                fontSize: '20px'
            },
            '& .Mui-selected':{
                fontSize: '14px'
            },
            '& .MuiBottomNavigationAction-label':{
                display: 'none'
            }
        },
        [theme.breakpoints.up('sm')]:{
            '& .MuiBottomNavigation-root':{
                maxWidth: '1280px',
                margin: "0px auto 0px auto"
            },
            '& .MuiSvgIcon-root':{
                fontSize: '24px'
            },
            '& .Mui-selected':{
                fontSize: '16px'
            },
            '& .MuiBottomNavigationAction-label':{
                marginTop: '4px',
                fontSize: '16px'
            }
        }
    }
}))

function BottomNav() {
    const classes = useStyles()

    const [value, setValue] = useState(0)

    return (
        <div className={classes.root}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction label="Explore" icon={<ExploreOutlinedIcon />} />
                <BottomNavigationAction label="Create" icon={<AddCircleOutlineOutlinedIcon />} />
                <BottomNavigationAction label="Activity" icon={<SpaOutlinedIcon />} />
                <BottomNavigationAction label="Profile" icon={<AccountCircleOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default BottomNav
