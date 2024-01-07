import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div>
      <div className="topBarContainer">
        <div className="topBarLeft">
          <span className="logo">SocialMedia</span>
        </div>
        <div className="topBarCenter">
          <div className="searchBar">
            <Search className="searchIcon"/>
            <input placeholder="Search anything." className="searchInput" />
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">Home</span>
            <span className="topBarLink">TimeLine</span>
          </div>
          <div className="topBarIcons">
            <div className="topBarIconItem">
              <Person />
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <Chat />
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <Notifications />
              <span className="topBarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/persons/askellad.jpg" alt="" className="topBarImg" />
        </div>
      </div>
    </div>
  );
}
