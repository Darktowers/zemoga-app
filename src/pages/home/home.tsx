import React from 'react'
import { VotesContainer } from '../../containers/votes-cards/votes-cards';
import './home.scss'
import { Banner } from '../../components/banner/banner';
import { ButtonSite } from '../../components/buttonSite/buttonSite';
import { HighLigthSection } from '../../containers/high-light/high-light';
import { Helmet } from 'react-helmet-async';
const Home = () => (<>
  <Helmet>
    <title>Home</title>
  </Helmet>
  <HighLigthSection />
  <div className="container wrap">
    <Banner close={true}>
      <div className="text">
        <h4>Speak out be heard</h4>
        <h3>Be counted</h3>
      </div>
      <div className="text2">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, distinctio omnis corporis, officia suscipit temporibus ipsum, a libero reprehenderit natus eos! Eaque natus saepe modi porro, perferendis odio placeat odit!</p>
      </div>
    </Banner>
    <h2>Votes</h2>
    <VotesContainer />
    <Banner>
      <div className="overlay">
        <div className="overlay-filter"></div>
        <img className="overlay-src" src="/overlay.jpg" alt="" />
      </div>
      <div className="overItems">
        <h4 className="text3">Is there anyone else you would want us to add?</h4>
        <ButtonSite black={true}>Submit a Name</ButtonSite>
      </div>
    </Banner>
  </div>
</>
)
export default Home;
