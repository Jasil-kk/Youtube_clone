import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axiosApi from "./axiosMethod";

function App() {
  const [isTokenValid, setIsTokenValid] = useState(true);
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    verifyToken(token);
  },[]);

  const verifyToken = async (token) => {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp) {
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime <= decodedToken.exp) {
        console.log("isExpire:", false);
      } else {
        console.log("isExpire:", true);
        // Token is expired, try to refresh it
        try {
          const response = await axiosApi.post(
            "/auth/token/refresh",
            {
              refresh:refreshToken,
            }
          );

          // Update the localStorage with the new tokens
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);

          // Set the state to indicate that the token is now valid
          setIsTokenValid(true);
        } catch (error) {
          // Handle the error (e.g., redirect to login page)
          console.error("Error refreshing token:", error);
          setIsTokenValid(false);
        }
      }
    }
  };


  useEffect(()=>{
setInterval()
  },[])
  


  return (
    <div className="App">
      {token && refreshToken ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
