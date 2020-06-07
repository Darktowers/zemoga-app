import React, { useState } from 'react'
import './vote-card-high-light.scss'
import { Vote } from '../../models/vote';
import { ButtonSite } from '../buttonSite/buttonSite';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VotesButtonsHighLight } from '../votes-buttons-high-light/votes-buttons-high-light';


export interface VoteProps {
    vote: Vote,
}

export const VoteCardHighLight = ({ vote }: VoteProps) => {
    const [voteStatus, setVoteStatus] = useState(false);

    const voteAgain = () => {
        setVoteStatus(false);
    }
    const alreadyVoteStatus = () => {
        setVoteStatus(true);
    }


    return (
        <div className="voteCardH">
            <div className="voteCardH-overlay"></div>

            <div className="voteCardH-content">
                <div className="voteCardH-content-famous">
                    <p>Whats your opinion on</p>
                    <h3 className="voteCardH-content-famous-name">{vote.name}?</h3>
                </div>
                <div className="voteCardH-content-votes">
                    {voteStatus === false ?
                        <>
                            <p className="voteCardH-content-votes-description">{vote.description}</p>
                            <div className="linkContainer">
                                <FontAwesomeIcon icon={faWikipediaW} />
                                <a className="voteCardH-content-votes-link" target="_blanc" href={vote.moreInfo}> More information</a>
                            </div>
                            <p><br/><b>What's your verdict?</b></p>
                            <VotesButtonsHighLight id={vote.id} handleClick={() => { alreadyVoteStatus() }} />
                        </>
                        :
                        <>
                            <p className="voteCardH-content-votes-description">Thanks for voting!</p>
                            <div className="voteCardH-content-votes-container">
                                <ButtonSite handleClick={voteAgain}>Vote Again</ButtonSite>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
