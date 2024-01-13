import "./rightbar.css";
import {Users} from '../../DummyData'
import Online from "../online/Online";

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img
            src="assets/persons/hachiman.jpg"
            alt=""
            className="birthDayImg"
          />
          <span className="birthdayText">
            <b>oreki</b> and <b>2 others</b> have their birthday today.
          </span>
        </div>
        <img src="assets/persons/kiyotaka.jpg" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u} />
          ))}
       
        </ul>
      </div>
    </div>
  );
}
