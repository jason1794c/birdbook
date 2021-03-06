import React, { useState } from 'react';
import '../css/Header.css';
import { actionTypes } from '../context/reducer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Menu, MenuItem } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../context/StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch({type: actionTypes.LOGOUT_USER});
        handleClose();
    }

    return (
    <div className="header">
        <div className="header__left">
            <figure>
                <img 
                    src="https://i.imgur.com/0C6eXqX.png" 
                    alt=""
                />
                <figcaption>Birdbook</figcaption>
            </figure>
            
            <div className="header__input">
                <SearchIcon />
                <input 
                    type="text"
                    placeholder="Search Birdbook" 
                />
            </div>
        </div>

        <div className="header__center">
            <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SubscriptionsIcon fontSize="large" />
            </div>
            <div className="header__option">
                <StorefrontIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
        </div>
            
        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>

            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
                <ExpandMoreIcon />
            </IconButton>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}><ExitToAppIcon style={{marginRight: '10px'}} />Logout</MenuItem>
            </Menu>
        </div>
    </div>
    )
}

export default Header
