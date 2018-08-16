import React from "react";

const NavBar = props => {
  console.log("NavBar - render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
        With Total values:
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalValues}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
