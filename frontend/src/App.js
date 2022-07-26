import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import {LoginPage} from "./views/LoginPage"
import { RegisterPage } from "./views/RegisterPage";
import io from 'socket.io-client';
const io = io.connect('http://localhost:3000');

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
