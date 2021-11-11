import { Component } from 'react'
import styled from 'styled-components'

interface Props {
    title: string,
    subtitle: string
}

const HouseTitle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
`

const Name = styled.h1`
    font-size: clamp(25px, 1rem + 0.5vw, 30px);
    font-weight: 500;
`

const City = styled.p`
    margin-top: 1vh;
`

class HouseName extends Component<Props> {
    render() {
        return(
            <HouseTitle>
                <Name>{this.props.title}</Name>
                <City>{this.props.subtitle}</City>
            </HouseTitle>
        )
    }
}

export default HouseName