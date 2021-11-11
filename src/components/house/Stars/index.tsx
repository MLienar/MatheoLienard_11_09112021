import { Component } from 'react'
import star from '../../../assets/img/star.svg'
import styled from 'styled-components'

interface Props {
    color: string;
}

const Icon = styled.img<Props>`
    height: clamp(20px, 4vh, 35px);
    width: auto;
    filter: ${props => props.color === "orange" ? "unset" : "saturate(0) brightness(160%)"}
`

class Star extends Component<Props> {
    render() {
        return(
            <Icon src={ star } alt="star" color={this.props.color}  />
        )
    }
}

export default Star 