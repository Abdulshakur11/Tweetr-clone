import { useHistory } from "react-router-dom";
import "./Error.scss";

function Error() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div>
        <h3 className="title">This page does not exist!</h3>
        <p className="text">
          Check the URL or go back to the Twitter homepage.
        </p>
        <button onClick={handleClick} className="errror-btn">
          Back to home page
        </button>
      </div>
    </>
  );
}

export default Error;
