import { Component } from "react";
import styled from "styled-components";
import { House } from '../../utils/Interfaces'
import Carousel from "../../components/house/Carousel"
import HouseName from "../../components/house/HouseName"
import Owner from "../../components/house/Owner"
import Tag from "../../components/house/Tags"
import Star from "../../components/house/Stars"

interface Props {
    houseId?: string
}

interface State {
    house: House
}

const HouseContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
const ElemLine = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 4vh;
    color: var(--orange);
`

const ElemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
            <HouseContainer className="main-wrapper">
                <Carousel photos={house.pictures} />
                <ElemLine>
                    <HouseName title={house.title} subtitle={house.location} />
                    <Owner host={house.host}></Owner>
                </ElemLine>
                <ElemLine>
                    <ElemContainer>
                        { house.tags.map((tag) => {
                            return <Tag tag={tag} />
                        }) }
                    </ElemContainer>
                </ElemLine>
            </HouseContainer>
            )

    }
}

export default HouseSheet