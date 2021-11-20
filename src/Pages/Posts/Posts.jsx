import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SiteRightBr from "../../Components/SiteRBr/SiteRBr";
import useAuth from "../../Hooks/useAuth";
import arrow_left from "../../images/arrow-left.svg";
import avatar from "../../images/boburaka.png";

import "./Posts.scss";

function Posts() {
  const [token] = useAuth()
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [userId]);

  return (
    <>
      <div className="home-wrapper">
        <Header />

        <div className="main">
          <div className="profile__name-wrapper">
            <Link to="/">
              <img src={arrow_left} alt="" />
            </Link>
            <div>
              <h3 className="user-name">Posts</h3>
            </div>
          </div>

          <div></div>

        
          {posts.length > 0 && (
            <ul className="post-list">
              {posts.map((post) => {
                return (
                  <li className="post-item" key={post.id}>
                    <div className="user-post-wrapper">
                      <p className="user-post-title">{post.title}</p>
                      <div className="user-post-body-wrapper">
                        <img src={avatar} alt="avatar" />
                        <div className="user-post-body-text-wrapper">
                          <div className="user-post-name-wrapper">
                            <h3 className="user-post-name">{token.name}</h3>
                            <a className="user-post-email" href="/">
                              @bobur_mavlonov · Apr 1
                            </a>
                          </div>
                          <p className="user-post-body-text">
                          {post.body}
                          </p>
                        </div>
                      </div>

                      <ul className="like-bar-list">
                        <li className="link-bar-item">
                          <span className="link-bar-item-num"></span>
                        </li>

                        <li className="link-bar-item-active">
                          <span className="link-bar-item-num "></span>
                        </li>

                        <li className="link-bar-item-active">
                          <span className="link-bar-item-num"></span>
                        </li>

                        <li className="link-bar-item"></li>

                        <li className="link-bar-item"></li>
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <SiteRightBr />
      </div>
    </>
  );
}

export default Posts;
