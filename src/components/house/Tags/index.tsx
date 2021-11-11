import {Component} from 'react'
import styled from 'styled-components'

interface Props {
    tag: string
}

const TagTile = styled.p`
    background: var(--orange);
    padding: 6px 25px;
    margin-right: 5px;
    font-size: clamp(12px, 0.8rem + 0.2vh, 17px);
    border-radius: 50px;
    color: white;
`

class Tag extends Component<Props>{
    render() {
        return (
            <TagTile >{ this.props.tag }</TagTile>
        )
    }
}   

export default Tag