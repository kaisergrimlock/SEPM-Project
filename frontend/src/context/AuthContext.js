import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
import axios from "axios";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [nameList, setNameList] = useState([])
  let [name, setName] = useState("")
  let [token, setToken] = useState(() =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : null
  );

  const [isLoading, setIsLoading] = useState(false)

  let [error, setError] = useState("");

  let navigate = useNavigate();

  let loginUser = async (d, e) => {
    // e.preventDefault();
    try {
      await axios.post(`/auth/login`, d).then((res) => {
        console.log(res.data);
        console.log(res)
        if (res.data.code === 0) {
          setToken(res.data.data.accessToken);
          setUser(jwt_decode(res.data.data.accessToken));
          localStorage.setItem(
            "token",
            JSON.stringify(res.data.data.accessToken)
          );
          setIsLoading(true)
          navigate("/");
          // console.log(user)
        }
      });
    } catch (err) {
      // Handle error from backend
      console.log(err.response);
      if (err.response.data.errMessage === "Password is invalid") {
        setError("Email or Password is invalid");
      } else {
        setError(err.response.data.errMessage);
      }
    }
  };

  useEffect(() => {
    if(token){
      axios.defaults.headers.common = {Authorization: `Bearer ${token}`}
      axios.post(`/api/user/getUser/${user.userId}`).then(res => setName(res.data.data.user.name))
      setIsLoading(true)
    }    
  }, [name, isLoading])

  useEffect(() => {
    if(name){
      setNameList(prev => [...prev, name])
    }
  }, [name, isLoading])
  
  const logoutUser = async () => {
    // e.preventDefault();
    // let response = await fetch("/auth/logout");
    // if (response.status === 200) {
    //   console.log(response);
    //   setToken(null);
    //   setUser(null);
    //   localStorage.removeItem("token");
    //   navigate("/");
    // }
    setToken(null);
    setUser(null);
    setName("")
    setNameList([])
    setIsLoading(false)
    localStorage.removeItem("token");
    navigate("/");
  };

  let contextData = {
    token: token,
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    error: error,
    name: name,
    nameList: nameList,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
