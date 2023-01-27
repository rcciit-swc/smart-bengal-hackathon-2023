import { Outlet } from "react-router-dom";
import "./NavBar.style.css";

const NavBar = () => {
  return (
    <div className="d-flex app">
      <Outlet />
    </div>
  );
};

export default NavBar;
