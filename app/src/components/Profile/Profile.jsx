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
      <Post message={postsData[0].message} like={postsData[0].like} />
      <Post message={postsData[1].message} like={postsData[1].like} />
      <Post message={postsData[2].message} like={postsData[2].like} />
    </section>
  );
};

export default Profile;
