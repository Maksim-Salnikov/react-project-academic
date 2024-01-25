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
          <h3 className="content-profile-info__name">
            {props.profile.fullName}
          </h3>
          <span className="content-profile-info__contacts">
            VK: {props.profile.contacts.vk}
          </span>
          <span className="content-profile-info__gitHub">
            GitHub: {props.profile.contacts.github}
          </span>
          {/* <span className="content-profile-info__lookingForAJob">
            {
              (props.profile.lookingForAJob = (lookingForAJob) => {
                if (lookingForAJob === true) {
                  return (
                    <div>
                      <span>Ищет работу?</span> \
                      <img src="https://w7.pngwing.com/pngs/70/958/png-transparent-check-mark-computer-icons-green-tick-mark-check-mark-blog-symbol.png" />
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <span>Ищет работу?</span> \
                      <img src="https://w7.pngwing.com/pngs/174/58/png-transparent-red-cross-cdr-angle-flag-thumbnail.png" />
                    </div>
                  );
                }
              })
            }
          </span> */}
          <span className="content-profile-info__AboutMe">
            AboutMe: {props.profile.aboutMe}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
