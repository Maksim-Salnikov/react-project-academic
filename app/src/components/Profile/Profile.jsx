import React from "react";
import "./Profile.css";
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";

const Profile = () => {
  return (
    <section className="content">
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
          <h3 className="content-profile-info__name">Maxim S.</h3>
          <span className="content-profile-info__birthday">
            Date of Birth: 7 december
          </span>
          <span className="content-profile-info__city">
            City: Saint-Pitersburg
          </span>
          <span className="content-profile-info__education">
            Education: BSU '11
          </span>
          <span className="content-profile-info__web">
            Web site: https://maksim.magnus.com
          </span>
        </div>
      </div>
      <MyPost />
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default Profile;
