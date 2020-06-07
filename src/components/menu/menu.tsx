import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const open = () => {
    setOpenMenu(!openMenu);
  }
  return <>
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <span className="header-logo-span">Rule of Thumb.</span>
          </Link>
        </div>
        <div className="header-open" onClick={open}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`header-navigation ${openMenu ? 'open' : ''}`} >
          <div className="close" onClick={open}> <FontAwesomeIcon icon={faTimes} /></div>
          <ul className="header-navigation-ul" onClick={open}>
            <li className="header-navigation-ul-item">
              <Link to="/trials" className="header-navigation-ul-item-url">Past Trials</Link>
            </li>
            <li className="header-navigation-ul-item">
              <Link to="/how-it-works" className="header-navigation-ul-item-url">How it works</Link>
            </li>
            <li className="header-navigation-ul-item">
              <Link to="/login" className="header-navigation-ul-item-url">Log In/Sign Up</Link>
            </li>
            <li className="header-navigation-ul-item">
              <Link to="/search" className="header-navigation-ul-item-url"><span> <FontAwesomeIcon icon={faSearch} /> </span></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>

  </>
};

export default Menu
