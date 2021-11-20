import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth"

const Private = ({ path, component, exact }) => {
  const [token] = useAuth();

  // Agar tokeni bolsa home page'ga otvorado
  if (token) {
    return (
      <Route path={path} component={component} exact={exact}/>
    )
  } 
  // Tokeni bo'lmasa login page'ga otvoradi 
    return <Redirect to="/login" />
} 
export default Private;