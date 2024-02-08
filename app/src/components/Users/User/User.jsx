import React from "react";
import styles from "./User.module.css";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import { NavLink } from "react-router-dom";

const User = ({
  id,
  avatar,
  followed,
  unfollow,
  followingInProgress,
  follow,
  name,
  status,
  country,
  city,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftside}>
        <NavLink to={"/Profile/" + id}>
          <img
            src={avatar != null ? avatar : defaultAvatar}
            alt="аватар"
            className={styles.avatar}
          />
        </NavLink>
        <div>
          {followed ? (
            <button
              disabled={followingInProgress.some((item) => item === id)}
              className={styles.button}
              onClick={() => {
                unfollow(id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((item) => item === id)}
              className={styles.button}
              onClick={() => {
                follow(id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.leftsideWrapper}>
          <span className={styles.fullname}>{name}</span>
          <span className={styles.status}>{status}</span>
        </div>
        <div className={styles.rightsideWrapper}>
          <span className={styles.country}>{country}</span>
          <span className={styles.city}>{city}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
