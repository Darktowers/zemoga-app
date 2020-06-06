import React from "react";
import "./footer.scss";

export interface FooterProps {
  description?: string;
  description2?: string;
}

export const Footer = (props: FooterProps) => (
  <div className="Footer">
    <div className="Footer-logo">
      <a className="Footer-logo_img" href="/">
      </a>
      <div className="Footer-logo_text">
        <p>{props.description}</p>
        <p> {props.description2}</p>
      </div>
    </div>
    <div className="Footer-media">
      <div className="Footer-media_icon">
      </div>
    </div>
  </div>
);
