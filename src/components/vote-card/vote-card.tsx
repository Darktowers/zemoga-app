import React, { useState, useEffect, useCallback } from 'react'
import './vote-card.scss'
import { Vote } from '../../models/vote';
import { ButtonSite } from '../buttonSite/buttonSite';
import { ButtonVote } from '../buttonVote/buttonVote';
import { VotesButtons } from '../votes-buttons-form/votes-buttons';
import { VotesService } from '../../services/votes/votes.service';

export interface VoteProps {
    vote: Vote,
}

export const VoteCard = ({ vote }: VoteProps) => {
    const [voteStatus, setVoteStatus] = useState(false);
    const [actualWinner, setActualWinner] = useState('dislikes');
    const [likesPercent, setLikesPercent] = useState(0);
    const [disLikesPercent, setDisLikesPercent] = useState(0);
    const votesService = new VotesService();

    const voteAgain = () => {
        setVoteStatus(false);
    }
    const alreadyVoteStatus = () => {
        setVoteStatus(true);
    }
    const proccessPercents = useCallback(async () => {
        let { likes, dislikes } = vote.votes;
        const votes: any = await votesService.getVotesByID(vote.id);
        if (votes) {
            likes += votes.likes;
            dislikes += votes.dislikes;
        }
        const total = likes + dislikes;
        const dislikesPercent = (dislikes * 100) / total;
        const likesPercent = (likes * 100) / total;
        setDisLikesPercent(Math.round(dislikesPercent));
        setLikesPercent(Math.round(likesPercent));
        setActualWinner(likes > dislikes ? 'likes' : 'dislikes');
    }, [vote, votesService]);
    useEffect(() => {
        proccessPercents();
    }, [vote, proccessPercents]);

    return (
        <div className="voteCard">
            <div className="voteCard-overlay"></div>
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
                <div className="voteCard-content-votes">
                    <p className="voteCard-content-votes-date"><b>{vote.date}</b> in {vote.type}</p>
                    {voteStatus === false ?
                        <>
                            <p className="voteCard-content-votes-description">{vote.description}</p>
                            <VotesButtons id={vote.id} handleClick={() => { proccessPercents(); alreadyVoteStatus() }} />
                        </>
                        :
                        <>
                            <p className="voteCard-content-votes-description">Thanks for voting!</p>
                            <div className="voteCard-content-votes-container">
                                <ButtonSite handleClick={voteAgain}>Vote Again</ButtonSite>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="voteCard-percents">
                <div className="voteCard-percents-slider likes" style={{ width: `${likesPercent}%` }}>
                    <div className="voteCard-percents-slider-data ">
                        <div className="data">
                            <ButtonVote type={'like'} size="2x" />
                            <p><span className="data-number">{likesPercent}</span> <span className="data-percent">%</span></p>
                        </div>
                    </div>
                </div>
                <div className="voteCard-percents-slider dislikes last" style={{ width: `${disLikesPercent}%` }}>
                    <div className="voteCard-percents-slider-data">
                        <div className="data">
                            <p><span className="data-number">{disLikesPercent}</span> <span className="data-percent">%</span></p>
                            <ButtonVote type={'dislike'} size="2x" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
