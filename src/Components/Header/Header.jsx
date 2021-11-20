import { NavLink, useHistory } from "react-router-dom";
import site_logo from "../../images/site-logo.svg";
import avatar from "../../images/boburaka.png"
import "./Header.scss"
import useAuth from "../../Hooks/useAuth";

function Header() {
  const [token] = useAuth();
  const email = window.localStorage.getItem("email")
  const history = useHistory();
  function clearLocalStorije() {
    window.localStorage.clear('');
    history.push("/login");
  }

  return (
    <>
      <header className="site-header header">
        <NavLink to="/">
          <img src={site_logo} alt="site-logo" width="40" height="33" />
        </NavLink>
        <nav>
          <ul className="header__list">
            <li className="header__item">
              <NavLink className="header__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="btn">
              <a href="/" className="header__item-btn" onClick={clearLocalStorije}>
                LogOut
              </a>
            </li>
            <li className="header-avatar-item">
              <img className="header-avatar" src={avatar} alt="avatar" />
              <div>
                <h5 className="avatar-name">{token.name}</h5>
                <a className="avatar-email" href="/">{email}</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
