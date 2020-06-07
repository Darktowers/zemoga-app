import React, { useState } from 'react'
import './banner.scss'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export interface BannerProps {
  handleClick?: any,
  children: any,
  close?: boolean
}

export const Banner = ({ handleClick, children, close = false }: BannerProps) => {
  const [closeStatus, setCloseStatus] = useState(false);

  return (<>
    {!closeStatus ? <div className="banner">
      {children}
      {close ?
        <div className="banner-close" onClick={() => setCloseStatus(true)}>
          <FontAwesomeIcon icon={faTimes} />
        </div> :
        null
      }
    </div> :
      null
    }
  </>
  );
}
