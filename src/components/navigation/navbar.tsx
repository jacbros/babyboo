import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputField } from "../inputField/inputField";
import {
  faUserCheck,
  faGlobe,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.png";
import "./navbar.css";

const NavBar = (props: any) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuStyles = {
    display: width > 768 ? "flex" : navbarOpen ? "block" : "none",
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} />
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="menu-burger"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="navbar-desktop" style={menuStyles}>
        <ul className="navbar-center">
          <li>
            <a href="#">IPA</a>
          </li>
          <li>
            <a href="#">Brown Ale</a>
          </li>
          <li>
            <a href="#">Stout</a>
          </li>
          <li>
            <a href="#">Porter</a>
          </li>
          <li>
            <a href="#">Pilsner</a>
          </li>
          <li>
            <a href="#">Lager</a>
          </li>
          <li>
            <InputField></InputField>
          </li>
        </ul>
        <div className="navbar-right">
          <a href="#">
            <FontAwesomeIcon icon={faUserCheck} />
            <p>Babybob</p>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGlobe} />
            <p> DK</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
