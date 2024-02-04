import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <Routes>
          <Route path="/Profile/:userId?" element={<ProfileContainer />} />
          <Route path="/Dialogs/*" element={<DialogsContainer />} />
          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Users" element={<UsersContainer />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
