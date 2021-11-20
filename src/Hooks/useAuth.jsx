import { useContext } from "react"
import { Context } from "../Context/AuthContex"

const useAuth = (settrOnly) => {
  const {token, setToken} = useContext(Context)
  return settrOnly ? [token, setToken] : [token]
}

export default useAuth;