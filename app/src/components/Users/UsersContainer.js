import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsersFirstRrender,
  getUsersCurrentPage,
} from "../../redux/users-reducer";
import React from "react";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersFirstRrender(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChange = (currentPage) => {
    this.props.getUsersCurrentPage(currentPage, this.props.pageSize);
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        isAuth={this.props.isAuth}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (UserId) => {
//       dispatch(followAC(UserId));
//     },
//     unfollow: (UserId) => {
//       dispatch(unfolowAC(UserId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsersFirstRrender,
  getUsersCurrentPage,
})(UsersContainer);
