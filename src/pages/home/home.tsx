import React from 'react'
import { VotesContainer } from '../../containers/votes-cards/votes-cards';
import './home.scss'

const Home = () => (<>
  <div className="container">
    <h2>Votes</h2>
    <VotesContainer />
  </div>
</>
)
export default Home;
