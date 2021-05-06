import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import DougnutChart from '../charts/doughnut/DougnutChart';
import LineChart from '../charts/line/LineChart';
import axios from 'axios';
import { Grid, Typography, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Collapse from '@material-ui/core/Collapse';
import { Divider } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
	dataSpace: {
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		width:"32vw",
		height:"60vh"
	},
	profileBtn: {
		fontSize: theme.spacing(2),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		margin: theme.spacing(2),
		height:"60vh"
	},
	profileChanges: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	},
	historyDataSpace:{
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		width:"32vw",
		height:"60vh"
	},
	historyTitleSpace:{
		margin: theme.spacing(2),
		padding: theme.spacing(1),
	},
	dataText:{
		fontSize:theme.spacing(2),
		fontWeight:"bold",
		marginTop:theme.spacing(1.5),		
		marginBottom:theme.spacing(1.5)
	},
	dataTitle:{
		fontSize:theme.spacing(3),
		fontWeight:"bold",
		marginTop:theme.spacing(1.5),		
		marginBottom:theme.spacing(1.5)
	},
	historyPostSpace:{		
		margin: theme.spacing(2),
		padding: theme.spacing(2),
	},
	timelineCommentTitle:{
        fontWeight:"bold",
        fontSize:theme.spacing(2.5),
        marginLeft: theme.spacing(2),
        marginTop:theme.spacing(2),
    },
	timelineContent:{
        width : 1000,
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        flexWrap: 'wrap',
        wordWrap: 'break-word',
    },
		'@media only screen and (max-width: 600px)':{
      dataSpace: {
				margin: theme.spacing(2),
				padding: theme.spacing(2),
				width:"88vw",
				height:"55vh"
			},
			profileBtn: {
				fontSize: theme.spacing(2),
				paddingTop: theme.spacing(1),
				paddingBottom: theme.spacing(1),
				width:"80vw",
				height:"10vh",
				margin:"10px auto"
			},
			profileChanges: {
				paddingLeft: theme.spacing(4),
				paddingRight: theme.spacing(4),
			},
			historyDataSpace:{
				margin: theme.spacing(2),
				padding: theme.spacing(2),
				width:"88vw",
				height:"55vh"
			},
			historyTitleSpace:{
				margin: theme.spacing(2),
				padding: theme.spacing(1),
			},
			dataText:{
				fontSize:theme.spacing(2),
				fontWeight:"bold",
				marginTop:theme.spacing(1.5),		
				marginBottom:theme.spacing(1.5)
			},
			dataTitle:{
				fontSize:theme.spacing(3),
				fontWeight:"bold",
				marginTop:theme.spacing(1.5),		
				marginBottom:theme.spacing(1.5)
			},
			historyPostSpace:{		
				margin: theme.spacing(2),
				padding: theme.spacing(2),
			},
			timelineCommentTitle:{
						fontWeight:"bold",
						fontSize:theme.spacing(2.5),
						marginLeft: theme.spacing(2),
						marginTop:theme.spacing(2),
				},
			timelineContent:{
						width : 1000,
						marginBottom: theme.spacing(2),
						marginLeft: theme.spacing(2),
						flexWrap: 'wrap',
						wordWrap: 'break-word',
				},
    }
}));


function SearchGraph(props) {

	const classes = useStyles();
	const dashLoc = useSelector(state => state.changeDash);

	const [facebookData, setFacebookData] = useState({
		series: [], options: {
			labels: [],
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: true,
				position: 'bottom',
				horizontalAlign: 'center',
				floating: false,
				fontSize: '12px',
				fontWeight: 400,
				inverseOrder: false,
				offsetX: 0,
				offsetY: 0,
				markers: {
					width: 12,
					height: 12,
					strokeWidth: 0,
					strokeColor: '#fff',
					radius: 24,
				},
				itemMargin: {
					horizontal: 5,
					vertical: 5
				},
				onItemClick: {
					toggleDataSeries: true
				},
				onItemHover: {
					highlightDataSeries: true
				},
			},
			chart: {
				animations: {
					enabled: true,
					easing: 'easeinout',
					speed: 800,
					animateGradually: {
						enabled: true,
						delay: 150
					},
					dynamicAnimation: {
						enabled: true,
						speed: 350
					}
				}
			}
		}
	})

    // const [commentOpen, setCommentOpen] = useState(false);
  
    // const handleClick = () => {
    //   setCommentOpen(!commentOpen);
    // };

	const graphDisplay = () => {
		if (dashLoc === "History") {
			return (
				<Grid container>
					<Grid item xs={12} sm={12} align="center">
						<Paper elevation={3} className={classes.historyTitleSpace} >
							<Typography variant="body1" color="textPrimary" className={classes.dataTitle}>
								{props.Querry}
							</Typography>
						</Paper>
					</Grid>
					{/* {props.dataTweet!==undefined} */}
					<Grid item xs={12} sm={5} align="center">
						<Paper elevation={3} className={classes.historyDataSpace} >
							<Typography variant="body1" color="textPrimary" className={classes.dataText}>
								Twitter Sentiment Analysis
							</Typography>
							<DougnutChart data={props.dataTweet} width="300" height="350" />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={5} align="center">
						<Paper elevation={3} className={classes.historyDataSpace}>
							<Typography variant="body1" color="textPrimary" className={classes.dataText}>
								Instagram Sentiment Analysis
							</Typography>
							<DougnutChart data={props.dataInsta} width="300" height="350" />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={2} align="center" className={classes.profileChanges}>
						<Button variant="contained" fullWidth color="secondary" className={classes.profileBtn} >
							Show More
						</Button>
					</Grid>
					{/* <Grid item xs={} sm={12} align="center" className={classes.postChanges}>
						<Paper elevation={3} className={classes.historyPostSpace} id="post-space">
							<Collapse in={commentOpen} timeout="auto" unmountOnExit>
								<Typography className={classes.timelineCommentTitle}>Posts</Typography>
								{
									props.dataInsta.Negative.map((el, i)=>{
										return(<React.Fragment><Typography className={classes.timelineContent}>hi</Typography>       
												<Divider/></React.Fragment> )
									})
								}								  
							</Collapse>
						</Paper>
					</Grid> */}
				</Grid>
			)
		}
		else {
			return (<Grid container>
				<Grid item xs={12} sm={6} align="center">
					<Paper elevation={3} className={classes.dataSpace}>
						<Typography variant="body1" color="textPrimary" className={classes.dataText}>
							Twitter Sentiment Analysis
						</Typography>
						<DougnutChart data={props.dataTweet} width="300" height="350" />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} align="center">
					<Paper elevation={3} className={classes.dataSpace}>
						<Typography variant="body1" color="textPrimary" className={classes.dataText}>
							Instagram Sentiment Analysis
						</Typography>
						<DougnutChart data={props.dataInsta} width="300" height="350" />
					</Paper>
				</Grid>
			</Grid>)
		}

	}

	return (
		<div>
			<CssBaseline />
			{graphDisplay()}
		</div>
	)
}

export default SearchGraph
