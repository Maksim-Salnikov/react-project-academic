import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfolowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (UserId) => {
      dispatch(followAC(UserId));
    },
    unfollow: (UserId) => {
      dispatch(unfolowAC(UserId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
