import { Component } from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Logo from '../../../assets/img/logo.svg'

const MyHeader = styled.header`
    display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 2.5vh 0;
`

const NavLinks = styled(Link)`
	color: var(--orange);
	text-decoration: none;
	font-weight: 500;
	margin-left: 50px;
	font-size: 1.2rem;
    @media screen and (max-width: 650px) {
        font-size: 1rem;
        margin-left: 5vw;
    }
`
    
const AppLogo = styled.img`
    width: clamp(120px, 10vw, 240px);
	height: auto;
`


class Header extends Component { 
    render() {
        return (
            <MyHeader className='main-wrapper'>
                <AppLogo src={ Logo } alt="Kasa Logo" />
                <nav>  
                    <NavLinks to="/">Accueil</NavLinks>
                    <NavLinks to="/about">A propos</NavLinks>
                </nav>
            </MyHeader>
        )
    }
}

export default Header