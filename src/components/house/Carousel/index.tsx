import { Component } from "react";

interface Props {
    photos: string[]
}

interface State {
    index: number
}

class Carousel extends Component<Props, State> {
    constructor(props: Props) {
        super(props) 
        this.state = {
            index: 0,
        }
    }

    indexChange(operator:string) {
        const length = this.props.photos.length
        let newIndex
        console.log(length);
        
        operator === "plus" ? newIndex = this.state.index + 1 : newIndex = this.state.index - 1 
        if (newIndex < 0) {
            newIndex = length - 1
        }
        if (newIndex === length) {
            newIndex = 0
        }
        this.setState({ index: newIndex })
    }

    render() {
        const pictures = this.props.photos
        const index = this.state.index
        // console.log(index);
        
        return(
            <div>
                <img src={ pictures[index] } alt="" onClick={() => this.indexChange("plus") }/>
            </div>
            
        )
    }
}

export default Carousel