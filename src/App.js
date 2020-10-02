import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppContext from "./context/index";
import Paper from '@material-ui/core/Paper';
//Components
import HeaderBar from "./components/HeaderBar";
import SongHeader from "./components/SongHeader";
import { getLyrics, searchSong, getAlbumArt } from "genius-lyrics-api";
import Footer from './components/Footer';
import LyricsCard from './components/LyricsCard';
import BlankSpace from './components/BlankSpace';
// Styles //
const useStyles = makeStyles((theme) => ({
  contentGrid: {
    marginTop: 10,
    marginBottom: 10
  },
  
}));



export default function App() {

  const appContext = useContext(AppContext);
  const {
    setId,
    setGeniusUrl,
    songLyrics,
    setSongLyrics,
    setCAlbumArt,
    title,
    setTitle,
    artist,
    setArtist,
    password,
    setPassword,
    loading,
    setLoading,
    apiKey,
    optimizeQuery,
    open,
    setOpen,
    music,
    setMusic,
    musician,
    setMusician
  } = appContext;
const [results, setResults] = useState({});
  const classes = useStyles();
  // Functions //
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function userSearch() {
    handleClose();
    const options = {title, artist, apiKey, optimizeQuery};
    setLoading(true);
    
    searchSong(options).then((searchResult) => {
          setId(searchResult.id);
          setGeniusUrl(searchResult.url);
          setMusic(title);
          setMusician(artist);
    });
    setLoading(false);
    getAlbumArt(options).then((albumArt) => {
        setCAlbumArt(albumArt);
    });
    generateLyricsAndPassword();
  };

  function generateLyricsAndPassword() {
    const options = {title, artist, apiKey, optimizeQuery};
    setLoading(true);

    getLyrics(options).then((lyrics) => {
      const chorus = lyrics.split("Chorus]").pop().split("[")[0];
      const acronym = chorus
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), "");
      setSongLyrics(chorus);
      setPassword(acronym);
    });

    setLoading(false);
  }

  return (
    <div styles={{maxWidth: '100%'}}>
      <HeaderBar />
      <SongHeader />
      <BlankSpace />
      <LyricsCard />
      <BlankSpace />
      <Footer />

      {/* Popup Search */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disablePortal
      >
        <DialogTitle id="form-dialog-title">Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Only a song title is required, but using the artist name will help
            give you more accurate results.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="songSearch"
            label="Song"
            fullWidth
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="artistSearch"
            label="Artist"
            fullWidth
            onChange={(event) => setArtist(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={userSearch} color="primary">
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}