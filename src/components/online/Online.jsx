import './online.css'

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
    <div className="rightBarProfileImageContainer">
      <img
        src={user.profilePicture}
        alt=""
        className="rightBarProfileImage"
      />
      <span className="rightBarOnline"></span>
    </div>
    <span className="rightBarUserName">{user.userName}</span>
  </li>
  )
}
