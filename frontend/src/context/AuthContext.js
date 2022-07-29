import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
import axios from "axios";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
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

  let [error, setError] = useState("");

  let navigate = useNavigate();

  let loginUser = async (d, e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/auth/login`, d).then((res) => {
        console.log(res.data);
        if (res.data.code === 0) {
          setToken(res.data.data.accessToken);
          setUser(jwt_decode(res.data.data.accessToken));
          localStorage.setItem(
            "token",
            JSON.stringify(res.data.data.accessToken)
          );
          axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
          navigate("/");
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

  const logoutUser = async () => {
    // e.preventDefault();
    let response = await fetch("http://localhost:8080/auth/logout");
    if (response.status === 200) {
      console.log(response);
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  // let updateToken = async (e) => {
  //   e.preventDefault()
  //   try{
  //     await axios.post("http://localhost:8080/auth/verifyRefreshToken").then(res => {
  //       console.log(res)
  //     });
  //   } catch(err){
  //     console.log(err.response)
  //   }
    
  //   if (response.status === 201){
  //       console.log(response.data)
  //   }
  //   console.log(response);
  // };

//   useEffect(() => {
//     let interval = setInterval(() => {
//       if (token) {
//         updateToken();
//       }
//     }, 20000);

//     return () => clearInterval(interval);
//   }, [token]);

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    error: error,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
