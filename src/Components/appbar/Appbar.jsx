import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addNegatives, addPositives, socialLoc, removeNegatives, removePositives, addInstaNegatives, addInstaPositives, removeInstaPositives, removeInstaNegatives } from '../reduxStore/actions/addTweets';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Avatar from '@material-ui/core/Avatar';
import cookies from 'react-cookies';
import Logo from '../logo/Logo';

const url = 'https://analytica-parsb-api.herokuapp.com'
const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - 240px)`,
    marginLeft: "240px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    color: "#ffffff",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkStyle: {
    textDecoration: "none",
    color: "#ffffff",
  },
  socialButton: {
    backgroundColor: theme.palette.alternate.main,
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    color: "#ffffff"
  },
  socialIcon: {
    display: "flex"
  },
  customBadge: {
    backgroundColor: theme.palette.secondary.main
  },
  badgeContent: {
    color: "#ffffff"
  },
  iconBtn: {
    padding: 0,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  searchIconColor: {
    color: "#ffffff"
  },
  logoIcon:{
    backgroundColor:theme.palette.alternate.main,
    width:theme.spacing(6),
    height:theme.spacing(6),			
    paddingLeft:theme.spacing(0.7)
  },
}));
//functions
// 
export default function PrimarySearchAppBar() {
  (function () {
    let tokenValue = cookies.load('Token');
    if (tokenValue) {
      Axios.defaults.headers.common['Authorization'] = tokenValue;
    } else {
      Axios.defaults.headers.common['Authorization'] = null;

    }
    console.log(tokenValue)
  })();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [timerId, setTimerId] = useState("");
  const [instaTimerId, setInstaTimerId] = useState("");

  const dashLoc = useSelector(state => state.changeDash);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const dispatch = useDispatch();
  const history = useHistory();

  let globalId;
  let globaInstalId;

  const onInstaSearch = (data) => {
    Axios.post(url+'/analytica/instagram/search/'+data)
    .then((res)=>{
      globaInstalId = res.data.documentId;
      let tID = setTimeout(checkInstaStatus, 5000);
      setInstaTimerId(tID);
    })
    .catch(e=>{
      console.log("Error : " +e)
    })
  }

  const checkInstaStatus = async () => {
    let response = await Axios.get(
      url+`/analytica/instagram/tags/${globaInstalId}/status`
    );
    console.log("hi my boi"+response);
    if (response.status == 200) {
      console.log("Done");
      clearTimeout(instaTimerId);
      let response = await Axios.get(
        url+`/analytica/instagram/tags/${globaInstalId}/download`
      );
      let finalNegatives = [];
      let finalPositives = [];
      response.data.negatives.forEach((l) => {
        let tempneg = {
          caption: l.caption,
          likes: l.likeCount,
          comments: l.commentCount,
          timestamp: l.timeStamp,
          thumbnail: "",
          sMedia: "InstagramIcon"
        };

        finalNegatives.push(tempneg);
      });

      response.data.positives.forEach((l) => {
        let temppos = {
          caption: l.caption,
          likes: l.likeCount,
          comments: l.commentCount,
          timestamp: l.timeStamp,
          thumbnail: "",
          sMedia: "InstagramIcon"
        };

        finalPositives.push(temppos);
      });

      dispatch(addInstaNegatives(finalNegatives));
      dispatch(addInstaPositives(finalPositives));

    } else if (response.status == 204) {
      const timer = setTimeout(checkInstaStatus, 5000);
      setInstaTimerId(timer);
    }
  };

  const checkStatus = async () => {
    let response = await Axios.get(
      url+`/analytica/twitter/search/status/${globalId}`
    );
    console.log(response);
    if (response.status == 200) {
      console.log("Done");
      clearTimeout(timerId);
      let response = await Axios.get(
        url+`/analytica/twitter/search/download/${globalId}`
      );
      let finalNegatives = [];
      let finalPositives = [];
      response.data.negatives.forEach((l) => {
        let tempneg = {
          caption: l.full_text,
          likes: l.favorite_count,
          comments: 0,
          timestamp: l.created_at,
          thumbnail: "",
          sMedia: "TwitterIcon"
        };

        finalNegatives.push(tempneg);
      });

      response.data.positives.forEach((l) => {
        let temppos = {
          caption: l.full_text,
          likes: l.favorite_count,
          comments: 0,
          timestamp: l.created_at,
          thumbnail: "",
          sMedia: "TwitterIcon"
        };

        finalPositives.push(temppos);
      });

      dispatch(addNegatives(finalNegatives));
      dispatch(addPositives(finalPositives));

    } else if (response.status == 204) {
      const timer = setTimeout(checkStatus, 5000);
      setTimerId(timer);
    }
  };
  const onSearch = async (data) => {
    const twitterAnalysis = await Axios.post(
      url+"/analytica/twitter/search",
      { search_query: data, user: "rau@gmail.com" }
    );

    globalId = twitterAnalysis.data.documentId;
    let tID = setTimeout(checkStatus, 5000);
    setTimerId(tID);

    console.log(twitterAnalysis.data);
  };

  const onInputChange = (e) => {
    if (e.key === "Enter") {
      dispatch(removeNegatives());
      dispatch(removePositives());
      dispatch(removeInstaPositives());
      dispatch(removeInstaNegatives());
      onSearch(e.target.value);
      onInstaSearch(e.target.value);
      history.push('/Dashboard/SearchDisplay');
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const logoutClicked = async () => {



    const result = await Axios.post(url + '/Analytica/users/Logout')
    if (result.status === 200) {
      cookies.remove('Username')
      cookies.remove('Token');
      history.replace("/Login"); window.location.reload(false);
    }
    else {
      console.log('error')
      //Comment:put here error page
      // history.replace("/Login");window.location.reload(false);
    }


  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={logoutClicked}>Logout</MenuItem>
    </Menu>
  );

  const socialBtnDisplay = () => {
    if (dashLoc === "Home") {
      return (
        <div className={classes.socialIcon}>
          <Avatar className={classes.socialButton} onClick={() => dispatch(socialLoc("Twitter"))}>
            <TwitterIcon />
          </Avatar>
          <Avatar className={classes.socialButton} onClick={() => dispatch(socialLoc("Instagram"))}>
            <InstagramIcon />
          </Avatar>
        </div>
      )
    }
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="mails" >
          <Badge badgeContent={7} classes={{ badge: classes.customBadge }} className={classes.badgeContent}>
            <Avatar className={classes.socialButton}>
              <MailIcon />
            </Avatar>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="notifications" >
          <Badge badgeContent={12} classes={{ badge: classes.customBadge }} className={classes.badgeContent}>
            <Avatar className={classes.socialButton}>
              <NotificationsIcon />
            </Avatar>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="user-account"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <Avatar className={classes.socialButton}>
            <AccountCircle />
          </Avatar>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
              <Avatar className={classes.logoIcon} onClick={()=>{history.push("/Dashboard")}}> 
								<Logo color="#ffffff" width="64" height="64"/>
							</Avatar>
          <div className={classes.search}>

            <div className={classes.searchIcon}>
              <SearchIcon className={classes.searchIconColor} />
            </div>

            <InputBase
              placeholder="Search…"
              onKeyDown={onInputChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          {socialBtnDisplay()}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="mails" className={classes.iconBtn}>
              <Badge badgeContent={9} classes={{ badge: classes.customBadge }} className={classes.badgeContent}>
                <Avatar className={classes.socialButton}>
                  <MailIcon />
                </Avatar>
              </Badge>
            </IconButton>
            <IconButton aria-label="notifications" className={classes.iconBtn}>
              <Badge badgeContent={11} classes={{ badge: classes.customBadge }} className={classes.badgeContent}>
                <Avatar className={classes.socialButton}>
                  <NotificationsIcon />
                </Avatar>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className={classes.iconBtn}
            >
              <Avatar className={classes.socialButton}>
                <AccountCircle />
              </Avatar>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              className={classes.iconBtn}
            >
              <Avatar className={classes.socialButton}>
                <MoreIcon />
              </Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
