import { Component } from 'react'

interface Props {
    url: string
}

class CarouselImg extends Component<Props> {
    render() {
        return (
            <img src={this.props.url} alt="house" />
        )
    }

}

export default CarouselImg