import React from 'react'
import './buttonSite.scss'
export interface ButtonSiteProps {
  handleClick?: any,
  children: any
}
export const ButtonSite = ({ handleClick, children }: ButtonSiteProps) => {
  return (
    <button className="buttonSite" onClick={handleClick} >{children}</button>
  );
}
