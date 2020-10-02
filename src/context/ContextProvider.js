import React, { useState } from 'react';
import AppContext from '.';
const ContextProvider = ({ children }) => {
    const [id, setId] = useState(2165830); // Genius song id
    const [geniusUrl, setGeniusUrl] = useState(""); // Genius webpage URL for the song
    const [songLyrics, setSongLyrics] = useState(""); // Song lyrics
    const [cAlbumArt, setCAlbumArt] = useState(""); // URL of the album art image (jpg/png)
    const [title, setTitle] = useState(""); // Song name
    const [artist, setArtist] = useState("");
    const [password, setPassword] = useState(""); //Acronym of song chorus
    const [loading, setLoading] = useState(false); //Handle UI changes 
    const [open, setOpen] = useState(false);
    const [music, setMusic] = useState("");
    const [musician, setMusician] = useState("");
    const apiKey = "6eTFyhAS9yhaLVGoiViItvOCngJMXsDPuSzZV7dphRNThOvx0IQ4_SFOc4aaRKmO";
    const optimizeQuery = true;
  
    const context = { 
    id,
    setId,
    geniusUrl,
    setGeniusUrl,
    songLyrics,
    setSongLyrics,
    cAlbumArt,
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
  };
  return (
    <AppContext.Provider value={ context }> 
      {children}
    </AppContext.Provider>
  );
}
export default ContextProvider;