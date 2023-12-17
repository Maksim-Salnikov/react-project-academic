import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = (props) => {
  return (
    <div className="content-profileinfo">
      <div className="content-footer">
        <img
          src="https://100gorodov.ru/attachments/62/resized_for_show_c4/0e95ca-cbea-402b-b024-a59d1e52704d/original_photo-thumb_650.jpg"
          alt="image: profile-footer"
          className="content-footer__image"
        />
      </div>
      <div className="content-profile">
        <img
          src="https://i.gifer.com/origin/5b/5b93fc5b280e1231907822faf9608a43_w200.gif"
          alt="avatar"
          className="content-profile__avatar"
        />
        <div className="content-profile-info">
          <h3 className="content-profile-info__name">{props.name}</h3>
          <span className="content-profile-info__birthday">
            Date of Birth: {props.birthaday}
          </span>
          <span className="content-profile-info__city">City: {props.city}</span>
          <span className="content-profile-info__education">
            Education: {props.education}
          </span>
          <span className="content-profile-info__web">
            Web site: {props.website}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
