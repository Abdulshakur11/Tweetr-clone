import "./Login.scss";
import form_logo from "../../images/site-logo.svg";
import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";

function Login() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (evt) => {
    evt.preventDefault();

    const data = {
      email: emailRef.current.value,
      token: Math.random(),
    };

    if (data) {
      history.push("/signup");
    }
    window.localStorage.setItem("email", data.email);
    // if (data.token) {
    // } else {
    //   setToken(null)
    // }

    // fetch("https://reqres.in/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.token) {
    //       setToken(data);
    //       history.push("/");
    //     } else {
    //       setToken(null)
    //     }
    //   });
  };

  return (
    <>
      <div className="from-wrapper form">
        <form onSubmit={handleLogin}>
          <img src={form_logo} alt="" width="50" height="41" />
          <h2 className="form__title">Log in to Twitter</h2>
          <input
            autoFocus
            ref={emailRef}
            className="form__input"
            type="email"
            placeholder="Phone number, email address"
            required
          />
          <input
            ref={passwordRef}
            className="form__input"
            type="password"
            autoComplete="off"
            placeholder="Password"
            minLength="6"
            required
          />
          <button className="form__btn" type="submit">
            Log In
          </button>
          <div className="form__link-wrapper">
            <Link className="form__link" to="/signup">
              Sign up to Twitter
            </Link>
            <Link className="form__link" to="/">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
