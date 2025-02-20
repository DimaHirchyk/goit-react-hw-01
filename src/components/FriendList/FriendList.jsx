import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={style.list}>
        {friends.map((friend) => (
          <li className={style.iteam} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
