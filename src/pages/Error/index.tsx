import { Component } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = styled.div`
    display: flex;
    flex-flow: column nowrap;
    color: var(--orange);
    height: 90vh;
    background: white;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: 4;
    text-align: center;
    padding: 0 5vw;
`

const BigError = styled.h1`
    font-size: 10rem;
    font-weight: 600;
`

const ErrorMessage = styled.p`
    font-size: 2rem;
    margin: 30px 0;
    @media screen and (max-width: 700px ) {
        font-size: 1.5rem;
    } 
`

const HomeLink = styled(Link)`
    font-size: 1.3rem;
    color: var(--orange);
    margin-top: 100px;
    @media screen and (max-width: 700px ) {
        font-size: 1.2rem;
    } 
`

class Error extends Component {
    render() {
        return (
            <ErrorPage>
                <BigError>404</BigError>
                <ErrorMessage>Oups ! La page que vous demandez n'existe pas.</ErrorMessage>
                <HomeLink to="/">Retour à la page d'accueil</HomeLink>
            </ErrorPage>

        )
    }
}

export default Error