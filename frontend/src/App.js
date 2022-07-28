import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { LoginPage } from "./views/LoginPage";
import { RegisterPage } from "./views/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
