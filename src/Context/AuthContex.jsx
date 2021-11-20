import { createContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")));

  useEffect(()=>{
    if (token) {
       window.localStorage.setItem("token", JSON.stringify(token));
    } else {
      window.localStorage.clear()
    }
  }, [token]) 

  return (
    <>
      <Context.Provider value={{ token, setToken }}>
        {children}
      </Context.Provider>
    </>
  );
};

export { Context, Provider };
