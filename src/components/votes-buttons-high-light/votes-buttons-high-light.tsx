import React, { useState } from 'react'
import './votes-buttons-high-light.scss'
import { ButtonVote } from '../buttonVote/buttonVote';
import { VotesService } from '../../services/votes/votes.service';

export interface ButtonSiteProps {
  handleClick?: any,
  id: string,
}

export const VotesButtonsHighLight = ({ handleClick, id }: ButtonSiteProps) => {
  const votesService = new VotesService();
  const [voteStatus, setVoteStatus] = useState('');
  const saveVote = () => {
    if (voteStatus !== '') {
      votesService.addVote(id, voteStatus, 1)
    }
  }
  const setVote = (type: string) => {
    setVoteStatus(type);
    saveVote();
    handleClick();
  }
  return (
    <div className="votesButtonsH">
      <ButtonVote type={'like'} handleClick={() => { setVote('like') }} active={voteStatus === 'like'} />
      <ButtonVote type={'dislike'} handleClick={() => { setVote('dislike') }} active={voteStatus === 'dislike'} />
    </div>
  );
}
