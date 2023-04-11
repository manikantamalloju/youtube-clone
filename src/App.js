import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Header from "./components/Header";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Header />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  );
};

export default App;

// https://www.youtube.com/watch?v=[vedio_id]_channel=[channel_id]

// api key:AIzaSyCsb_E3_ZHrMxvPzlUm9i7NqAPd13OSY-g
//channel id:UC_x5XG1OV2P6uZZ5FSM9Ttw

//playlist
// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY]

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// vedio
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyCsb_E3_ZHrMxvPzlUm9i7NqAPd13OSY-g

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

//search
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyCsb_E3_ZHrMxvPzlUm9i7NqAPd13OSY-g
