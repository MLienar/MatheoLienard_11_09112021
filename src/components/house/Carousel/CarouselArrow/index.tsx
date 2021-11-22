import { Component } from "react";
import Arrow from '../../../../assets/img/carrousel-arrow.svg'


interface Props {
    indexChange: any
}

class CarouselArrow extends Component<Props> {
    render() {
        return (
            <img src={Arrow} alt="arrow" onClick={ this.props.indexChange } className="button carrousel-arrow" />
        )
    }
}

export default CarouselArrow