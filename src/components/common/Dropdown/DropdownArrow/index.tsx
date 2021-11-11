import { Component } from 'react'
import Arrow from "../../../../assets/img/arrow.svg"
import styled from 'styled-components'

interface Props {
    open: boolean
}

const ArrowImg = styled.img<Props>`
    height: 50%;
    transform: ${props => props.open ? "rotate(180deg)": "rotate(0deg)"};
    transition: all 0.2s ease-in-out ;
`

class DropdownArrow extends Component<Props>{
    
    render() {
        return (
            <ArrowImg src={ Arrow } alt="arrow" open={ this.props.open }/>
        )
    }
}

export default DropdownArrow
