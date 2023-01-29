import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputField } from "../inputField/inputField";
import {
  faUserCheck,
  faGlobe,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.png";
import "./navbar.css";

const NavBar = (props: any) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} />
      </div>
      <div className="navbar-drawer">
        <ul className="navbar-center">
          <li>
            <a href="#">Serier</a>
          </li>
          <li>
            <a href="#">Vugge</a>
          </li>
          <li>
            <a href="#">Børnesenge</a>
          </li>
          <li>
            <a href="#">Opbevaring</a>
          </li>
          <li>
            <a href="#">Højstol</a>
          </li>
          <li>
            <a href="#">Pusle</a>
          </li>
          <li>
            <a href="#">Tekstiler</a>
          </li>
          <li>
            <a href="#">Tilbehør</a>
          </li>
          <li>
            <a href="#">Reservedele</a>
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
