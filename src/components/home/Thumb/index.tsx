import { Component } from 'react'
import { House } from '../../../utils/Interfaces'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Thumbnail = styled(Link)`
    position: relative;
    width: 100%;
    height: clamp(250px, 20vw, 350px);
    text-decoration: none;
    overflow: hidden;
    border-radius: 5px;
    &:after {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        z-index: 1;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    }
`

const Picture = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
`

const Title = styled.h2`
    position: absolute;
    width: clamp(150px, 50%, 250px);
    bottom: 20px;
    left: 30px;
    font-weight: 500;
    color: white;
    z-index: 2;
`

interface Props {
    house: House,
}

interface State {
    house: House
}

class Thumb extends Component<Props, State> {
    render() {
        const house = this.props.house
        return(
            <Thumbnail key={`house-${house.id}`} to={`/house/${house.id}`}>
                <Picture src={house.pictures[0]} alt={house.title + 'poto'} />
                <Title>{house.title}</Title>
            </Thumbnail>
        )
    }
}

export default Thumb