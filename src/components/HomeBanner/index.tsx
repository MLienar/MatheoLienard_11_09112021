import { Component } from "react";
import BannerImgFile from '../../assets/img/img-home.png'
import styled from 'styled-components'

const Banner = styled.div`
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

class HomeBanner extends Component {
    render() {
        return (
            <Banner>
                <BannerImg src={ BannerImgFile }/>
                <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
            </Banner>

        )
    }
}

export default HomeBanner

