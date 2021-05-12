import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PollIcon from '@material-ui/icons/Poll';
import EventIcon from '@material-ui/icons/Event';
import SendIcon from '@material-ui/icons/Send';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {dashLoc} from '../reduxStore/actions/addTweets';
import Axios from 'axios';
import cookies from 'react-cookies';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import CloseIcon from '@material-ui/icons/Close';
import PublicIcon from '@material-ui/icons/Public';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Picker from 'emoji-picker-react';

const drawerWidth = 240;

const url = 'https://analytica-parsb-api.herokuapp.com';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  uploadRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  uploadToolbar: theme.mixins.toolbar,
  paper: {
    margin: theme.spacing(6,6,4,6),
    padding: theme.spacing(0,4,4,4),
		borderRadius:theme.spacing(3),
  },
	profilePic: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginBottom:theme.spacing(4),
		marginTop:theme.spacing(4)
  },
	descriptionArea:{
		display:"flex",
		alignItems:"flex-start"
	},
	descriptionText:{
		width:"100%",
		marginLeft:theme.spacing(4),
		marginTop:theme.spacing(5),
    marginBottom:theme.spacing(2),
		border:"none",
		'&:focus':{
			border:"none",
			outline:"none"
		},
		'&:active':{
			border:"none",
			outline:"none"
		},
		fontFamily:theme.typography.body1.fontFamily,
		fontSize:theme.typography.body1.fontSize,
		lineHeight:theme.typography.body1.lineHeight,
		letterSpacing:theme.typography.body1.letterSpacing,
		fontWeight:theme.typography.body1.fontWeight,
		resize:"none",
	},
	buttonArea:{
    margin: theme.spacing(1,1,1,1),
	},
	buttonAreaItem:{
		padding: theme.spacing(2,1,4,1),
	},
	buttonAreaIcon:{
		width:theme.spacing(10),
		height:theme.spacing(10),
	},
	postButton:{
		marginLeft:theme.spacing(5)
	},
	postSocialCheck:{
		paddingLeft:theme.spacing(2),
		paddingRight:theme.spacing(2),
	},
	formControl:{
		minWidth:theme.spacing(35),
		marginLeft:theme.spacing(4),
		marginRight:theme.spacing(4),
	},
	displayZone:{
		display:"none",
		width:"70vw",
		margin:"0 auto",
	},
	paperPoll:{
    padding: theme.spacing(1,1,3,1),
		borderRadius:theme.spacing(2),
		display:"flex",
		alignItems:"center",
		justifyContent:"space-around"
	},
	pollChoice:{
		width:theme.spacing(50),
	},
	pollButton:{
		height:theme.spacing(8),
		width:theme.spacing(8),
		borderRadius:"50%",
		margin:theme.spacing(2,0,2,0)
	},
	pollChoiceGroup:{
		display:"flex",
		flexDirection:"column",
		alignItems:"center",
	},
	removePollButton:{
		color:theme.palette.alternate.main,
		borderColor:theme.palette.alternate.main,
		margin:theme.spacing(2,0,2,0)
	},
	formControlPoll:{
		minWidth:theme.spacing(30),
		marginTop:theme.spacing(2)
	},
	pollLengthTitle:{
		fontSize:theme.spacing(2),
		fontWeight:"bold",
		marginTop:theme.spacing(2)
	},
	schedulerSubTitle:{		
		fontSize:theme.spacing(2),
		fontWeight:"bold",
		marginTop:theme.spacing(2)
	},
	schedulerTitle:{		
		fontSize:theme.spacing(2.5),
		fontWeight:"bold",
		marginTop:theme.spacing(2)
	},
	paperSchedule:{
    padding: theme.spacing(1,1,3,1),
		borderRadius:theme.spacing(2),
		display:"flex",
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-around"		
	},
	scheduler:{
		display:"flex",
		flexDirection:"column",
	},
	scheduler2:{
		display:"flex",
		flexDirection:"column",
		paddingTop:theme.spacing(6)
	},
	schedulerButton:{
		display:"flex",
		flexDirection:"column",
		alignItems:"center"
	},
	formControlScheduler:{
		minWidth:theme.spacing(30),
		marginTop:theme.spacing(2),
	},
	confirmSchedulerButton:{
		margin:theme.spacing(2,0,2,0)
	},
	cancelSchedulerButton:{
		height:theme.spacing(8),
		width:theme.spacing(8),
		borderRadius:"50%",
		color:theme.palette.alternate.main,
		borderColor:theme.palette.alternate.main,
		margin:theme.spacing(2,0,2,0)
	},
	paperImage:{
		padding: theme.spacing(1,1,1,1),
		borderRadius:theme.spacing(2),
		display:"flex",
		alignItems:"center",
		justifyContent:"space-around"	
	},
	paperImageItem:{
		padding:theme.spacing(2),
	},
	paperImageImg:{		
		height:theme.spacing(20),
		borderRadius:theme.spacing(2),
	},
	visibleCodeIcon:{
		marginRight:theme.spacing(2),
	},
	visibleCodeClass:{
		padingBottom:theme.spacing(2)
	},
	visibleCodeGroup:{
		display:"flex",
		alignItems:"center"
	},
	emojiDisplayZone:{
		display:"flex",
		alignItems:"center",
		justifyContent:"center",
		paddingBottom:theme.spacing(2),
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
  },
  '@media only screen and (max-width: 600px)':{
    uploadRoot: {
      width: "100%",
      marginLeft:0,
    },
		label:{
			backgroundColor:"#fafafa",
			paddingLeft:theme.spacing(1),
			paddingRight:theme.spacing(1),
		},    
		paper: {
			margin: theme.spacing(2,2,2,2),
			padding: theme.spacing(0,2,2,2),
			borderRadius:theme.spacing(3),
		},
		profilePic: {
			width: theme.spacing(6),
			height: theme.spacing(6),
			marginBottom:theme.spacing(4),
			marginTop:theme.spacing(4)
		},
		descriptionArea:{
			display:"flex",
			alignItems:"flex-start"
		},
		descriptionText:{
			width:"100%",
			marginLeft:theme.spacing(2),
			marginTop:theme.spacing(5),
			marginBottom:theme.spacing(2),
			border:"none",
			'&:focus':{
				border:"none",
				outline:"none"
			},
			'&:active':{
				border:"none",
				outline:"none"
			},
			fontFamily:theme.typography.body1.fontFamily,
			fontSize:theme.typography.body1.fontSize,
			lineHeight:theme.typography.body1.lineHeight,
			letterSpacing:theme.typography.body1.letterSpacing,
			fontWeight:theme.typography.body1.fontWeight,
			resize:"none",
		},
		buttonArea:{
			margin: theme.spacing(1,1,1,1),
			placeItems:"center"
		},
		buttonAreaItem:{
			padding: theme.spacing(0,1,1,1),
		},
		buttonAreaIcon:{
			width:theme.spacing(7.5),
			height:theme.spacing(7.5),
		},
		postButton:{
			marginLeft:theme.spacing(15),
			marginTop:theme.spacing(1),
			marginBottom:theme.spacing(1),
		},
		postSocialCheck:{
			paddingLeft:theme.spacing(10),
			marginTop:theme.spacing(1),
		},
		formControl:{
			minWidth:theme.spacing(35),
			marginLeft:theme.spacing(3),
			marginRight:theme.spacing(3),
		},
		displayZone:{
			display:"none",
			width:"80vw",
			margin:"0 auto",
		},
		paperPoll:{
			marginBottom:theme.spacing(4),
			padding: theme.spacing(1,1,1,1),
			borderRadius:theme.spacing(2),
			display:"flex",
			flexDirection:"column",
			alignItems:"center",
			justifyContent:"space-around"
		},
		pollChoice:{
			width:theme.spacing(35),
		},
		pollButton:{
			height:theme.spacing(8),
			width:theme.spacing(8),
			borderRadius:"50%",
			margin:theme.spacing(2,0,2,0)
		},
		pollChoiceGroup:{
			display:"flex",
			flexDirection:"column",
			alignItems:"center",
		},
		removePollButton:{
			color:theme.palette.alternate.main,
			borderColor:theme.palette.alternate.main,
			margin:theme.spacing(2,0,2,0)
		},
		formControlPoll:{
			minWidth:theme.spacing(30),
			marginTop:theme.spacing(1),
			marginBottom:theme.spacing(1),
		},
		pollLengthTitle:{
			fontSize:theme.spacing(2),
			fontWeight:"bold",
			marginTop:theme.spacing(2)
		},
		schedulerSubTitle:{		
			fontSize:theme.spacing(2),
			fontWeight:"bold",
			marginTop:theme.spacing(2)
		},
		schedulerTitle:{		
			fontSize:theme.spacing(2.5),
			fontWeight:"bold",
			marginTop:theme.spacing(2)
		},
		paperSchedule:{
			padding: theme.spacing(1,1,3,1),
			borderRadius:theme.spacing(2),
			display:"flex",
			flexDirection:"column",
			alignItems:"center",
			justifyContent:"space-around"	,
			marginBottom:theme.spacing(3)	
		},
		scheduler:{
			display:"flex",
			flexDirection:"column",
		},
		scheduler2:{
			display:"flex",
			flexDirection:"column",
			paddingTop:theme.spacing(2)
		},
		schedulerButton:{
			display:"flex",
			flexDirection:"column",
			alignItems:"center"
		},
		formControlScheduler:{
			minWidth:theme.spacing(30),
			marginTop:theme.spacing(2),
		},
		confirmSchedulerButton:{
			margin:theme.spacing(2,0,2,0)
		},
		cancelSchedulerButton:{
			height:theme.spacing(8),
			width:theme.spacing(8),
			borderRadius:"50%",
			color:theme.palette.alternate.main,
			borderColor:theme.palette.alternate.main,
			margin:theme.spacing(2,0,2,0)
		},
		paperImage:{
			padding: theme.spacing(2, 0),
			marginBottom:theme.spacing(3),
			borderRadius:theme.spacing(2),
			display:"flex",
			alignItems:"center",
			justifyContent:"space-around"	
		},
		paperImageItem:{
			padding:theme.spacing(1,0,0,0),
			margin:"0 auto"
		},
		paperImageImg:{		
			height:theme.spacing(20),
			borderRadius:theme.spacing(2),
		},
		visibleCodeIcon:{
			marginRight:theme.spacing(2),
		},
		visibleCodeClass:{
			padingBottom:theme.spacing(2)
		},
		visibleCodeGroup:{
			display:"flex",
			alignItems:"center"
		},
		emojiDisplayZone:{
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
			paddingBottom:theme.spacing(2),
		},
  }
}));

