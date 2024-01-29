import React from "react";
import styles from "./User.module.css";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import { NavLink } from "react-router-dom";
import { UsersAPI } from "../../../api/api";

const User = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftside}>
        <NavLink to={"/Profile/" + props.id}>
          <img
            src={props.avatar != null ? props.avatar : defaultAvatar}
            alt="аватар"
            className={styles.avatar}
          />
        </NavLink>
        <div>
          {props.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === props.id)}
              className={styles.button}
              onClick={() => {
                props.toggleFollowingProgress(true, props.id);
                UsersAPI.deleteFollow(props.id).then((data) => {
                  if (data.resultCode === 0) {
                    props.unfollow(props.id);
                  }
                  props.toggleFollowingProgress(false, props.id);
                });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === props.id)}
              className={styles.button}
              onClick={() => {
                props.toggleFollowingProgress(true, props.id);
                UsersAPI.postFollow(props.id).then((data) => {
                  if (data.resultCode === 0) {
                    props.follow(props.id);
                  }
                  props.toggleFollowingProgress(false, props.id);
                });
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.leftsideWrapper}>
          <span className={styles.fullname}>{props.name}</span>
          <span className={styles.status}>{props.status}</span>
        </div>
        <div className={styles.rightsideWrapper}>
          <span className={styles.country}>{"props.country"}</span>
          <span className={styles.city}>{"props.city"}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
