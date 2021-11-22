import { Component } from 'react'

interface Host {
    name: string;
    picture: string
}

interface Props {
    host: Host
}



class Owner extends Component<Props> {
    render() {
        return(
            <div className="ownerDiv">
                <p className="ownerName">{ this.props.host.name }</p>
                <img className="ownerPhoto" alt="owner" src={ this.props.host.picture} />
                
            </div>
        )
    }
}

export default Owner