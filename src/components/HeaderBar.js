import React from "react";
//Material-UI
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
//Icons
import GitHubIcon from "@material-ui/icons/GitHub";
//Assets
import iconLogo from "./assets/geniusIconLogo.svg";
import logo from "./assets/pgLogo.png";
//Styling
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.title}>
            <img src={logo} alt="" />
          </Box>

          <IconButton
            onClick={() =>
              window.open("https://github.com/griffin-mcshane/Password-Genius")
            }
          >
            <GitHubIcon />
          </IconButton>
          <IconButton onClick={() => window.open("https://docs.genius.com/")}>
            <Icon classes={classes.iconRoot}>
              <img className={classes.imageIcon} src={iconLogo} alt="" />
            </Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
