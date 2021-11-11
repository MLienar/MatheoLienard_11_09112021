import React from 'react';
import '../../App.css';
import { Component } from 'react';
import ThumbGrid from '../../components/home/ThumbGrid';
import Banner from '../../components/common/Banner';
import BannerImgFile from '../../assets/img/img-home.png'

class Home extends Component {
render() {
  const bannerText = "Chez vous, partout et ailleurs"
    return(
      <main className="main-wrapper">
        <Banner bannerText={ bannerText } bannerImg={ BannerImgFile }/>
        <ThumbGrid />
      </main>
    )
  };
}

export default Home;