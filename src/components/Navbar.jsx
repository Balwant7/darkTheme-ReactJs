import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Themecontext } from "../store/theme";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(Themecontext);
  return (
    <>
      <div className="bars my-3 mx-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <div className="form-check form-switch my-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Theme
          </label>
        </div>
      </div>
      <hr style={{ marginBottom: "10rem" }} />
    </>
  );
};

export default Navbar;
