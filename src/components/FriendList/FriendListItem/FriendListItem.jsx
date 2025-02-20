import clsx from "clsx";
import style from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClsx = clsx(style.text, isOnline ? style.online : style.offline);
  return (
    <>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={style.text}>{name}</p>
        <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </>
  );
}
