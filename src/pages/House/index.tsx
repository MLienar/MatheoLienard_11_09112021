import { Component } from "react";
import { Navigate } from "react-router-dom";
import { House } from '../../utils/Interfaces'
import Carousel from "../../components/house/Carousel"
import HouseName from "../../components/house/HouseName"
import Owner from "../../components/house/Owner"
import Tag from "../../components/house/Tags"
import Star from "../../components/house/Stars"
import Dropdown from "../../components/common/Dropdown"

interface Props {

}

interface State {
    house: House,
    houseId: string,
    redirect: boolean
}

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
            },
            houseId: "",
            redirect: false
        }
    }

    componentDidMount() {
        const fetchData = async () => {
          try  {
              const data = await fetch("../projects/Front-End+V2/P9+React+1/logements.json")
              const list = await data.json()
              const url:string = document.location.href
              const slashIndex:number = url.lastIndexOf("/")
              const urlParam:string = url.substring(slashIndex + 1) 
              let houseExists = false
              for (const house of list) {
                  if (house.id === urlParam) {
                    this.setState({ house})
                    houseExists = true
                  }
              }
              if(!houseExists){ 
             this.setState({redirect: true})
              }
          } catch (err) {
              console.log(err);
          }
        }
        fetchData()
    }   

    render() {
            const house = this.state.house
            if (this.state.redirect) {
                return <Navigate to='/error' />
            }
            return (
            <div className="houseContainer main-wrapper">
                <Carousel photos={house.pictures} />
                <div className="houseDetails">
                    <div className="elemColumn leftColumn">
                        <HouseName title={house.title} subtitle={house.location} />
                        <div className="tagsContainer elemContainer">
                            { house.tags.map((tag, i) => {
                                return <Tag tag={tag} key={i} />
                            }) }
                        </div>
                    </div>
                    <div className="elemColumn rightColumn">
                        <Owner host={house.host}></Owner>
                        <div className="elemContainer starsContainer">
                            {Array.from({length: house.rating }, (_, i) => <Star className="icon" key={i} />)}
                            {Array.from({length: 5- house.rating }, (_, i) => <Star className="iconGrey icon" key={i} />)} 
                        </div>
                    </div>
                </div>

                <div className="dropDownsContainer">
                    <div className="dropDownContainer">
                        <Dropdown title="Description" details={house.description} />
                    </div>   
                    <div className="dropDownContainer">
                        <Dropdown title="Equipement" list={house.equipments} />
                    </div>   
                </div>
            </div>
            )

    }
}

export default HouseSheet