import React from "react";
import styles from "./User.module.css";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
              className={styles.button}
              onClick={() => {
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/` +
                      props.id,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "9010a2eb-dfec-44b6-a12f-5edd7c6a50a7",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(props.id);
                    }
                  });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => {
                axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/` +
                      props.id,
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "9010a2eb-dfec-44b6-a12f-5edd7c6a50a7",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(props.id);
                    }
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
