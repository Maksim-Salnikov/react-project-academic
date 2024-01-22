import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Users</h3>
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
