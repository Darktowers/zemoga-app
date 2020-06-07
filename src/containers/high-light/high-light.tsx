

import React from 'react'
import './high-light.scss'
import { Vote } from '../../models/vote'
import { VoteCardHighLight } from '../../components/vote-card-high-light/vote-card-high-light'
export const HighLigthSection = () => {
    const vote: Vote = {
        id: "1",
        date: "1 month ago",
        image: "/pope.jpg",
        name: "Pope Francis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt fuga nostrum. Reprehenderit sed facilis possimus ratione fuga pariatur, neque nostrum quaerat dicta explicabo obcaecati libero accusantium ipsa ipsam doloribus.",
        type: "Entertainment",
        votes: {
            dislikes: 100,
            likes: 250
        },
        moreInfo: "https://en.wikipedia.org/wiki/Pope_Francis",
        closing: "22"
    }
    return (
        <section className="hightLight"> 
            <div className="hightLight-container">
                <div className="hightLight-container-famous">
                    <img className="hightLight-container-famous-img" src={vote.image} alt={vote.name} />
                    <VoteCardHighLight vote={vote} />
                    <div className="hightLight-container-famous-final">
                        <div className="hightLight-container-famous-final-close">
                            <p>CLOSING IN</p>
                        </div>
                        <div className="hightLight-container-famous-final-days">
                            <h3><b>{vote.closing}</b> days</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}