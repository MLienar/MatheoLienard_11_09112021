import { Component } from "react";
import styled from 'styled-components'

const BannerBlock = styled.div`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 2.5vh;  
    position: relative;
    overflow: hidden;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
        content: '';
        background: #000;
        opacity: 0.3;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`
const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const BannerTitle = styled.h1`
    font-size: clamp(30px, 2rem + 1vh, 40px);
    text-align: center;
    z-index: 5;
    font-weight: 500;
    color: white;
`

interface BannerProps {
    bannerText?: string,
    bannerImg: string
}

class Banner extends Component <BannerProps>{
    render() {        
        const bannerText = this.props.bannerText
        const bannerImgFile = this.props.bannerImg
        return (
            <BannerBlock>
                <BannerImg src={ bannerImgFile }/>
                <BannerTitle>{ bannerText }</BannerTitle> 
            </BannerBlock>

        )
    }
}

export default Banner

