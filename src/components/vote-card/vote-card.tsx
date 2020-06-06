import React, { useState, useEffect, useCallback } from 'react'
import './vote-card.scss'
import { Vote } from '../../models/vote';
import { ButtonSite } from '../buttonSite/buttonSite';
import { ButtonVote } from '../buttonVote/buttonVote';

export interface VoteProps {
    vote: Vote,
    alreadyVote?: boolean,
}
export const VoteCard = ({ vote, alreadyVote }: VoteProps) => {
    const [voteStatus, setVoteStatus] = useState(alreadyVote);
    const [actualWinner, setActualWinner] = useState('dislikes');
    const [likesPercent, setLikesPercent] = useState(0);
    const [disLikesPercent, setDisLikesPercent] = useState(0);
    const voteAgain = () => {
        setVoteStatus(true);
    }

    const proccessPercents = useCallback(() => {
        const { likes, dislikes } = vote.votes;
        const total = likes + dislikes;
        const dislikesPercent = (dislikes * 100) / total;
        const likesPercent = (likes * 100) / total;
        setDisLikesPercent(Math.round(dislikesPercent));
        setLikesPercent(Math.round(likesPercent));
        setActualWinner(likes > dislikes ? 'likes' : 'dislikes');
    }, [vote]);

    useEffect(() => {
        proccessPercents();
    }, [vote, proccessPercents]);

    return (
        <div className="voteCard">
            <figure className="voteCard-image">
                <img className="voteCard-image-src" src={vote.image} alt={vote.name} />
            </figure>
            <div className="voteCard-content">
                <div className="voteCard-content-famous">
                    <div className="voteCard-content-famous-status">
                        {actualWinner === 'likes' ?
                            <ButtonVote type={'like'} />
                            :
                            <ButtonVote type={'dislike'} />
                        }
                    </div>
                    <h3 className="voteCard-content-famous-name">{vote.name}</h3>
                </div>
                <p className="voteCard-content-date">{vote.date} in {vote.type}</p>
                <div className="voteCard-content-votes">
                    {voteStatus ?
                        <>
                            <p className="voteCard-content-description">{vote.description}</p>
                            <p>Vote Component</p>
                        </>
                        :
                        <>
                            <p className="voteCard-content-description">Thanks for voting!</p>
                            <ButtonSite handleClick={voteAgain}>Vote Again</ButtonSite>
                        </>
                    }
                </div>
            </div>
            <div className="voteCard-percents">
                <div className="voteCard-percents-slider dislikes" style={{ width: `${disLikesPercent}%` }}>
                    <div className="voteCard-percemts-slider-data">
                        <ButtonVote type={'dislike'} size="2x" />
                        <p>{disLikesPercent}%</p>
                    </div>
                </div>
                <div className="voteCard-percents-slider likes" style={{ width: `${likesPercent}%` }}>
                    <div className="voteCard-percemts-slider-data">
                        <ButtonVote type={'like'} size="2x" />
                        <p>{likesPercent}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
