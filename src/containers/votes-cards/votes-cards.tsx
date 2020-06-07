

import React from 'react'
import data from './celebrity.json'
import { Vote } from '../../models/vote'
import { VoteCard } from '../../components/vote-card/vote-card'
import './votes-cards.scss'
export const VotesContainer = () => {
    const celebrity = data as [Vote];
    return (
        <section className="container">
            {
                celebrity.map((famous: Vote, i: number) => (
                    <VoteCard key={i} vote={famous} />
                ))
            }
        </section>
    )
}