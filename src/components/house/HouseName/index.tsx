import { Component } from 'react'

interface Props {
    title: string,
    subtitle: string
}


class HouseName extends Component<Props> {
    render() {
        return(
            <div className="houseTitle">
                <h1 className="houseName">{this.props.title}</h1>
                <p className="houseCity">{this.props.subtitle}</p>
            </div>
        )
    }
}

export default HouseName