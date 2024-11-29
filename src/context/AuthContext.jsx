import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

//1
const AuthContext = createContext();
//2
export const AuthProvider = ({ children }) => {
  //? It will start with useState and when isAuth is working, it can change to use useLocalStorage hook
  // const [isAuth, setIsAuth] = useState(false);   -> state to check if there is  authenticate user or no
  // useLocalStorage needs a key:value pair: key-> "auth" & value-> false(can be any value, not just booleans)

  // Alternatively it can be created a custom hook to check wether the user is in the local storage. It is a better practice to create a hook
  const [isAuth, setIsAuth] = useLocalStorage("auth", false);
  const login = (username, password) => {
    setIsAuth(true); // It is assumed that the username and passwor are correct, so the isAuth is updated
    toast.success("Successfully logged In !");
  };

  const logout = () => {
    setIsAuth(false);
    toast.success("Successfully logged Out !");
  };
  // 3
  return (
    // It has to be written always value to send the props
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
//4 (optional) -> Define a custome hook
export const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};
