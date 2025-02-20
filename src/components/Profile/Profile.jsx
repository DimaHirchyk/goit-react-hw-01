import style from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <>
      <div className={style.container}>
        <div>
          <img className={style.img} src={avatar} alt="User avatar" /> 
          <p className={style.username}>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <ul>
          <li>
            <span>Followers:</span>&nbsp;
            <span>{followers}</span>
          </li>
          <li>
            <span>Views:</span>&nbsp;
            <span>{views}</span>
          </li>
          <li>
            <span>Likes:</span>&nbsp;
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
