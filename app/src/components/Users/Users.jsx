import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  let usersElements = props.users.map((user) => {
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
      />
    );
  });
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Users</h3>
      <div className={styles.usersWrapper}>{usersElements}</div>
      <button className={styles.button}>Show more</button>
    </div>
  );
};

export default Users;
