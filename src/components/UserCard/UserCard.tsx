import React from "react";
import css from "./styles.module.css";
import { UserDto } from "../../api/contracts";

type IProps = {
  user: UserDto;
};

const UserCard = ({ user }: IProps) => {
  const date = new Date(user.registered.date);

  return (
    <div className={css.userCard}>
      <img className={css.userAvatar} style={{borderColor: `#${Math.random().toString(16).slice(-6)}`}} src={user.picture.medium} alt="" />
      <div className={css.basicInfo}>
        <div
          className={css.userName}
        >{`${user.name.first} ${user.name.last}`}</div>
        <div>{`email: ${user.email}`}</div>
        <div
          className={css.userRegistered}
        >{`registration date: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</div>
      </div>
    </div>
  );
};

export default UserCard;
