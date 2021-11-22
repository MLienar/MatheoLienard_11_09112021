import { Component } from 'react'
import Arrow from "../../../../assets/img/arrow.svg"


interface Props {
    className: string
}

class DropdownArrow extends Component<Props>{
    
    render() {
        return (
            <img className={ this.props.className } src={ Arrow } alt="arrow"/>
        )
    }
}

export default DropdownArrow
