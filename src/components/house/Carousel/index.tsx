import { Component } from "react";
import CarouselArrow from "../Carousel/CarouselArrow"
import styled from "styled-components"
import CarouselImg from '../Carousel/CarouselImg'


interface Props {
    photos: string[]
}

interface State {
    index: number
}

const CarouselContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    height: clamp(200px, 35vh, 550px);
    border-radius: 10px;
    overflow: hidden;
`

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
        
        return(
            <CarouselContainer>
                <CarouselArrow  indexChange={() => this.indexChange("minus") } />
                <CarouselImg url={ pictures[index] }/>
                <CarouselArrow indexChange={() => this.indexChange("plus") } />
            </CarouselContainer>
            
        )
    }
}

export default Carousel