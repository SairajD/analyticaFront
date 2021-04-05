import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import DougnutChart from '../charts/doughnut/DougnutChart';
import LineChart from '../charts/line/LineChart';
import axios from 'axios';
import { Grid, Typography, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
	dataSpace: {
		margin: theme.spacing(2),
		padding: theme.spacing(2),
	},
	profileBtn: {
		fontSize: theme.spacing(2),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		marginTop: theme.spacing(20),
	},
	profileChanges: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	}
}));


function SearchGraph({ displayData }) {

	const classes = useStyles();
	const dashLoc = useSelector(state => state.changeDash);

	const [facebookData, setFacebookData] = useState({
		series: [], options: {
			labels: ["Positives", "Negatives", "Neutral"],
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
	useEffect(() => {
		if (displayData.Positive.length == 0 && displayData.Negative.length == 0 && displayData.Neutral.length) {
			return
		}
		console.log("chechOut" + displayData.Positive.length)
		setFacebookData({
			series: [displayData.Positive.length, displayData.Negative.length, displayData.Neutral.length],
			options: {
				labels: ["Positives", "Negatives", "Neutral"],
				dataLabels: {
					enabled: true,
				},
			}
		})


	}, [displayData])

	const graphDisplay = () => {

		if (dashLoc === "History") {
			return (
				<Grid container>
					<Grid item xs={5} align="center">
						<Paper elevation={3} className={classes.dataSpace}>
							<Typography variant="body1" color="textPrimary">
								Sentiment Analysis
						</Typography>
							<DougnutChart data={facebookData} width="250" height="300" />
						</Paper>
					</Grid>
					{/* <Grid item xs={5} align="center">
						<Paper elevation={3} className={classes.dataSpace}>
							<Typography variant="body1" color="textPrimary">
								Sentiment Analysis
						</Typography>
							<DougnutChart data={facebookData} width="250" height="300" />
						</Paper>
					</Grid> */}
					<Grid item xs={2} align="center" className={classes.profileChanges}>
						<Button variant="contained" fullWidth color="Secondary" className={classes.profileBtn}>
							Show More
					</Button>
					</Grid>
				</Grid>
			)
		}
		else {
			return (<Grid container>
				<Grid item xs={6} align="center">
					<Paper elevation={3} className={classes.dataSpace}>
						<Typography variant="body1" color="textPrimary">
							Sentiment Analysis
								</Typography>
						<DougnutChart data={facebookData} width="250" height="300" />
					</Paper>
				</Grid>
				<Grid item xs={6} align="center">
					<Paper elevation={3} className={classes.dataSpace}>
						<Typography variant="body1" color="textPrimary">
							Sentiment Analysis
								</Typography>
						<DougnutChart data={facebookData} width="250" height="300" />
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
