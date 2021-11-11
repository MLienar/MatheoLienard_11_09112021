import { Component } from "react";

import { House } from '../../utils/Interfaces'

interface Props {
    houseId?: string
}

interface State {
    house: House
}

class HouseSheet extends Component<Props, State> {

    componentDidMount() {
        const fetchData = async () => {
          try  {
              const data = await fetch("projects/Front-End+V2/P9+React+1/logements.json")
              const list = await data.json()
              for (const house of list) {
                  if (house.id === this.props.houseId) {
                    console.log(house);
                    
                  }
              }
          } catch (err) {
              console.log(err);
          }
        }
        fetchData()
    }   

    render() {
        return (
            <h1>HouseName</h1>
        )
    }
}

export default HouseSheet