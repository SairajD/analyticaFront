import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
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

const drawerWidth = 240;

const url = ' https://analytica-parsb-api.herokuapp.com'

const useStyles = makeStyles((theme) => ({
  uploadRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  uploadToolbar: theme.mixins.toolbar,
  paper: {
    padding: '6px 16px',
  },
	profilePic: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginBottom:theme.spacing(4)
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
    paper: {
      padding: '6px 12px',
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

	const [checkedTwitter, setCheckedTwitter] = useState(false);
	const [checkedInstagram, setCheckedInstagram] = useState(false);
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

  return (
    <div className={classes.uploadRoot}>
    <CssBaseline />
    <div className={classes.uploadToolbar}/>
      <Paper elevation={3} className={classes.paper}>
        <Avatar alt="Profile Picture" className={classes.profilePic}></Avatar>
				<InputBase
        className={classes.margin}
        placeholder="What's Happening?"
        inputProps={{ 'aria-label': 'description' }}
      />
			<Button
				variant="outlined"
				component="label"
				color="secondary"
			>
				<ImageIcon/>
				<input
					accept="image/*"
					className={classes.inputImage}
					hidden
					id="inputImage"
					multiple
					type="file"
				/>
			</Button>
			<Button
				variant="outlined"
				component="label"
				color="secondary"
			>
				<VideocamIcon/>
				<input
					accept="video/*"
					className={classes.inputVideo}
					hidden
					id="inputVideo"
					type="file"
				/>
			</Button>
			<Button
				variant="outlined"
				component="label"
				color="secondary"
			>
				<GifIcon/>
				<input
					accept="image/gif"
					className={classes.inputGifs}
					hidden
					id="inputGifs"
					type="file"
				/>
			</Button>
			<Button
				variant="outlined"
				component="label"
				color="secondary"
			>
				<InsertEmoticonIcon/>
			</Button>
			<Button
				variant="outlined"
				component="label"
				color="secondary"
			>
				<PollIcon/>
			</Button>
			<Button
				variant="outlined"
				component="label"
				color="secondary"
			>
				<EventIcon/>
			</Button>
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
			>
				Post
				<SendIcon style={{marginLeft:"8px"}}/>
			</Button>
      </Paper>
    </div>
  );
}

export default Upload;