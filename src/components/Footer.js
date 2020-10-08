import React from 'react';
//Material-UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
//Styling
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'black',
    minHeight: 100,
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
      <Box width={1} justifyContent="center" className={classes.root} p={2}>
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