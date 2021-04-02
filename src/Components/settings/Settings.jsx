import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import Collapse from '@material-ui/core/Collapse';
import { Divider } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    
  }));

function Settings() {

    const classes = useStyles();

    return (
        <div className={classes.settingsRoot}>
          <div className={classes.accountSettings}>
                <div className="stitle">Account Settings</div>
                <div className="profile-settings">                   
                    <div className="ssubtitle">Profile Settings</div>
                    <div className="psettings">
                    <div className="settings-label">User Name</div>
                    <input type="text" className="change-user-name" id="change-user-name"/>
                    </div>
                    <div className="psettings">
                    <div className="settings-label">First Name</div>
                    <input type="text" className="change-first-name" id="change-first-name"/>
                    </div>
                    <div className="psettings">
                    <div className="settings-label">Last Name</div>
                    <input type="text" className="change-last-name" id="change-last-name"/>
                    </div>
                    <div className="psettings">
                    <div className="settings-label">Mobile</div>
                    <input type="tel" className="change-mobile-number" pattern="[0-9]{10}" id="change-mobile-number"/>
                    </div>
                    <div className="psettings">
                    <div className="settings-label">E-mail</div>
                    <input type="email" className="change-email" id="change-user-name"/>
                    </div>
                    <div className="change-button">Change Profile</div>
                </div>
                <div className="password-settings">
                    <div className="ssubtitle">Password Settings</div>
                    <input type="password" className="old-password" placeholder="Enter old password..."/>
                    <input type="password" className="new-password" placeholder="Enter new password..."/>
                    <input type="password" className="repeat-password" placeholder="Re-Enter new password..."/>
                    <div className="change-button">Change Password</div>
                </div>
                <div className="notifications-settings">
                    <div className="settings-label">Get Notifications</div>
                    <div className="checkbox-center">
                        <input type="checkbox" className="settings-checkbox"/>
                    </div>
                </div>
                <div className="display-mode-settings">
                    <div className="settings-label">Change Display Mode Light/Dark</div>
                    <div className="checkbox-center">
                        <input type="checkbox" className="settings-checkbox"/>
                    </div>
                </div>
            </div>
            <div className="sline-seperation"></div>
            <div className="social-account-linking">
                <div className="stitle">Link Your Social Account</div>
                <div className="account-link-settings">
                    <div className="settings-label">Link Facebook</div>
                    <div className="checkbox-center">
                        <input type="checkbox" className="settings-checkbox"/>
                    </div>
                </div>
                <div className="account-link-settings">
                    <div className="settings-label">Link Instagram</div>
                    <div className="checkbox-center">
                        <input type="checkbox" className="settings-checkbox"/>
                    </div>
                </div>
                <div className="account-link-settings">
                    <div className="settings-label">Link Google</div>
                    <div className="checkbox-center">
                        <input type="checkbox" className="settings-checkbox"/>
                    </div>
                </div>
                <div className="account-link-settings">
                    <div className="settings-label">Link Twitter</div>
                    <div className="checkbox-center">
                        <input type="checkbox" className="settings-checkbox"/>
                    </div>
                </div>
                <div className="account-link-settings">
                    <div className="settings-label">Link LinkedIn</div>
                    <div className="checkbox-center">
                        <input type="checkbox" className="settings-checkbox"/>
                    </div>
                </div>
            </div>
            <div className="sline-seperation"></div>
            <div className="support-settings">
                <div className="stitle">Support</div>
                <div className="support-setting-link"><Link to="/">Contact Us</Link></div>
                <div className="support-setting-link"><Link to="/">Feedback</Link></div>
                <div className="support-setting-link"><Link to="/">Privacy Policy</Link></div>
            </div>
            <div className="sline-seperation"></div>
            <div className="delete-account-button">Delete Account</div>
            <div className="sline-seperation"></div>
        </div>
    )
}

export default Settings