function Upload() {

  (function () {
    let tokenValue = cookies.load('Token');
    if (tokenValue) {
      Axios.defaults.headers.common['Authorization'] = tokenValue;
    } else {
      Axios.defaults.headers.common['Authorization'] = null;

    }
    console.log(tokenValue)
  })();

	//Post on social media variables
	const [checkedTwitter, setCheckedTwitter] = useState(false);
	const [checkedInstagram, setCheckedInstagram] = useState(false);
	//display specific code based on button clicked
	const [visibilityCode, setVisibilityCode] = useState(1);
	const [gridBreak, setGridBreak] = useState(4);
	const [displayCode, setDisplayCode] = useState("schedule");
	//Poll button clicked related variables
	const [poll, setPoll] = useState([1,2]);
	const [pollDays, setPollDays] = useState(1);
	const [pollHours, setPollHours] = useState(0);
	const [pollMinutes, setPollMinutes] = useState(0);
	//Schedule button clicked related variables
	const [scheduleMonth, setScheduleMonth] = useState("May");
	const [scheduleDay, setScheduleDay] = useState(16);
	const [scheduleYear, setScheduleYear] = useState(2021);
	const [scheduleHour, setScheduleHour] = useState(1);
	const [scheduleMinute, setScheduleMinute] = useState(0);
	const [scheduleAM, setScheduleAM] = useState("AM");
	const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];	
  const AMArray = ["AM","PM"];
	//Image Button clicked related variables
	const [imageArray, setImageArray] = useState([]);	
	//Gif Button clicked related variables
	const [gifArray, setGifArray] = useState([]);
	//Video Button clicked related variables
	const [videoArray, setVideoArray] = useState([]);	
	//Emoji Button Clicked related variables

	const dispatch = useDispatch();
  const classes = useStyles();

	const handleChangeTwitter = () => {
		setCheckedTwitter((prev) => !prev);
	};

	const handleChangeInstagram = () => {
		setCheckedInstagram((prev) => !prev);
	};

	useEffect(() => {
			
	dispatch(dashLoc("Upload"));
																																					
	}, [])

	function range(start, end) {
		return Array(end - start + 1).fill().map((_, idx) => start + idx)
	}

	const addPollOption = () => {
		if(poll.length<4){
			setPoll([...poll, poll.length+1 + " (Optional)"])
		}		
	}


	const changeDisplayOnClick = () => {
		var widSize = 24;
		var heiSize = 48;
		var breakSize = 2;
		if(window.matchMedia("(max-width: 600px)").matches){
			widSize=36;
			heiSize=36;
			breakSize = 4;
		}
		var displayZone = document.getElementById('displayZone');
		var buttonIcon1 = document.getElementById('buttonAreaIcon1');
		var buttonIcon2 = document.getElementById('buttonAreaIcon2');
		var buttonIcon3 = document.getElementById('buttonAreaIcon3');
		var buttonIcon4 = document.getElementById('buttonAreaIcon4');
		var buttonIcon5 = document.getElementById('buttonAreaIcon5');
		var buttonIcon6 = document.getElementById('buttonAreaIcon6');
		buttonIcon1.style.width=`${widSize}px`;
		buttonIcon2.style.width=`${widSize}px`;
		buttonIcon3.style.width=`${widSize}px`;
		buttonIcon4.style.width=`${widSize}px`;
		buttonIcon5.style.width=`${widSize}px`;
		buttonIcon6.style.width=`${widSize}px`;
		buttonIcon1.style.height=`${heiSize}px`;
		buttonIcon2.style.height=`${heiSize}px`;
		buttonIcon3.style.height=`${heiSize}px`;
		buttonIcon4.style.height=`${heiSize}px`;
		buttonIcon5.style.height=`${heiSize}px`;
		buttonIcon6.style.height=`${heiSize}px`;
		displayZone.style.display="block";
		setGridBreak(breakSize);
	}

	const changeDisplayBackOnClick = () => {		
		var widSize = 80;
		var heiSize = 80;
		if(window.matchMedia("(max-width: 600px)").matches){
			widSize=60;
			heiSize=60;
		}
		var displayZone = document.getElementById('displayZone');
		var buttonIcon1 = document.getElementById('buttonAreaIcon1');
		var buttonIcon2 = document.getElementById('buttonAreaIcon2');
		var buttonIcon3 = document.getElementById('buttonAreaIcon3');
		var buttonIcon4 = document.getElementById('buttonAreaIcon4');
		var buttonIcon5 = document.getElementById('buttonAreaIcon5');
		var buttonIcon6 = document.getElementById('buttonAreaIcon6');
		buttonIcon1.style.width=`${widSize}px`;
		buttonIcon2.style.width=`${widSize}px`;
		buttonIcon3.style.width=`${widSize}px`;
		buttonIcon4.style.width=`${widSize}px`;
		buttonIcon5.style.width=`${widSize}px`;
		buttonIcon6.style.width=`${widSize}px`;
		buttonIcon1.style.height=`${heiSize}px`;
		buttonIcon2.style.height=`${heiSize}px`;
		buttonIcon3.style.height=`${heiSize}px`;
		buttonIcon4.style.height=`${heiSize}px`;
		buttonIcon5.style.height=`${heiSize}px`;
		buttonIcon6.style.height=`${heiSize}px`;
		displayZone.style.display="none";
		setGridBreak(4);
	}

	const emojiPickerClickHandler = (event, emojiObject) => {
    const descriptionText = document.getElementById('descriptionText');
		const curPos = descriptionText.selectionStart;
		let val = descriptionText.value;
		descriptionText.value=val.slice(0,curPos)+emojiObject.emoji+val.slice(curPos,val.length);
		descriptionText.focus()
		var offset;
		if(emojiObject.unified.length<=5){
			offset=2;
		}else if(emojiObject.unified.length<=10){
			offset=3;
		}else if(emojiObject.unified.length<=15){
			offset=4;
		}else if(emojiObject.unified.length<=20){
			offset=5;
		}else{
			offset=6;
		}
		descriptionText.setSelectionRange(curPos+offset, curPos+offset)
  };

	const displayMode = () => {
		if(displayCode==="schedule"){
			return(	<Paper elevation={3} className={classes.paperSchedule}>
								<div className={classes.schedulerButton}>
								<Button
									variant="outlined"
									component="label"
									className={classes.cancelSchedulerButton}
									onClick={changeDisplayBackOnClick}
								>
									<CloseIcon/>
								</Button>
								<Button
									variant="outlined"
									component="label"
									color="primary"
									className={classes.confirmSchedulerButton}
								>
									Confirm
								</Button>
								</div>
								<div className={classes.scheduler}>
									<Typography className={classes.schedulerTitle}>
										Schedule
									</Typography><Typography className={classes.schedulerSubTitle}>
										Date
									</Typography>
									<FormControl className={classes.formControlScheduler}>										
        						<InputLabel htmlFor="scheduleMonth">Month</InputLabel>
										<Select
											id="scheduleMonth"
											variant="standard"
											value={scheduleMonth}
											onChange={handleScheduleMonth}
											input={<BootstrapInput/>}
										>
											{monthArray.map((el, idx)=>{
												return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
											})}
										</Select>
									</FormControl>
									<FormControl className={classes.formControlScheduler}>						
        						<InputLabel htmlFor="scheduleDay">Day</InputLabel>
										<Select
											id="scheduleDay"
											variant="standard"
											value={scheduleDay}
											onChange={handleScheduleDay}
											input={<BootstrapInput/>}
										>
											{range(1,31).map((el, idx)=>{
												return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
											})}
										</Select>
									</FormControl>
									<FormControl className={classes.formControlScheduler}>						
        						<InputLabel htmlFor="scheduleYear">Year</InputLabel>
										<Select
											id="scheduleYear"
											variant="standard"
											value={scheduleYear}
											onChange={handleScheduleYear}
											input={<BootstrapInput/>}
										>
											{range(2021,2023).map((el, idx)=>{
												return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
											})}
										</Select>
									</FormControl>
								</div>
								<div className={classes.scheduler2}>
									<Typography className={classes.schedulerSubTitle}>
										Time
									</Typography>
									<FormControl className={classes.formControlScheduler}>										
        						<InputLabel htmlFor="scheduleHour">Hour</InputLabel>
										<Select
											id="scheduleHour"
											variant="standard"
											value={scheduleHour}
											onChange={handleScheduleHour}
											input={<BootstrapInput/>}
										>
											{range(0,11).map((el, idx)=>{
												return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
											})}
										</Select>
									</FormControl>
									<FormControl className={classes.formControlScheduler}>						
        						<InputLabel htmlFor="scheduleMinutes">Minute</InputLabel>
										<Select
											id="scheduleMinutes"
											variant="standard"
											value={scheduleMinute}
											onChange={handleScheduleMinute}
											input={<BootstrapInput/>}
										>
											{range(0,59).map((el, idx)=>{
												return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
											})}
										</Select>
									</FormControl>
									<FormControl className={classes.formControlScheduler}>						
        						<InputLabel htmlFor="scheduleAM">AM/PM</InputLabel>
										<Select
											id="scheduleAM"
											variant="standard"
											value={scheduleAM}
											onChange={handleScheduleAM}
											input={<BootstrapInput/>}
										>
											{AMArray.map((el, idx)=>{
												return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
											})}
										</Select>
									</FormControl>
								</div>
								<div className={classes.scheduler}>
									<Typography className={classes.schedulerSubTitle}>
										Time Zone
									</Typography>
									<Typography className={classes.schedulerTitle}>
										Indian Standard Time
									</Typography>
								</div>
							</Paper>)			
		}else if(displayCode==="poll"){
			return(	<Paper elevation={3} className={classes.paperPoll}>
				<div className={classes.pollChoiceGroup}>
				{poll.map((el,idx)=>{
					return(<TextField
						type="text"										
						key={idx}
						id={`poll-${el}`}
						label={`Choice ${el}`}
						variant="outlined"
						className={classes.pollChoice}
						margin="normal"
						InputLabelProps={{
							classes:{
								root:classes.label
							}
						}}
					/>)
				})}
				</div>
				<div className={classes.pollChoiceGroup}>
					<Button
						variant="outlined"
						component="label"
						color="primary"
						className={classes.pollButton}
						onClick={addPollOption}
					>
						<AddIcon/>
					</Button>
					<Button
						variant="outlined"
						component="label"
						className={classes.removePollButton}
						onClick={changeDisplayBackOnClick}
					>
						Remove Poll
					</Button>
				</div>
				<div className={classes.pollChoiceGroup}>
					<Typography className={classes.pollLengthTitle}>
						Poll Length
					</Typography>
					<FormControl className={classes.formControlPoll}>										
						<InputLabel htmlFor="pollDays">No of Days</InputLabel>
						<Select
							id="pollDays"
							variant="standard"
							value={pollDays}
							onChange={handlePollDays}
							input={<BootstrapInput/>}
						>
							{range(0,7).map((el, idx)=>{
								return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
							})}
						</Select>
					</FormControl>
					<FormControl className={classes.formControlPoll}>						
						<InputLabel htmlFor="pollHours">No of Hours</InputLabel>
						<Select
							id="pollHours"
							variant="standard"
							label="No of Days"
							value={pollHours}
							onChange={handlePollHours}
							input={<BootstrapInput/>}
						>
							{range(0,23).map((el, idx)=>{
								return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
							})}
						</Select>
					</FormControl>
					<FormControl className={classes.formControlPoll}>						
						<InputLabel htmlFor="pollMinutes">No of Minutes</InputLabel>
						<Select
							id="pollMinutes"
							variant="standard"
							value={pollMinutes}
							onChange={handlePollMinutes}
							input={<BootstrapInput/>}
						>
							{range(0,59).map((el, idx)=>{
								return(<MenuItem key={idx} value={el}>{el}</MenuItem>)
							})}
						</Select>
					</FormControl>
				</div>
			</Paper>)		
		}else if(displayCode==="image"){
			return(
				<Paper elevation={3} className={classes.paperImage}>
					<Grid container>
						{imageArray.map((img, idx)=>{
							return(<Grid item key={idx} sm={4} align="center" className={classes.paperImageItem}>
								<img src={img} className={classes.paperImageImg}/>
							</Grid>)
						})}
					</Grid>
				</Paper>
			);
		}else if(displayCode==="video"){
			return(
				<Paper elevation={3} className={classes.paperImage}>
					<Grid container>
						{videoArray.map((vid, idx)=>{
							return(<Grid item key={idx} sm={4} align="center" className={classes.paperImageItem}>
								<video className={classes.paperImageImg} controls>
									<source src={vid}/>
								</video>
							</Grid>)
						})}
					</Grid>
				</Paper>
			);
		}else if(displayCode==="gif"){
			return(
				<Paper elevation={3} className={classes.paperImage}>
					<Grid container>
						{gifArray.map((img, idx)=>{
							return(<Grid item key={idx} sm={4} align="center" className={classes.paperImageItem}>
								<img src={img} className={classes.paperImageImg}/>
							</Grid>)
						})}
					</Grid>
				</Paper>
			);
		}
	}

	const emojiDisplayMode = () => {
		if(displayCode==="emoticon"){
			return <Picker className={classes.emojiPicker} id="emojiPicker" onEmojiClick={emojiPickerClickHandler}/>
		}
	}

	const handleChangePostVisibility = (e) => {
		setVisibilityCode(e.target.value);
	}

	const handlePollDays = (e) => {
		setPollDays(e.target.value);
	}

	const handlePollHours = (e) => {
		setPollMinutes(e.target.value);
	}

	const handlePollMinutes = (e) => {
		setPollHours(e.target.value);
	}

	const handleScheduleMonth = (e) => {
		setScheduleMonth(e.target.value);
	}

	const handleScheduleDay = (e) => {
		setScheduleDay(e.target.value);
	}

	const handleScheduleYear = (e) => {
		setScheduleYear(e.target.value);
	}

	const handleScheduleHour = (e) => {
		setScheduleHour(e.target.value);
	}

	const handleScheduleMinute = (e) => {
		setScheduleMinute(e.target.value);
	}

	const handleScheduleAM = (e) => {
		setScheduleAM(e.target.value);
	}

	const handleImageClick = () => {
		changeDisplayBackOnClick();
		setDisplayCode("image");
	}

	const handleVideoClick = () => {
		changeDisplayBackOnClick();
		setDisplayCode("video");
	}

	const handleGifClick = () => {
		changeDisplayBackOnClick();
		setDisplayCode("gif");
	}

	const handleEmoticonClick = () => {
		if(displayCode==="emoticon"){			
			changeDisplayBackOnClick();
			setDisplayCode("");
		}else{
			changeDisplayBackOnClick();
			setDisplayCode("emoticon");
			changeDisplayOnClick();
			var emojiPicker = document.getElementById('emojiPicker');
			if(emojiPicker){
				emojiPicker.click();
		}
		}
	}

	const handlePollClick = () => {
		changeDisplayBackOnClick();
		setDisplayCode("poll");
		changeDisplayOnClick();
	}

	const handleScheduleClick = () => {
		changeDisplayBackOnClick();
		setDisplayCode("schedule");
		changeDisplayOnClick();
	}

	const imageHandler = (e) => {
		if (e.target.files) {

			changeDisplayOnClick();

			const files = Array.from(e.target.files);

			Promise.all(files.map(file => {
					return (new Promise((resolve,reject) => {
							const reader = new FileReader();
							reader.addEventListener('load', (ev) => {
									resolve(ev.target.result);
							});
							reader.addEventListener('error', reject);
							reader.readAsDataURL(file);
					}));
			}))
			.then(images => {

					setImageArray(images)

			}, error => {        
					console.error(error);
			});
		}
	}

	const gifHandler = (e) => {
		if (e.target.files) {

			changeDisplayOnClick();

			const files = Array.from(e.target.files);

			Promise.all(files.map(file => {
					return (new Promise((resolve,reject) => {
							const reader = new FileReader();
							reader.addEventListener('load', (ev) => {
									resolve(ev.target.result);
							});
							reader.addEventListener('error', reject);
							reader.readAsDataURL(file);
					}));
			}))
			.then(images => {

					setGifArray(images)

			}, error => {        
					console.error(error);
			});
		}
	}

	const videoHandler = (e) => {
		if (e.target.files) {

			changeDisplayOnClick();

			const files = Array.from(e.target.files);

			Promise.all(files.map(file => {
					return (new Promise((resolve,reject) => {
							const reader = new FileReader();
							reader.addEventListener('load', (ev) => {
									resolve(ev.target.result);
							});
							reader.addEventListener('error', reject);
							reader.readAsDataURL(file);
					}));
			}))
			.then(video => {

					setVideoArray(video)

			}, error => {        
					console.error(error);
			});
		}
	}

  return (
    <div className={classes.uploadRoot}>
    <CssBaseline />
    <div className={classes.uploadToolbar}/>
      <Paper elevation={3} className={classes.paper}>
				<div className={classes.descriptionArea}>
					<Avatar alt="Profile Picture" className={classes.profilePic}></Avatar>
					<TextareaAutosize
						id="descriptionText"
						className={classes.descriptionText}
						placeholder="What's Happening?"
					/>
				</div>
				<div className={classes.emojiDisplayZone}>
					{emojiDisplayMode()}
				</div>
				<div className={classes.displayZone} id="displayZone">
					{displayMode()}
				</div>
				<Grid container className={classes.buttonArea}>
					<Grid item xs={gridBreak} sm={gridBreak} align="center" className={classes.buttonAreaItem}>
						<Button
							id="buttonAreaBtn1"
							variant="outlined"
							component="label"
							color="secondary"
							onClick={handleImageClick}
						>
							<ImageIcon className={classes.buttonAreaIcon} id="buttonAreaIcon1"/>
							<input
								accept="image/*"
								className={classes.inputImage}
								hidden
								id="inputImage"
								multiple
								type="file"
								onChange={imageHandler}
							/>
						</Button>
					</Grid>
					<Grid item xs={gridBreak} sm={gridBreak} align="center" className={classes.buttonAreaItem}>
						<Button
							variant="outlined"
							component="label"
							color="secondary"
							id="buttonAreaBtn2"
							onClick={handleVideoClick}
						>
							<VideocamIcon className={classes.buttonAreaIcon} id="buttonAreaIcon2"/>
							<input
								accept="video/*"
								className={classes.inputVideo}
								hidden
								id="inputVideo"
								type="file"
								onChange={videoHandler}
							/>
						</Button>
					</Grid>
					<Grid item xs={gridBreak} sm={gridBreak} align="center" className={classes.buttonAreaItem}>
						<Button
							variant="outlined"
							component="label"
							color="secondary"
							id="buttonAreaBtn3"
							onClick={handleGifClick}
						>
							<GifIcon className={classes.buttonAreaIcon} id="buttonAreaIcon3"/>
							<input
								accept="image/gif"
								className={classes.inputGifs}
								hidden
								id="inputGifs"
								type="file"
								onChange={gifHandler}
							/>
						</Button>
					</Grid>
					<Grid item xs={gridBreak} sm={gridBreak} align="center" className={classes.buttonAreaItem}>
						<Button
							variant="outlined"
							component="label"
							color="secondary"
							id="buttonAreaBtn4"
							onClick={handleEmoticonClick}
						>
							<InsertEmoticonIcon className={classes.buttonAreaIcon} id="buttonAreaIcon4"/>
						</Button>
					</Grid>
					<Grid item xs={gridBreak} sm={gridBreak} align="center" className={classes.buttonAreaItem}>
						<Button
							variant="outlined"
							component="label"
							color="secondary"
							id="buttonAreaBtn5"
							onClick={handlePollClick}
						>
							<PollIcon className={classes.buttonAreaIcon} id="buttonAreaIcon5"/>
						</Button>
					</Grid>
					<Grid item xs={gridBreak} sm={gridBreak} align="center" className={classes.buttonAreaItem}>
						<Button
							variant="outlined"
							component="label"
							color="secondary"
							id="buttonAreaBtn6"
							onClick={handleScheduleClick}
						>
							<EventIcon className={classes.buttonAreaIcon} id="buttonAreaIcon6"/>
						</Button>
					</Grid>
			</Grid>
      <FormControl className={classes.formControl}>
				<Select
					variant="standard"
					value={visibilityCode}
					onChange={handleChangePostVisibility}
					input={<BootstrapInput/>}
					className={classes.visibleCodeClass}
				>
					<MenuItem	value={1}><div className={classes.visibleCodeGroup}><PublicIcon color="primary" className={classes.visibleCodeIcon}/><Typography className={classes.visibleCodeText}>Everybody</Typography></div></MenuItem>
					<MenuItem value={2}><div className={classes.visibleCodeGroup}><HowToRegIcon color="primary" className={classes.visibleCodeIcon}/><Typography className={classes.visibleCodeText}>People You Follow</Typography></div></MenuItem>
					<MenuItem value={3}><div className={classes.visibleCodeGroup}><TagFacesIcon color="primary" className={classes.visibleCodeIcon}/><Typography className={classes.visibleCodeText}>Only People You Mention</Typography></div></MenuItem>
				</Select>
			</FormControl>
			<FormControlLabel
				control={<Switch checked={checkedTwitter} onChange={handleChangeTwitter} />}
				label="Post on Twitter"
				className={classes.postSocialCheck}
			/>
			<FormControlLabel
				control={<Switch checked={checkedInstagram} onChange={handleChangeInstagram} />}
				label="Post on Instagram"
				className={classes.postSocialCheck}
			/>
			<Button
				variant="contained"
				component="label"
				color="secondary"
				className={classes.postButton}
			>
				Post
				<SendIcon style={{marginLeft:"8px"}}/>
			</Button>
      </Paper>
    </div>
  );
}

export default Upload;