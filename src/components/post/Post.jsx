import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/persons/itachi.jpg"
              alt=""
              className="postProfile"
            />
            <span className="postUserName">Itachi Uchiha</span>
            <span className="postDate">1 Year Ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">Test post</span>
            <img src="/assets/posts/scene1.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">50 users liked it.</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">40 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
