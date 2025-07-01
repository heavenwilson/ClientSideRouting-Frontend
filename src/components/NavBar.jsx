import React from "react";
import "./NavBarStyles.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Currently, we're using <a> tags to navigate to different pages.
      This means that every time we click on a link, the page will reload.
      Let's fix that!
      */}
      <NavLink to="/"> AllTasks</NavLink>
      <NavLink to="/completed">Completed Tasks</NavLink>
      <NavLink to="/incomplete">Incomplete Tasks</NavLink>
      <NavLink to="/add-task">Add Task</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
};

export default NavBar;
