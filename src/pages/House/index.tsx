import { Component } from "react";
import styled from "styled-components";
import { House } from '../../utils/Interfaces'
import Carousel from "../../components/house/Carousel"


interface Props {
    houseId?: string
}

interface State {
    house: House
}

const HouseContainer = styled.div`
    display: flex;

`

class HouseSheet extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            house: {
                id: "",
                title:"",
                cover:"",
                pictures: [],
                description: "",
                host: {
                    name:"",
                    picture:""
                },
                rating: "",
                location: "",
                equipments: [],
                tags: []
            }
        }
    }

    componentDidMount() {
        const fetchData = async () => {
          try  {
              const data = await fetch("../projects/Front-End+V2/P9+React+1/logements.json")
              const list = await data.json()
              for (const house of list) {
                  if (house.id === this.props.houseId) {
                    this.setState({ house: house})
                  }
              }
          } catch (err) {
              console.log(err);
          }
        }
        fetchData()
    }   

    render() {
            const house = this.state.house
            return (
            <HouseContainer>
                <Carousel photos={house.pictures} />
            </HouseContainer>
            )

    }
}

export default HouseSheet