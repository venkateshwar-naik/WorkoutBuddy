import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useAuthContext } from "../../hooks/useAuthContext";

import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h2>Workout buddy</h2>
      </Link>
      {user && (
        <div className="logout">
          <span>{user.email} </span>
          <button onClick={handleClick}>logout</button>
        </div>
      )}

      {!user &&(
        <div className="menu">
        <Link to="/signup">signup</Link>

        <Link to="/login">Sign In</Link>
      </div>

      )}

     
    </nav>
  );
};

export default Navbar;
