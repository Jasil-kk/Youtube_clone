import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
const token = localStorage.getItem("token")

  return (
    <div className="App">
      {token ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singlepage" element={<SinglePage />} />
        </Routes>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
