import { Component } from "react";
import LogoWhite from '../../../assets/img/logo-white.svg'
import styled from 'styled-components'

const FooterDiv = styled.footer`
    background: black;
    width: 100%;
    margin-top: 75px;
    padding: 75px 0;
    display: flex;
    align-items : center ;
    justify-content: center;
    flex-flow: column nowrap;
    color: white;

`

const FooterLogo = styled.img`
    margin-bottom: 20px;
`
    


class Footer extends Component {
    render() {
        return (
            <FooterDiv>
                <FooterLogo src={LogoWhite} alt="logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </FooterDiv>
        )
    }
}

export default Footer