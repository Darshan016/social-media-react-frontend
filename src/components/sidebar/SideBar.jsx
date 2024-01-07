import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  Event,
  School,
  HelpOutline,
  WorkOutline,
} from "@mui/icons-material";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledOutlined className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">BookMarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show more</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
            <li className="sideBarFriend">
                <img src="/assets/persons/oreki.jpg" alt="" className="sideBarFriendImg" />
                <span className="sideBarFriendName">Oreki</span>
            </li>
            <li className="sideBarFriend">
                <img src="/assets/persons/itachi.jpg" alt="" className="sideBarFriendImg" />
                <span className="sideBarFriendName">Itachi</span>
            </li>
            <li className="sideBarFriend">
                <img src="/assets/persons/nine.jpg" alt="" className="sideBarFriendImg" />
                <span className="sideBarFriendName">nine</span>
            </li>
            <li className="sideBarFriend">
                <img src="/assets/persons/shadow.jpg" alt="" className="sideBarFriendImg" />
                <span className="sideBarFriendName">Shadow</span>
            </li>
            <li className="sideBarFriend">
                <img src="/assets/persons/kiyotaka.jpg" alt="" className="sideBarFriendImg" />
                <span className="sideBarFriendName">Kiyotaks</span>
            </li>
            <li className="sideBarFriend">
                <img src="/assets/persons/lelouch.jpg" alt="" className="sideBarFriendImg" />
                <span className="sideBarFriendName">Lelouch</span>
            </li>
        </ul>
      </div>
    </div>
  );
}
