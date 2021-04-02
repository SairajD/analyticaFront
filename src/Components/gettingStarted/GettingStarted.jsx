import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
    topStyling:{
			position:"absolute",
			top:0,
			zIndex:-1
		},
		botStyling:{
			position:"absolute",
			bottom:0,
			zIndex:-1
		},
		logoIcon:{
			backgroundColor:theme.palette.alternate.main,
			marginTop:theme.spacing(2),
			fontSize:theme.spacing(2),
			marginLeft:theme.spacing(2),
			fontWeight:"bold",
		},
		appName:{
			color:theme.palette.alternate.main,
			marginTop:theme.spacing(2),
			fontSize:theme.spacing(3),
			fontWeight:"bold",
			zIndex:1000
		},
		loginButton:{
			marginTop:theme.spacing(2),
			color:"#ffffff"
		},
		svgVector:{
			position:"absolute",
			top:"20vh",
			left:"10vw"
		},
		infoContainer:{
			position:"absolute",
			top:"20vh",
			right:"10vw",
			width:"35vw"
		},
		infoTitle:{
			fontSize:theme.spacing(4),
			fontWeight:"bold",
		},
		infoDesc:{
			marginTop:theme.spacing(2),
			fontWeight:500
		},
		btnContainer:{
			position:"absolute",
			bottom:"25vh",
			right:"10vw",
			width:"35vw"
		},
		btnSubContainer:{
			display:"flex",
			marginTop:theme.spacing(4)
		},
		btnDesc:{
			fontWeight:700,
			marginTop:theme.spacing(3),
			marginRight:theme.spacing(4)
		},
		slideGroup:{
			display:"flex",
			flexDirection: "row",
			position:"absolute",
			bottom:"10vh",
			width:"100vw",
			justifyContent:"center"
		},
		slideBtn:{
			marginLeft:theme.spacing(2),
			marginRight:theme.spacing(2),
			color:theme.palette.alternate.main
		}
}))

function GettingStarted() {

    	const classes = useStyles();
		const [value, setValue] = useState('1');
		const history = useHistory();

		const handleChange = (event) => {
			setValue(event.target.value);
		};

    return (
        <div>
					<CssBaseline/>
					<svg className={classes.topStyling} width="100vw" viewBox="0 0 1280 329" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_dd)">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M390.244 223.453C418.83 220.36 447.485 228.205 472.08 243.098C551.02 290.897 665.993 321 794 321C872.346 321 945.81 309.723 1009.12 290.015C1027.45 284.309 1046.89 282.963 1065.79 286.329C1108.31 293.902 1153.77 298 1201 298C1227.98 298 1254.39 296.662 1280 294.103V4H0L0 159.774C78.0143 201.924 185.862 228 305 228C334.183 228 362.688 226.435 390.244 223.453Z" fill="#FFB174"/>
						</g>
						<defs>
						<filter id="filter0_dd" x="-4" y="0" width="1288" height="329" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
						<feOffset dy="4"/>
						<feGaussianBlur stdDeviation="2"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
						<feOffset/>
						<feGaussianBlur stdDeviation="2"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
						<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
						</filter>
						</defs>
					</svg>
					<svg className={classes.botStyling} width="100vw" viewBox="0 0 1280 264" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M392.244 65.454C420.83 62.3603 449.485 70.2057 474.08 85.0986C553.02 132.898 667.993 163.001 796 163.001C874.346 163.001 947.81 151.724 1011.12 132.016C1029.45 126.309 1048.89 124.964 1067.79 128.33C1110.31 135.903 1155.77 140.001 1203 140.001C1229.28 140.001 1255.02 138.732 1280 136.301V264.001H0L0 0.6875C78.1659 43.4755 186.841 70.0008 307 70.0008C336.183 70.0008 364.688 68.4362 392.244 65.454Z" fill="#FFB174"/>
					</svg>
					<Grid container className={classes.navGroup}>
						<Grid item xs={1}>
							<Avatar className={classes.logoIcon}> 
								A
							</Avatar>
						</Grid>
						<Grid item xs={1}>
							<Typography className={classes.appName}>
								ANALYTICA
							</Typography>
						</Grid>
						<Grid item xs={7}>
						</Grid>
						<Grid item xs={2}>
							<Button className={classes.loginButton} variant="contained" color="secondary" onClick={()=>{history.replace("/Register");window.location.reload(false);}}>
								Create New Account
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button className={classes.loginButton} variant="contained" color="secondary" onClick={()=>{history.replace("/Login");window.location.reload(false);}}>
								Sign In
							</Button>
						</Grid>
					</Grid>
					<div className={classes.slideGroup}>
						<Radio
							className={classes.slideBtn}
							checked={value === '1'}
							onChange={handleChange}
							onClick={()=>{history.push("/")}}
							value="1"
							name="slide"
							color="alternate"
						/>
						<Radio
							className={classes.slideBtn}
							checked={value === '2'}
							onChange={handleChange}							
							onClick={()=>{history.push("/SentimentAnalysis")}}
							value="2"
							name="slide"
							color="alternate"
						/>
						<Radio
							className={classes.slideBtn}
							checked={value === '3'}
							onChange={handleChange}
							onClick={()=>{history.push("/TrendAnalysis")}}
							value="3"
							name="slide"
							color="alternate"
						/>
						<Radio
							className={classes.slideBtn}
							checked={value === '4'}
							onChange={handleChange}
							onClick={()=>{history.push("/DataVisualization")}}
							value="4"
							name="slide"
							color="alternate"
						/>
						<Radio
							className={classes.slideBtn}
							checked={value === '5'}
							onChange={handleChange}
							onClick={()=>{history.push("/EasyUpload")}}
							value="5"
							name="slide"
							color="alternate"
						/>
					</div>
				</div>
    )
}

export default GettingStarted
