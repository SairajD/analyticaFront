import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import Collapse from '@material-ui/core/Collapse';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
      margin: theme.spacing(3)
    },
    timelineContent:{
        width : 1000,
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        flexWrap: 'wrap',
        wordWrap: 'break-word',
    },
    likeComment:{
        display:"flex",
        justifyContent:"center",
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),
    },
    likeComItem:{
        marginLeft:theme.spacing(4),
        marginRight:theme.spacing(2),
    },
    timelineTitle:{
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),      
        marginLeft: theme.spacing(2),
    },
    timelineCommentTitle:{
        fontWeight:"bold",
        fontSize:theme.spacing(2.5),
        marginLeft: theme.spacing(2),
        marginTop:theme.spacing(2),
    }
  }));

function SearchComponent(props) {

    const classes = useStyles();
    const [commentOpen, setCommentOpen] = useState(false);
  
    const handleClick = () => {
      setCommentOpen(!commentOpen);
    };

    return (
        <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.timelineTitle} variant="h6" component="h1">
          {props.sentiment}
        </Typography>
        <Typography className={classes.timelineContent}>{props.caption}</Typography>
        <div className={classes.likeComment}>
            <Typography className={classes.likeComItem}>{props.likes}</Typography>
            <ThumbUpIcon color="primary"/>
            <Typography className={classes.likeComItem}>{props.comments}</Typography>
            <CommentIcon color="primary" onClick={handleClick}/>
        </div>
        <Collapse in={commentOpen} timeout="auto" unmountOnExit>
          <Typography className={classes.timelineCommentTitle}>Comments</Typography>
          <Typography className={classes.timelineContent}>{props.commentText}</Typography>       
          <Divider/>   
        </Collapse>
      </Paper>
    )
}

export default SearchComponent
