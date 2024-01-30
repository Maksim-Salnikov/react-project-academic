import React from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {!this.state.editMode && (
          <span className={styles.text} onDoubleClick={this.activatedEditMode}>
            {this.props.status}
          </span>
        )}
        {this.state.editMode && (
          <input
            className={styles.input}
            autoFocus
            onBlur={this.diactivatedEditMode}
            value={this.props.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
