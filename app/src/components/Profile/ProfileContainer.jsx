import React from "react";
import "./Profile.css";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { ProfileAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// В новой версии react-router-dom создание withRouter() не работаем. Ниже создаем withRouter() через хук useParams()
function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (userId === undefined) {
      userId = 2;
    }
    this.props.setProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { setProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
