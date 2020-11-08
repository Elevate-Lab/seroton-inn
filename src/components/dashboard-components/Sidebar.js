import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import EcoIcon from '@material-ui/icons/Eco';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        display: 'none',
        maxWidth: "80px",
        backgroundColor: "#362073",
        maxHeight: "90%",
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            minWidth: "80px"
        },
        [theme.breakpoints.up('md')]: {
            width: "100px"
        }
    },
    sidebarIconsGrid: {
        marginBottom: '10px',
        marginTop: "10px",
        borderRadius: "50px",
        backgroundColor: " #E3E1FF",
        width: "50px",
        height: "50px",
    },
    sidebarIcons: {
        width: "20px",
        height: "20px"
    }
}));

export default function Sidebar(){
    const classes = useStyles();

    return(
        <div className={classes.sidebar}>
            <Grid container className={classes.sidebarGrid}>
                <Grid container className={classes.sidebarIconsContainer}
                    direction="column"
                    alignItems="center"
                >
                    <Grid container className={classes.sidebarIconsGrid} alignItems="center" justify="center">
                        <DashboardIcon className={classes.sidebarIcons} />
                    </Grid>
                    <Grid container className={classes.sidebarIconsGrid} alignItems="center" justify="center">
                        <EcoIcon className={classes.sidebarIcons} />
                    </Grid>
                    <Grid container className={classes.sidebarIconsGrid} alignItems="center" justify="center">
                        <SupervisorAccountIcon className={classes.sidebarIcons} />
                    </Grid>
                    <Grid container className={classes.sidebarIconsGrid} alignItems="center" justify="center">
                        <AccountCircleIcon className={classes.sidebarIcons} />
                    </Grid>
                </Grid>
                <Grid container className={classes.settingGrid}
                    direction="column"
                    justify="flex-end"
                    alignItems="center"
                >
                    <Grid container className={classes.sidebarIconsGrid} alignItems="center" justify="center">
                        <SettingsIcon className={classes.sidebarIcons} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

