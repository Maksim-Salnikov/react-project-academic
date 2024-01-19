import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
  return (
    <section className="content">
      <ProfileInfo
        name="Maksim Salnkiov"
        birthaday="7th December"
        city="Lipetsk"
        education="School 21th, Lipetsk"
        website="https://vk.com/maksim.magnus"
      />
      <MyPostContainer store={props.store} />
    </section>
  );
};

export default Profile;
