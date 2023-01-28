import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/tmovie.png";

import "./Header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];
function Header() {
  const pathname = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);
  console.log(pathname);
  return (
    <div useRef={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => {
            return (
              <li key={i} className={`${i === active ? "active" : ``}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
