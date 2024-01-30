import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import { Navigate } from "react-router-dom";

const Profile = (props) => {
  return (
    <section className="content">
      <ProfileInfo
        name="Максим"
        birthaday="7 декабря"
        city="Lipetsk"
        education="School 21th, Lipetsk"
        website="https://vk.com/maksim.magnus"
        profile={props.profile}
      />
      <MyPostContainer />
    </section>
  );
};

export default Profile;
