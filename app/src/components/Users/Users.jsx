import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
            (page >= props.currentPage - 2 && page <= props.currentPage + 2)
          ) {
            return (
              <span
                key={page}
                className={props.currentPage === page && styles.selectedPage}
                onClick={() => {
                  props.onPageChange(page);
                }}
              >
                {page}
              </span>
            );
          } else if (
            page === props.currentPage - 3 ||
            page === props.currentPage + 3
          ) {
            return <div key={page}>... </div>;
          } else {
            return null;
          }
        })}
        {/* как нибудь нужно разобрать выше (своровано из комментариев) */}
      </div>
      {props.isFetching ? <Preloader /> : null}
      <div className={styles.usersWrapper}>
        {props.users.map((user) => {
          return (
            <User
              follow={props.follow}
              unfollow={props.unfollow}
              id={user.id}
              avatar={user.photos.small}
              followed={user.followed}
              name={user.name}
              status={user.status}
              // city={user.location.city}
              // country={user.location.country}
              key={user.id}
              followingInProgress={props.followingInProgress}
              toggleFollowingProgress={props.toggleFollowingProgress}
            />
          );
        })}
      </div>
      <button className={styles.button}>Show more</button>
    </div>
  );
};

export default Users;
