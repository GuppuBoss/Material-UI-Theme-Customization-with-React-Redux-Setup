import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./Navigation.style";
import UsIcon from "../../images/us-flag.svg";
import RussiaIcon from '../../images/russia-flag.svg';

export default function NavigationBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarBox}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Cargos
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.newButton}
            startIcon={<AddIcon />}
          >
            NEW
          </Button>

          <FormControl variant="outlined" className={classes.periodFormControl}>
            <InputLabel id="period">Period</InputLabel>
            <Select labelId="period" id="period" label="period">
              <MenuItem value={1} className={classes.selectOptions}>
                20 September 2012 - 31 January 2022
              </MenuItem>
              <MenuItem value={2} className={classes.selectOptions}>
                20 September 2012 - 31 January 2022
              </MenuItem>
              <MenuItem value={3} className={classes.selectOptions}>
                20 September 2012 - 31 January 2022
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.languageFormControl}
          >
            <InputLabel id="language">Language</InputLabel>
            <Select labelId="language" id="language" label="Language">
              <MenuItem value={1} className={classes.selectOptions}>
                <span className={classes.customListItem}>
                  <img
                    className={classes.mr5}
                    src={UsIcon}
                    alt="country icon"
                  />
                  <span> English</span>
                </span>
              </MenuItem>
              <MenuItem value={2} className={classes.selectOptions}>
                <span className={classes.customListItem}>
                  <img
                    className={classes.mr5}
                    src={UsIcon}
                    alt="country icon"
                  />
                  <span> Urdu</span>
                </span>
              </MenuItem>
              <MenuItem value={3} className={classes.selectOptions}>
                <span className={classes.customListItem}>
                  <img
                    className={classes.mr5}
                    src={RussiaIcon}
                    alt="country icon"
                  />
                  <span> French</span>
                </span>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.locationFormControl}
          >
            <InputLabel id="Location">Location</InputLabel>
            <Select labelId="Location" id="Location" label="Location">
              <MenuItem value={1} className={classes.selectOptions}>
                Ecuador
              </MenuItem>
              <MenuItem value={2} className={classes.selectOptions}>
                USA
              </MenuItem>
              <MenuItem value={3} className={classes.selectOptions}>
                PAK
              </MenuItem>
            </Select>
          </FormControl>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
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
