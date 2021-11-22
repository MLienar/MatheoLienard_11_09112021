import { Component } from "react";
import { House } from '../../../utils/Interfaces'
import Thumb from '../Thumb'

type IProps = {
}

type IState = {
  houseList: House[];
}


class ThumbGrid extends Component<IProps, IState>  {
    constructor(props: any) {
        super(props)
        this.state = {
            houseList: []
        }
    }

    componentDidMount() {
        const fetchData = async () => {
          try  {
              const data = await fetch("/projects/Front-End+V2/P9+React+1/logements.json")
              const list = await data.json()
              console.log(list);
              
              this.setState({ houseList: list })
          } catch (err) {
              console.log(err);
          }
        }
        fetchData()
    }   


    render() {
        const houses = this.state.houseList
        const housesDOM = houses.map((house: House) => 
          <Thumb house={ house } key={ house.id } />
        )

        return (
            <div className="thumbsGrid">
                { housesDOM }
            </div>
        )
    }
}

export default ThumbGrid