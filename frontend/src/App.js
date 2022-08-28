import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { LoginPage } from "./views/LoginPage";
import { RegisterPage } from "./views/RegisterPage";

import { AuthProvider } from "./context/AuthContext";
import { MeetingRoom } from "./views/MeetingRoom";
import { CreateRoom } from "./views/CreateRoom";
import { OurMission } from "./views/OurMission";
import { AboutUs } from "./views/AboutUs";

// import io from 'socket.io-client';
// const io = io.connect('http://localhost:3000');

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route
              path="/meeting/:meetingRoomId"
              element={<MeetingRoom />}
            ></Route>
            <Route path="/create" element={<CreateRoom />}></Route>
            <Route path="/ourmission" element={<OurMission />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
