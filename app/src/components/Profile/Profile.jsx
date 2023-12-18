import React from "react";
import "./Profile.css";
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} like={post.like} />
  ));

  return (
    <section className="content">
      <ProfileInfo
        name="Maksim Salnkiov"
        birthaday="7th December"
        city="Lipetsk"
        education="School 21th, Lipetsk"
        website="https://vk.com/maksim.magnus"
      />
      <MyPost />
      {postsElements}
    </section>
  );
};

export default Profile;
