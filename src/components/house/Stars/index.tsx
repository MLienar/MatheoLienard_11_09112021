import { Component } from 'react'
import star from '../../../assets/img/star.svg'

interface Props {
    className: string;
}


class Star extends Component<Props> {
    render() {
        return(
            <img className={ this.props.className } src={ star } alt="star"/>
        )
    }
}

export default Star 

