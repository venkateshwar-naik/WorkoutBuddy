import "./App.css";

import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navabar/Navbar";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user}=useAuthContext()
  return (
    <>
      <div className="project">
        <Router>
          <Navbar />
          <Routes>
            
            
            
            <Route path="/" element={user ?<Home /> :<Navigate to="/login"/> } />
            <Route path="/login" element={!user?  <Login />  :<Navigate to="/"/> }/>
            <Route path="/signup" element={! user? <Signup /> :<Navigate  to="/"/>  } />



          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
