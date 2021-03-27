import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import axios from "axios";

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
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [id, setId] = useState("");
  const [timerId, setTimerId] = useState("");
  const [finalNegative, setfinalNegative] = useState([
    { caption: "", likes: 0, comments: 0, timestamp: 0, thumbnail: "" },
  ]);
  const [finalPositive, setfinalPositive] = useState([
    { caption: "", likes: 0, comments: 0, timestamp: 0, thumbnail: "" },
  ]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  let globalId;
  const checkStatus = async () => {
    let response = await axios.get(
      `https://analytica-parsb-api.herokuapp.com/analytica/twitter/search/status?documentId=${globalId}`
    );
    console.log(response);
    console.log(id);
    if (response.status == 200) {
      console.log("Done");
      clearTimeout(timerId);
      let response = await axios.get(
        `https://analytica-parsb-api.herokuapp.com/analytica/twitter/search/download?documentId=${globalId}`
      );
      let finalNegatives = [];
      response.data.negatives.forEach((l) => {
        let tempneg = {
          caption: l.full_text,
          likes: l.favorite_count,
          comments: 0,
          timestamp: l.created_at,
          thumbnail: "",
        };

        finalNegative.push(tempneg);
      });

      setfinalNegative(finalNegative);
    } else if (response.status == 204) {
      const timer = setTimeout(this.checkStatus, 5000);
      setTimerId(timer);
    }
  };
  const onSearch = async (data) => {
    const twitterAnalysis = await axios.post(
      "https://analytica-parsb-api.herokuapp.com/analytica/twitter/search",
      { search_query: data, user: "rau@gmail.com" }
    );

    globalId = twitterAnalysis.data.documentId;
    let tID = setTimeout(checkStatus, 5000);
    setTimerId(tID);

    console.log(twitterAnalysis.data);
  };

  const onInputChange = (e) => {
    if (e.key === "Enter") {
      // console.log(e.target.value)
      onSearch(e.target.value);
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
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

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
        <IconButton aria-label="mails" color="inherit">
          <Badge badgeContent={7} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="notifications" color="inherit">
          <Badge badgeContent={12} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="user-account"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.search}>
            <Link to="/SearchDisplay" className={classes.linkStyle}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </Link>
            <InputBase
              placeholder="Search…"
              id="searchId"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="mails" color="inherit">
              <Badge badgeContent={9} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
