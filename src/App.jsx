import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Public from "./Route/Public";
import Private from "./Route/Private";
import Error from "./Pages/Error/Error";
import Profile from "./Pages/Profile/Profile";
import SignUp from "./Pages/SignUp/SignUp";
import Posts from "./Pages/Posts/Posts";

function App() {
  return (
    <>
      <div className="container">
        <Switch>
          <Public path="/login" component={Login} />
          <Public path="/signup" component={SignUp} />
          {/* ==== ==== */}
          <Private path="/profile" component={Profile} />
          <Private path="/users/:userId" component={Posts} />
          <Private exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </div>
    </>
  );
}

export default App;
