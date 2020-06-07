import React, { useState } from 'react'
import './votes-buttons.scss'
import { ButtonVote } from '../buttonVote/buttonVote';
import { ButtonSite } from '../buttonSite/buttonSite';
import { VotesService } from '../../services/votes/votes.service';

export interface ButtonSiteProps {
  handleClick?: any,
  id: string,
}

export const VotesButtons = ({ handleClick, id }: ButtonSiteProps) => {
  const votesService = new VotesService();
  const [voteStatus, setVoteStatus] = useState('');
  const saveVote = () => {
    if (voteStatus !== '') {
      votesService.addVote(id, voteStatus, 1)
      handleClick();
    }
  }
  const setVote = (type: string) => {
    setVoteStatus(type)
  }
  return (
    <div>
      <ButtonVote type={'like'} handleClick={() => { setVote('like') }} active={voteStatus === 'like'} />
      <ButtonVote type={'dislike'} handleClick={() => { setVote('dislike') }} active={voteStatus === 'dislike'} />
      <ButtonSite handleClick={saveVote} >Vote Now</ButtonSite>
    </div>
  );
}
