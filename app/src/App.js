import React from "react";
import { lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));

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
          <Route path="/Dialogs/*" element={withSuspense(DialogsContainer)} />
          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Users" element={withSuspense(UsersContainer)} />
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

let ConnectApp = connect(mapStateToProps, { initializeApp })(App);

let SafeSpaceApp = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <ConnectApp />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default SafeSpaceApp;
