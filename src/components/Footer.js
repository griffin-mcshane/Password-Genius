import React, {useContext} from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppContext from "../context/index";
import Link from '@material-ui/core/Link';
const useStyles = makeStyles({
//SongCard (sc) Styles
  scroot: {
    minWidth: 275,
    backgroundColor: 'black',
    minHeight: 100,
  },
  scartist: {
    color: 'white'
  },
  footTitleOne: {
    lineHeight: 1.125,
    fontWeight: 700,
    wordBreak: "break-word",
  },
  footTitle: {
    lineHeight: 1.45,
    fontWeight: 700,
    color: 'white', 
  },
  footLink:{
    color: '#FFFF64',
    lineHeight: 1.125,
    fontWeight: 700,
    wordBreak: "break-word",
    textDecoration: 'none'
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
      <Box width={1} justifyContent="center" className={classes.scroot} p={2}>
      <Typography variant="body2" align="center" className={classes.footTitle} gutterBottom>
  Data from {<a href="https://genius.com/" className={classes.footLink}>Genius</a>}.
        </Typography>
        <Typography variant="body1" align="center" className={classes.footTitle} gutterBottom>
  Created by {<a href="https://www.linkedin.com/in/griffin-mcshane/" className={classes.footLink}>Griffin McShane</a>}.
        </Typography>
        <Typography variant="body2" align="center" className={classes.footTitle}>
  Special Thanks to {<a href="https://www.zwillgen.com/" className={classes.footLink}>ZWillGen</a>}.
        </Typography>
      </Box>
  );
}