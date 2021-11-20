import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SiteRightBr from "../../Components/SiteRBr/SiteRBr";
import useAuth from "../../Hooks/useAuth";
import arrow_left from "../../images/arrow-left.svg";
import avatar from "../../images/boburaka.png";
import imageBoburAka from "../../images/image.png";
import rectangle from "../../images/rectangle.png"
import rectangle2 from "../../images/rectangle2.png"
import rectangle3 from "../../images/rectangle3.png"
import rectangle4 from "../../images/rectangle4.png"
import rectangle5 from "../../images/rectangle5.png"
import rectangle6 from "../../images/rectangle6.png"


import "./Profile.scss";

function Profile() {
  const [token] = useAuth();
  const email = window.localStorage.getItem("email");

  return (
    <>
      <div className="profile-wrapper profile">
        <Header />

        <div className="main">
          <div className="profile__name-wrapper">
            <Link to="/">
              <img src={arrow_left} alt="" />
            </Link>
            <div>
              <h3 className="user-name">{token.name}</h3>
              <span className="user-tweets">1,070 Tweets</span>
            </div>
          </div>

          <div className="profile__intro">
            <h2 className="profile__intro-user-name">
              {token.name} {token.last_name}
            </h2>
          </div>

          <div className="profile__intro-bottom">
            <h5 className="pro-avatar-name">{token.name}</h5>
            <a className="avatar-email pro" href="/">
              {email}
            </a>
            <button className="profile__btn">Edit profile</button>
          </div>

          <section className="media-section media">
            <div className="media__wrapper">
              <p className="media__companiy-name">
                UX&UI designer at{" "}
                <span className="media__companiy-part-name">@abutechuz</span>
              </p>

              <ul className="madia__about-user-info-list">
                <li className="user-info__item">
                  <p className="user-info__text">Mashag’daman</p>
                </li>

                <li className="user-info__item">
                  <p className="user-info__text text">t.me/boburjon_mavlonov</p>
                </li>

                <li className="user-info__item">
                  <p className="user-info__text">Born November 24, 2000</p>
                </li>

                <li className="user-info__item">
                  <p className="user-info__text">Joined May 2020</p>
                </li>
              </ul>

              <div className="followers-wrapper">
                <p className="following">
                  <span className="followers-num">67</span> Following
                </p>
                <p className="following">
                  <span className="followers-num">47</span> Followers
                </p>
              </div>

              <ul className="frame-list">
                <li className="frame__item">
                  <Link to="/" className="frame__link link-active">
                    Tweets
                  </Link>
                </li>

                <li className="frame__item">
                  <Link to="/" className="frame__link">
                    Tweets & replies
                  </Link>
                </li>

                <li className="frame__item">
                  <Link to="/" className="frame__link">
                    Media
                  </Link>
                </li>

                <li className="frame__item">
                  <Link to="/" className="frame__link">
                    Likes
                  </Link>
                </li>
              </ul>

              <div className="user-post-wrapper">
                <p className="user-post-title">Pinned Tweet</p>
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
                      4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                      uylanish uchun moddiy jihatdan to'la-to'kis tayyor
                      bo'lishni, sog'lik va jismoniy holatni normallashtirishni
                      reja qildim
                    </p>
                  </div>
                </div>

                <ul className="like-bar-list">
                  <li className="link-bar-item">
                    <span className="link-bar-item-num">10</span>
                  </li>

                  <li className="link-bar-item">
                    <span className="link-bar-item-num">1</span>
                  </li>

                  <li className="link-bar-item">
                    <span className="link-bar-item-num">8</span>
                  </li>

                  <li className="link-bar-item">
                  </li>

                  <li className="link-bar-item">
                  </li>
                </ul>
              </div>

              <div className="user-post-wrapper">
                <p className="user-post-title">Pinned Tweet</p>
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
                      4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                      uylanish uchun moddiy jihatdan to'la-to'kis tayyor
                      bo'lishni, sog'lik va jismoniy holatni normallashtirishni
                      reja qildim
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

                  <li className="link-bar-item">
                  </li>

                  <li className="link-bar-item">
                  </li>
                </ul>
              </div>

              <div className="user-post-wrapper">
                <p className="user-post-title">Pinned Tweet</p>
                <div className="user-post-body-wrapper">
                  <img className="user-post-avatar" src={avatar} alt="avatar" />
                  <div className="user-post-body-text-wrapper">
                    <div className="user-post-name-wrapper">
                      <h3 className="user-post-name">{token.name}</h3>
                      <a className="user-post-email" href="/">
                        @bobur_mavlonov · Apr 1
                      </a>
                    </div>
                    <p className="user-post-body-text">A bo'pti maskamasman</p>
                    <img src={imageBoburAka} alt="" />
                  </div>
                </div>

                <ul className="like-bar-list">
                  <li className="link-bar-item">
                    <span className="link-bar-item-num">10</span>
                  </li>

                  <li className="link-bar-item">
                    <span className="link-bar-item-num">1</span>
                  </li>

                  <li className="link-bar-item">
                    <span className="link-bar-item-num">8</span>
                  </li>

                  <li className="link-bar-item">
                  </li>

                  <li className="link-bar-item">
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <SiteRightBr>
          <ul className="site-bar-img-list">
            <li className="site-bar-item"><img className="site-bar-img" src={rectangle} alt="" /></li>
            <li className="site-bar-item"><img className="site-bar-img" src={rectangle2} alt="" /></li>
            <li className="site-bar-item"><img className="site-bar-img" src={rectangle3} alt="" /></li>
            <li className="site-bar-item"><img className="site-bar-img" src={rectangle4} alt="" /></li>
            <li className="site-bar-item"><img className="site-bar-img" src={rectangle5} alt="" /></li>
            <li className="site-bar-item"><img className="site-bar-img" src={rectangle6} alt="" /></li>
          </ul>
        </SiteRightBr>
      </div>
    </>
  );
}

export default Profile;
