import { Route } from "react-router-dom"

const Public = ({ path, component }) => {
  return (
    <Route path={path} component={component}/>
  )
} 
export default Public;