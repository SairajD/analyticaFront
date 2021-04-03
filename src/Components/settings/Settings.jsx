import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import Collapse from '@material-ui/core/Collapse';
import { Button, CssBaseline, Divider, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiPhoneNumber from "material-ui-phone-number";
import {useDispatch, useSelector} from 'react-redux';
import {darkLight, dashLoc} from '../reduxStore/actions/addTweets';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
		settingsRoot: {
			width: `calc(100% - ${drawerWidth})`,
			marginLeft: drawerWidth
		},
		settingsToolbar: theme.mixins.toolbar,
		profileChanges:{
			paddingTop:theme.spacing(5),
			paddingLeft:theme.spacing(4),
			paddingRight:theme.spacing(4),
		},
		subTitle:{
			fontSize:theme.spacing(3),
			fontWeight:"bold"
		},
		profileBtn:{
			fontSize:theme.spacing(2),
			paddingTop:theme.spacing(1),
			paddingBottom:theme.spacing(1),
			marginTop:theme.spacing(0.5),
			marginBottom:theme.spacing(0.5),
		},
		deleteBtn:{
			fontSize:theme.spacing(2),
			paddingTop:theme.spacing(1),
			paddingBottom:theme.spacing(1),
			marginTop:theme.spacing(0.5),
			marginBottom:theme.spacing(0.5),
			backgroundColor:theme.palette.alternate.main,
			color:"#ffffff",
			'&:hover':{
				backgroundColor:theme.palette.alternate.main,
				opacity:0.8,
			}
		},
		'@global': {
			'*::-webkit-scrollbar': {
				width: '0.4em'
			},
			'*::-webkit-scrollbar-track': {
				'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
			},
			'*::-webkit-scrollbar-thumb': {
				backgroundColor: 'rgba(0,0,0,.1)',
				outline: '1px solid slategrey'
			}
		}
  }));

function Settings() {

	const dispatch = useDispatch();
    const classes = useStyles();
		const [checkedTwitter, setCheckedTwitter] = useState(false);
		const [checkedInstagram, setCheckedInstagram] = useState(false);
		const [checkedNotifications, setCheckedNotifications] = useState(false);
		const checkedDarkLight = useSelector(state=>state.changeTheme);

		const handleChangeTwitter = () => {
			setCheckedTwitter((prev) => !prev);
		};

		const handleChangeInstagram = () => {
			setCheckedInstagram((prev) => !prev);
		};

		const handleChangeNotifications = () => {
			setCheckedNotifications((prev) => !prev);
		};
		
		const handleChangeDarkLight = () => {
			dispatch(darkLight())
		};

		useEffect(() => {
    
			dispatch(dashLoc("Settings"));
																				   
		  }, [])

    return (
        <div className={classes.settingsRoot}>
					<CssBaseline/>
					<div className={classes.settingsToolbar}/>
          <div className={classes.accountSettings}>
						<Grid container>
								<Grid item xs={12} className={classes.profileChanges}>
									<Typography className={classes.subTitle}>
										Profile Settings
									</Typography>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<TextField
										fullWidth
										type="text"
										id="change-userName"
										label="User Name"
										defaultValue="Value"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<TextField
										fullWidth
										type="text"
										id="change-firstName"
										label="First Name"
										defaultValue="Value"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<TextField
										fullWidth
										type="text"
										id="change-lastName"
										label="Last Name"
										defaultValue="Value"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<MuiPhoneNumber
										fullWidth
										type="text"
										id="change-mobile"
										label="Mobile Number"
										variant="outlined"
                    defaultCountry={"in"}
										value="+911234567890"
                  />
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<TextField
										fullWidth
										type="email"
										id="change-email"
										label="E-mail"
										defaultValue="Value"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<Button variant="contained" fullWidth color="Secondary" className={classes.profileBtn}>
										Make Changes
									</Button>
								</Grid>
						</Grid>
          </div>
					<div className={classes.accountSettings}>
						<Grid container>
								<Grid item xs={12} className={classes.profileChanges}>
									<Typography className={classes.subTitle}>
										Change Password
									</Typography>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<TextField
										fullWidth
										type="password"
										id="current-password"
										label="Current Password"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<TextField
										fullWidth
										type="password"
										id="new-password"
										label="New Password"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<TextField
										fullWidth
										type="password"
										id="confirm-password"
										label="Confirm Password"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={4}></Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<Button variant="contained" fullWidth color="Secondary" className={classes.profileBtn}>
										Change Password 
									</Button>
								</Grid>
								<Grid item xs={4}></Grid>
						</Grid>
          </div>
					<div className={classes.accountSettings}>
						<Grid container>
								<Grid item xs={6} className={classes.profileChanges}>
									<Typography className={classes.subTitle}>
										Link Account
									</Typography>
								</Grid>
								<Grid item xs={6} className={classes.profileChanges}>
									<Typography className={classes.subTitle}>
										Account Settings
									</Typography>
								</Grid>
								<Grid item xs={6} allign="center">
									<FormControlLabel
										control={<Switch checked={checkedTwitter} onChange={handleChangeTwitter} />}
										label="Link Twitter"
										className={classes.profileChanges}
									/>
									<FormControlLabel
										control={<Switch checked={checkedInstagram} onChange={handleChangeInstagram} />}
										label="Link Instagram"
										className={classes.profileChanges}
									/>
								</Grid>
								<Grid item xs={6} allign="center">
									<FormControlLabel
										control={<Switch checked={checkedNotifications} onChange={handleChangeNotifications} />}
										label="Allow Notifications"
										className={classes.profileChanges}
									/>
									<FormControlLabel
										control={<Switch checked={checkedDarkLight} onChange={handleChangeDarkLight} />}
										label="Dark Mode"
										className={classes.profileChanges}
									/>
								</Grid>
						</Grid>
          </div>
					<div className={classes.accountSettings}>
						<Grid container>
								<Grid item xs={12} className={classes.profileChanges}>
									<Typography className={classes.subTitle}>
										Permanently Delete Account
									</Typography>
								</Grid>
								<Grid item xs={4} align="center" className={classes.profileChanges}>
									<Button variant="contained" fullWidth className={classes.deleteBtn}>
										Delete 
									</Button>
								</Grid>								
						</Grid>
          </div>     
					<div className={classes.settingsToolbar}/>           
        </div>
    )
}

export default Settings
