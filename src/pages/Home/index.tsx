import React from 'react';
import '../../App.css';
import { Component } from 'react';
import ThumbGrid from '../../components/ThumbGrid';
import HomeBanner from '../../components/HomeBanner';

class Home extends Component {
render() {

    return(
      <main className="main-wrapper">
        <HomeBanner />
        <ThumbGrid />
      </main>
    )
  };
}

export default Home;