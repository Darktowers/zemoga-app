import React from 'react'
import './buttonVote.scss'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ButtonVoteProps {
  handleClick?: any,
  type: any,
  active?: boolean,
  size?: any
}
export const ButtonVote = ({ handleClick, type, active = false, size = '1x' }: ButtonVoteProps) => {
  return (
    <button onClick={handleClick} className={`${active ? 'active ' : ''} ${type} ${handleClick ? '' : ' tooltip'}  voteButton`} >
      {type === 'like' ?
        <FontAwesomeIcon icon={faThumbsUp} size={size} />
        :
        <FontAwesomeIcon icon={faThumbsDown} size={size} />
      }
    </button>
  );
}
