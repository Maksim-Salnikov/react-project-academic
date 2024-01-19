import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar friendsData={props.store.getState().dialogsPage.dialogsData} />
      <Routes>
        <Route path="/Profile" element={<Profile store={props.store} />} />
        <Route
          path="/Dialogs/*"
          element={<DialogsContainer store={props.store} />}
        />
        <Route path="/News" element={<News />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
