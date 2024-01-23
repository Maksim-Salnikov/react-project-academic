import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Users</h3>
        <div className={styles.numbers}>
          {/* как нибудь нужно разобрать ниже (своровано из комментариев) */}
          {pages.map((page) => {
            if (
              page === 1 ||
              page === pagesCount ||
              (page >= this.props.currentPage - 2 &&
                page <= this.props.currentPage + 2)
            ) {
              return (
                <span
                  key={page}
                  className={
                    this.props.currentPage === page && styles.selectedPage
                  }
                  onClick={() => {
                    this.onPageChange(page);
                  }}
                >
                  {page}
                </span>
              );
            } else if (
              page === this.props.currentPage - 3 ||
              page === this.props.currentPage + 3
            ) {
              return <span key={page}>... </span>;
            } else {
              return null;
            }
          })}
          {/* как нибудь нужно разобрать выше (своровано из комментариев) */}
        </div>
        <div className={styles.usersWrapper}>
          {this.props.users.map((user) => {
            return (
              <User
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                id={user.id}
                avatar={user.photos.small}
                followed={user.followed}
                name={user.name}
                status={user.status}
                // city={user.location.city}
                // country={user.location.country}
                key={user.id}
              />
            );
          })}
        </div>
        <button className={styles.button}>Show more</button>
      </div>
    );
  }
}

export default Users;
