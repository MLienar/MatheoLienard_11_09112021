import { Component } from "react";

interface BannerProps {
    bannerText?: string,
    bannerImg: string
}

class Banner extends Component <BannerProps>{
    render() {        
        const bannerText = this.props.bannerText
        const bannerImgFile = this.props.bannerImg
        return (
            <div className="banner-block">
                <img className="banner-img" src={ bannerImgFile }/>
                <h1 className="banner-title">{ bannerText }</h1> 
            </div>

        )
    }
}

export default Banner

