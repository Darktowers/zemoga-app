import React from 'react'
import { VoteCard } from '../../components/vote-card/vote-card';
import { Vote } from '../../models/vote';
const vote: Vote = {
  id: '1',
  date: '1 month ago',
  image: 'https://images-na.ssl-images-amazon.com/images/I/A1bqwyrSQoL._CR0,0,3840,2880_._SL1000_.jpg',
  name: 'Kanye West',
  description: "Lorem ipsum asdff asdfasdfasd fasdf asdfsadfsadfasd fasdf",
  type: "Entertainment",
  votes: {
    dislikes: 100,
    likes: 250
  }
}
const Home = () => (<>
  <h1>HOME</h1>
  <VoteCard vote={vote} alreadyVote={false} ></VoteCard>
</>
)
export default Home;
