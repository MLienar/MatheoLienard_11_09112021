import { Component } from "react";
import styled from "styled-components";
import { House } from '../../utils/Interfaces'
import Carousel from "../../components/house/Carousel"
import HouseName from "../../components/house/HouseName"
import Owner from "../../components/house/Owner"
import Tag from "../../components/house/Tags"
import Star from "../../components/house/Stars"
import Dropdown from "../../components/common/Dropdown"

interface Props {
    houseId?: string
}

interface State {
    house: House
}

const HouseContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 65vh;
`

const HouseDetails = styled.div`
    display: flex;        
    flex-flow: row nowrap;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
        flex-flow: column nowrap;
    }
`

const ElemColumn = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    color: var(--orange);
`

const RightColumn = styled(ElemColumn)`
    align-items: flex-end;
    @media screen and (max-width: 780px) {
        flex-flow: row-reverse nowrap;
        align-items: center;
        margin: 2vh 0;
    }
`

const LeftColumn = styled(ElemColumn)`
    align-items: flex-start;
`


const ElemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const StarsContainer = styled(ElemContainer)`
    margin-top: 1vh;
`

const TagsContainer = styled(ElemContainer)`
    @media screen and (max-width: 780px) {
        flex-flow: row wrap;
    }
`

const DropDownsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 780px) {
        flex-flow: column nowrap;
    }
`

const DropDownContainer = styled.div`
    width: 47%;
    @media screen and (max-width: 780px) {
        width: 100%;
    }
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
                rating: 0,
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
                <HouseDetails>
                    <LeftColumn>
                        <HouseName title={house.title} subtitle={house.location} />
                        <TagsContainer>
                            { house.tags.map((tag, i) => {
                                return <Tag tag={tag} key={i} />
                            }) }
                        </TagsContainer>
                    </LeftColumn>
                    <RightColumn>
                        <Owner host={house.host}></Owner>
                        <StarsContainer>
                            {Array.from({length: house.rating }, (_, i) => <Star color="orange" key={i} />)}
                            {Array.from({length: 5- house.rating }, (_, i) => <Star color="grey" key={i} />)} 
                        </StarsContainer>
                    </RightColumn>
                </HouseDetails>

                <DropDownsContainer>
                    <DropDownContainer>
                        <Dropdown title="Description" details={house.description} />
                    </DropDownContainer>   
                    <DropDownContainer>
                        <Dropdown title="Equipement" list={house.equipments} />
                    </DropDownContainer>   
                </DropDownsContainer>
            </HouseContainer>
            )

    }
}

export default HouseSheet