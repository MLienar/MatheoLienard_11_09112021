import { Component } from "react";
import Arrow from '../../../../assets/img/carrousel-arrow.svg'
import styled from "styled-components"

interface Props {
    indexChange: any
}

const Button = styled.img`
    position: absolute;
    z-index: 2;
    height: 15%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`

class CarouselArrow extends Component<Props> {
    render() {
        return (
            <Button src={Arrow} onClick={ this.props.indexChange } className="carrousel-arrow" />
        )
    }
}

export default CarouselArrow