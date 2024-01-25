import React from "react";
import "./Profile.css";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

// В новой версии react-router-dom создание withRouter() не работаем. Ниже создаем withRouter() через хук useParams()
export function withRouter(Children) {
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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const WhitsUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WhitsUrlContainerComponent
);
