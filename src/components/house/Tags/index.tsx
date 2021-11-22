import {Component} from 'react'

interface Props {
    tag: string
}


class Tag extends Component<Props>{
    render() {
        return (
            <p className="tagTile" >{ this.props.tag }</p>
        )
    }
}   

export default Tag