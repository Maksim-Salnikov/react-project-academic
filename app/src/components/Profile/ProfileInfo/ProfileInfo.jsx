import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (props.profile === null || props.profile === undefined) {
    return <Preloader />;
  }
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
          src={props.profile.photos.small}
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
