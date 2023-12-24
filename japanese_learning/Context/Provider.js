//COntext.js
import React,{createContext,useState} from "react";
const Context = createContext();

const Provider = ({children}) => {
  const [isenticated, setIsenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Context.Provider value={{isenticated,setIsenticated,email,setEmail,password,setPassword}}>
      {children}
    </Context.Provider>
  );
};
export { Context, Provider };