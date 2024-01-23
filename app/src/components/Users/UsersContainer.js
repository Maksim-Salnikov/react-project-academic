import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfolowAC,
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
