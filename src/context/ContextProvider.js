import React, { useState } from 'react';
import AppContext from '.';
const ContextProvider = ({ children }) => {
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [music, setMusic] = useState("To Get Started...");
    const [musician, setMusician] = useState("Select \"Choose Song\"");
    const [lyrics, setLyrics] = useState("");
    const [albumArt, setAlbumArt] = useState("https://assets.genius.com/images/sharing_fallback.png?1601582088");
    const [songDetails, setSongDetails] = useState({
      title: "To Get Started...", 
      artist: "Select \"Choose Song\"", 
      url: "", 
      id: 0
    });
    const apiKey = "oWke17J_jgUXQNl6VRCfC-HaUVKzaINOk1eKq3ms7e6XC6yMSl0ZaqXuR80Cz8Le";
    const optimizeQuery = true;
  
    const context = {
      apiKey,
      optimizeQuery,
      lyrics, setLyrics,
      password, setPassword,
      songDetails, setSongDetails,
      albumArt, setAlbumArt,
      open, setOpen,
      music, setMusic,
      musician, setMusician,
      open, setOpen
  };
  return (
    <AppContext.Provider value={ context }> 
      {children}
    </AppContext.Provider>
  );
}
export default ContextProvider;