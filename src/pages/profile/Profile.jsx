import './profile.css'
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

export default function Profile() {
  return (
   <>
   <TopBar/>
   <div className="profile">
   <SideBar/>
   <div className="profileRight">
    <div className="profileRightTop">
        <div className="profileCover">
            <img src="assets/posts/scene3.jpg" alt="" className="profileCoverImage" />
            <img src="assets/persons/askellad.jpg" alt="" className="profileAvatar" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Darshan Panchal</h4>
            <span className="profileInfoDesc">Hello World!!</span>
        </div>
    </div>
    <div className="profileRightBottom">
   <Feed/>
   <RightBar profile/>

    </div>
   </div>
   </div>
   </>
  )
}
