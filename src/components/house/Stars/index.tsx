import { Component } from 'react'
import star from '../../../assets/img/star.svg'
import styled from 'styled-components'

interface Props {
    colored: boolean;
}

// const Icon = styled.img<Props>`
    
// `

class Star extends Component<Props> {
    render() {
        return(
            <img src={ star } alt="star"  />
        )
    }
}

export default Star 