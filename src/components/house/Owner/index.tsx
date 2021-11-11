import { Component } from 'react'
import styled from "styled-components"

interface Host {
    name: string;
    picture: string
}

interface Props {
    host: Host
}

const OwnerDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const OwnerPhoto = styled.img`
    width: clamp(70px, 5vw, 100px);
    height: clamp(70px, 5vw, 10 0px);
    margin-left: 20px;
    border-radius: 200px;
    overflow: hidden;
    object-fit: cover;
`

const OwnerName = styled.p`
    width: 50px;
    text-align: right;
    line-height: 24px;
    margin-left: 50px;
`
    


class Owner extends Component<Props> {
    render() {
        return(
            <OwnerDiv>
                <OwnerName>{ this.props.host.name }</OwnerName>
                <OwnerPhoto src={ this.props.host.picture} />
                
            </OwnerDiv>
        )
    }
}

export default Owner