import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Dialogs/*" element={<DialogsContainer />} />
        <Route path="/News" element={<News />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Users" element={<UsersContainer />} />
      </Routes>
    </div>
  );
};

export default App;
