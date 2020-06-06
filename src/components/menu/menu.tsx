import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
export interface MenuProps {
  title?: string;
  path?: any;
}

const Menu = (props: MenuProps) => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/" className="navbar-item">Home</Link>
        </li>
      </ul>
    </nav>
  </>
};

export default Menu
