import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftside}>
        <img src={props.avatar} alt="аватар" className={styles.avatar} />
        <div>
          {props.followed ? (
            <button
              className={styles.button}
              onClick={() => {
                props.unfollow(props.number);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => {
                props.follow(props.number);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.leftsideWrapper}>
          <span className={styles.fullname}>{props.fullname}</span>
          <span className={styles.status}>{props.status}</span>
        </div>
        <div className={styles.rightsideWrapper}>
          <span className={styles.country}>{props.country}</span>
          <span className={styles.city}>{props.city}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
