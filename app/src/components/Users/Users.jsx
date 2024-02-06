import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "./Paginator/Paginator";

let Users = ({
  totalUsersCount,
  pageSize,
  onPageChange,
  currentPage,
  isFetching,
  users,
  follow,
  unfollow,
  followingInProgress,
  toggleFollowingProgress,
}) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Users</h3>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
      {isFetching ? <Preloader /> : null}
      <div className={styles.usersWrapper}>
        {users.map((user) => {
          return (
            <User
              follow={follow}
              unfollow={unfollow}
              id={user.id}
              avatar={user.photos.small}
              followed={user.followed}
              name={user.name}
              status={user.status}
              // city={user.location.city}
              // country={user.location.country}
              key={user.id}
              followingInProgress={followingInProgress}
              toggleFollowingProgress={toggleFollowingProgress}
            />
          );
        })}
      </div>
      <button className={styles.button}>Show more</button>
    </div>
  );
};

export default Users;
