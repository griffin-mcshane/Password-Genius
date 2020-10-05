import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MusicIcon from "@material-ui/icons/MusicNote";
import GitHubIcon from "@material-ui/icons/GitHub";
import logo from "./pgLogo.png";
import iconLogo from "./geniusIconLogo.svg";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";

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
              <img className={classes.imageIcon} src={iconLogo} />
            </Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
