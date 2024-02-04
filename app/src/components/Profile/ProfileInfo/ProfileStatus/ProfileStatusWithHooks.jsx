import React, { useEffect, useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activatedEditMode = () => {
    setEditMode(true);
  };

  const diactivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status,
  //     });
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      {!editMode && (
        <span className={styles.text} onDoubleClick={activatedEditMode}>
          {status || "У данного пользователя пока нет статуса"}
        </span>
      )}
      {editMode && (
        <input
          onChange={onStatusChange}
          className={styles.input}
          autoFocus
          onBlur={diactivatedEditMode}
          value={status}
        />
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
