import React, { useContext, useState, useEffect } from "react";
import AppContext from "./context/index";
import {getLyrics, searchSong, getAlbumArt} from 'genius-lyrics-api';
//Material-UI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
//Components
import BlankSpace from './components/BlankSpace';
import Footer from './components/Footer';
import HeaderBar from "./components/HeaderBar";
import LyricsCard from './components/LyricsCard';
import SongHeader from "./components/SongHeader";

export default function App() {
  const appContext = useContext(AppContext);
  const {
    apiKey,
    optimizeQuery,
    setLyrics,
    setSongDetails,
    setAlbumArt,
    setPassword,
    open,
    setOpen,
    setMusic,
    setMusician,
  } = appContext;
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  // Functions //
  function userSearch() {
    const options = {title, artist, apiKey, optimizeQuery};
    handleClose();
    //Get + Set Song Details
      searchSong(options).then((result) => { 
        setSongDetails(result);
        setMusic(artist);
        setMusician(title); 
      });
      getAlbumArt(options).then((result) => {setAlbumArt(result)});
    //Get + Set Song Lyrics (chorus) & Password
      getLyrics(options).then((result) => {
        const chorus = result.split("Chorus]").pop().split("[")[0];
        setLyrics(chorus);
    //Generate the Password
      const acronym = chorus
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), "");
      setPassword(acronym);
      });
  };
  

  function handleClose(){setOpen(false)};

  return (
    <div>
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
        <DialogTitle id="form-dialog-title">Choose Song</DialogTitle>
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
