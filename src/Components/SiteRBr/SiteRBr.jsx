import { Link } from "react-router-dom";
import girll from "../../images/girll.png";
import "./SiteRBr.scss";
import { useEffect, useState } from "react";

function SiteRightBr({ children }) {
  const [searchTem, setSearchTerm] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const serachUser = data.filter((val) => {
    if (searchTem == "") {
      return null;
    } else if (val.username.toLowerCase().includes(searchTem.toLowerCase()))
      return val;
  });

  return (
    <>
      <div className="right-bar-wrapper bar">
        <div className="bar__input-wrapper">
          <input
            className="bar__input"
            type="search"
            placeholder="Search Twitter"
            onChange={(evt) => {
              setSearchTerm(evt.target.value);
            }}
          />
        </div>

        <div className="site-bar-img-list-wrapper">{children}</div>

        <ul className="bar__list">
          <li className="bar__item">
            <h3 className="bar__item-title">Trends for you</h3>
          </li>

          <li className="bar__item">
            <p className="bar__item-sub-text">Trending in Germany</p>
            <h5 className="bar__item-sub-title">Revolution</h5>
            <p className="bar__item-sub-text">50.4K Tweets</p>
          </li>

          <li className="bar__item">
            <p className="bar__item-sub-text">Trending in Germany</p>
            <h5 className="bar__item-sub-title">Revolution</h5>
            <p className="bar__item-sub-text">50.4K Tweets</p>
          </li>

          <li className="bar__item">
            <p className="bar__item-sub-text">Trending in Germany</p>
            <h5 className="bar__item-sub-title">Revolution</h5>
            <p className="bar__item-sub-text">50.4K Tweets</p>
          </li>

          <li className="bar__item">
            <Link className="bar__item-link" to="/">
              Show more
            </Link>
          </li>
        </ul>

        <ul className="bar__users-list">
          <li className="bar__users-item">
            <h3 className="bar__users-item-title">You might like</h3>
          </li>

          {serachUser.map((user) => {
            return (
              <li className="bar__users-item" key={user.id}>
                <Link className="avatar-img" to={`/users/${user.id}`}>{user.username[0]}</Link>
                <div className="bar__users-item-user-name-wrapper">
                  <Link className="bar__users-item-user-name" to={`/users/${user.id}`}>{user.username}</Link>
                  <a href="/" className="bar__users-item-user-email">
                    {user.email}
                  </a>
                </div>
                <button className="bar__users-btn">Follow</button>
              </li>
            );
          })}

          <li className="bar__users-item">
            <img src={girll} alt="" />
            <div className="bar__users-item-user-name-wrapper">
              <h4 className="bar__users-item-user-name">Mushtariy</h4>
              <a href="/" className="bar__users-item-user-email">
                @Mushtar565266
              </a>
            </div>
            <button className="bar__users-btn">Follow</button>
          </li>

          <li className="bar__users-item">
            <img src={girll} alt="" />
            <div className="bar__users-item-user-name-wrapper">
              <h4 className="bar__users-item-user-name">Mushtariy</h4>
              <a href="/" className="bar__users-item-user-email">
                @Mushtar565266
              </a>
            </div>
            <button className="bar__users-btn">Follow</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SiteRightBr;
