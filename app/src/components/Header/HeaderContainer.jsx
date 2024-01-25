import React from "react";
import { setAuthUserData, setAvatar } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
          axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
            .then((response) => {
              this.props.setAvatar(response.data.photos.small);
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
