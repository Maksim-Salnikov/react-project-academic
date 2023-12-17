import React from "react";
import "./Profile.css";
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let postsData = [
  { id: 1, message: "Сегодня я много выпил пива", like: "10000" },
  { id: 2, message: "Сегодня качнул бицуху жестко", like: "228" },
  { id: 3, message: "52, лонг лайв, не теряем связь", like: "83" },
];

let postsElements = postsData.map((post) => (
  <Post message={post.message} like={post.like} />
));

const Profile = () => {
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
