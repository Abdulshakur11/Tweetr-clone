import "./SignUp.scss";
import { useRef } from "react";
import useAuth from "../../Hooks/useAuth";
import { useHistory } from "react-router-dom";
import site_logo from "../../images/site-logo.svg";

function SignUp() {
  const history = useHistory()
  const [, setToken] = useAuth(true);

  const nameRef = useRef();
  const lastNmaeRef = useRef();
  const phoneRef = useRef();

    
  const handleSign = (evt) => {
    evt.preventDefault();
    const acc_data = {
      name: nameRef.current.value,
      last_name: lastNmaeRef.current.value,
      phoneNumber: phoneRef.current.value,
      token: Math.random()
    }
    if (acc_data.token) {
      setToken(acc_data);
      history.push("/")
    } else {
      setToken(null)
    }
  };
  
  return (
    <>
      <form className="signup-form signup" onSubmit={handleSign}>
        <img
          className="signup__logo"
          src={site_logo}
          alt="SignUp-logo"
          width="40"
          height="33"
        />
        <h2 className="signup__title">Create an account</h2>
        <input className="signup__input" ref={nameRef}  type="text" placeholder="Name" autoFocus required />
        <input className="signup__input" ref={lastNmaeRef}  type="text" placeholder="Last Name" required />
        <input className="signup__input" ref={phoneRef}  type="number" placeholder="Phone number" min="13" required />

        <p className="signup__text">Use email</p>
        <h5 className="signup__info-ttile">Date of birth</h5>
        <p className="signup__info">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
        <div className="signup__select-wrapper">
          <select className="signup__select-month select">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Junly">Junly</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select className="signup__select-day select"></select>
          <select className="signup__select-year select"></select>
        </div>
        <button className="signup__btn" type="submit">Next</button>
      </form>
    </>
  );
}

export default SignUp;
