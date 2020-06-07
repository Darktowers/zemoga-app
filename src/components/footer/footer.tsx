import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <p>Follow Us</p>
          <a target="_blanc" href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} /> 
          </a>
          <a target="_blanc" href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} /> 
          </a>
        </div>
        <nav className="footer-navigation">
          <ul className="footer-navigation-ul">
            <li className="footer-navigation-ul-item">
              <Link to="/terms" className="footer-navigation-ul-item-url">Terms and conditions</Link>
            </li>
            <li className="footer-navigation-ul-item">
              <Link to="/privacy" className="footer-navigation-ul-item-url">Privacy Policy</Link>
            </li>
            <li className="footer-navigation-ul-item">
              <Link to="/contact-us" className="footer-navigation-ul-item-url">Contact Us</Link>
            </li>

          </ul>
        </nav>
      </div>
    </footer>

  </>
};

export default Footer
