import React from "react";
import { getAuthMe, logout } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";
import { HeaderAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.auth.avatar,
  };
};

export default connect(mapStateToProps, {
  getAuthMe,
  logout,
})(HeaderContainer);
