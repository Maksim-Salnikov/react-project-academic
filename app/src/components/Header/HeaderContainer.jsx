import React from "react";
import { setAuthUserData, setAvatar } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";
import { HeaderAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    HeaderAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setAuthUserData(id, login, email);
        HeaderAPI.getProfile(id).then((data) => {
          this.props.setAvatar(data.photos.small);
        });
      }
    });
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

export default connect(mapStateToProps, { setAuthUserData, setAvatar })(
  HeaderContainer
);
