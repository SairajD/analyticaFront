import { React, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Logo from '../logo/Logo';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import cookies from 'react-cookies';
import Axios from "axios";
import {useLocation, useHistory} from "react-router-dom";

const drawerWidth = 240;
const url = ' https://analytica-parsb-api.herokuapp.com'

const useStyles = makeStyles((theme) => ({
    loadingRoot: {
        width: `calc(100% - ${drawerWidth})`,
		marginLeft: drawerWidth
    },
    loadingToolbar: theme.mixins.toolbar,
    preLoader: {
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    logoIcon: {
        backgroundColor: theme.palette.secondary.main,
        width: theme.spacing(9),
        height: theme.spacing(9),
        paddingLeft: theme.spacing(0.9),
        position: "absolute",
        transform: "translateY(-100px)",
    },
    logoSocialIcon: {
        backgroundColor: theme.palette.secondary.main,
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        animation: "$bounce 0.5s cubic-bezier(.19,.57,.3,.98) infinite alternate",
        "&:nth-child(2)": {
            animationDelay: "0.1s",
        },
        "&:nth-child(3)": {
            animationDelay: "0.2s",
        },
        "&:nth-child(4)": {
            animationDelay: "0.3s",
        },
    },
    '@keyframes bounce': {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-50px)" }
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
        loadingRoot: {
          width: "100%",
          marginLeft:0,
        },
      }
}));

function TwitterLogin() {

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
    const history = useHistory();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

      let query = useQuery();

    useEffect(() => {
        console.log(query.get("oauth_token"))

        if (query.get("oauth_token") === cookies.load('OAuthRequestToken'))
        {
            Axios
              .post(
                url+`/analytica/twitter/login/callback`,
                {
                  oauth_token: cookies.load('OAuthRequestToken'),
                  oauth_verifier: query.get("oauth_verifier"),
                },
              )
              .then(() => {
                Axios
                  .get(url+`/analytica/twitter/login/verify`)
                  .then((response) => {
                    console.log(response.data);
                    history.push("/Dashboard/Settings");
                  });
              });
          }

    }, [])

    return (
        <div className={classes.loadingRoot}>
            <CssBaseline />
            <div className={classes.loadingToolbar}/>
            <div className={classes.preLoader}>
                <Avatar className={classes.logoSocialIcon}>
                    <FacebookIcon />
                </Avatar>
                <Avatar className={classes.logoSocialIcon}>
                    <TwitterIcon />
                </Avatar>
                <Avatar className={classes.logoSocialIcon}>
                    <InstagramIcon />
                </Avatar>
                <Avatar className={classes.logoSocialIcon}>
                    <LinkedInIcon />
                </Avatar>
                <Avatar className={classes.logoIcon}>
                    <Logo color="#ffffff" width="80" height="80" />
                </Avatar>
            </div>
        </div>
    )
}

export default TwitterLogin
