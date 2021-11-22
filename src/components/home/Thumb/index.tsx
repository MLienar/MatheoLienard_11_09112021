import { Component } from 'react'
import { House } from '../../../utils/Interfaces'
import { Link } from 'react-router-dom'


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
            <Link className="thumbnail" key={`house-${house.id}`} to={`/house/${house.id}`}>
                <img className="thumbPicture" src={house.pictures[0]} alt={house.title + 'poto'} />
                <h2 className="thumbTitle">{house.title}</h2>
            </Link>
        )
    }
}

export default Thumb