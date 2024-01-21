import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatar:
          "https://sun9-62.userapi.com/impg/LHcdw0H9Ah5M3VtmxyazUzgmypJcF078OrZHuQ/jxE8K-tM3as.jpg?size=1620x2160&quality=95&sign=40f55c8d3d7d989590efe8dd8db4d7d7&type=album",
        followed: true,
        fullname: "Gleb K.",
        status: "I suck dick",
        location: { city: "Saint-Pitersburg", country: "Russia" },
      },
      {
        id: 2,
        avatar:
          "https://sun9-20.userapi.com/impf/DVI3OcdZ9LtwDGrMOxPaLHevZOXZSKNpLAdfAw/L8VyMnZXPk0.jpg?size=2560x1707&quality=95&sign=295665408521f78d9f90f95f2c486568&type=album",
        followed: false,
        fullname: "Sasha S.",
        status: "I suck dick too",
        location: { city: "Saint-Pitersburg", country: "Russia" },
      },
      {
        id: 3,
        avatar:
          "https://sun9-38.userapi.com/impf/IO18n7eXlOZsuC0trp2Zm5FDDW5CJUlci20ExA/Ydp_zJ_JkYw.jpg?size=1266x1688&quality=96&sign=a6b0c9f99db65f0a440b410afc86b2a6&type=album",
        followed: true,
        fullname: "Ilya A.",
        status: "I don't suck dick",
        location: { city: "Lipetsk", country: "Russia" },
      },
      {
        id: 4,
        avatar:
          "https://sun9-77.userapi.com/impg/i1FymPsZRec-Bc8tRN3BNaS05XCdMTBhmcS-fg/4Y_RKlCTohA.jpg?size=2560x1707&quality=95&sign=a4d8136a0421b85798738fe78467f358&type=album",
        followed: true,
        fullname: "Vladislav D.",
        status: "I don't suck dick too",
        location: { city: "Lipetsk", country: "Russia" },
      },
    ]);
  }

  let usersElements = props.users.map((user) => {
    return (
      <User
        follow={props.follow}
        unfollow={props.unfollow}
        number={user.id}
        avatar={user.avatar}
        followed={user.followed}
        fullname={user.fullname}
        status={user.status}
        city={user.location.city}
        country={user.location.country}
        key={user.id}
      />
    );
  });

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Users</h3>
      <div className={styles.usersWrapper}>{usersElements}</div>
      <button className={styles.button}>Show more</button>
    </div>
  );
};

export default Users;
