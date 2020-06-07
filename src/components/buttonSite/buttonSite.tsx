import React from 'react'
import './buttonSite.scss'
export interface ButtonSiteProps {
  handleClick?: any,
  children: any,
  black?: boolean
}
export const ButtonSite = ({ handleClick, children, black = false }: ButtonSiteProps) => {
  return (
    <button className={`buttonSite ${black ? 'black' : ''}`} onClick={handleClick} >{children}</button>
  );
}
