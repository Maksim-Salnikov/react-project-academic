import React from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activatedEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  diactivatedEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {!this.state.editMode && (
          <span className={styles.text} onDoubleClick={this.activatedEditMode}>
            {this.props.status || "У данного пользователя пока нет статуса"}
          </span>
        )}
        {this.state.editMode && (
          <input
            onChange={this.onStatusChange}
            className={styles.input}
            autoFocus
            onBlur={this.diactivatedEditMode}
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
