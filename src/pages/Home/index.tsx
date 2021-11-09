import React from 'react';
import '../../App.css';
import { Component } from 'react';
import Thumb from '../../components/Thumb'

interface IProps {
}

interface IState {
  houseList: any;
}

interface House {
  id: string,
	title: string,
	cover: string,
	pictures: [	],
  description: string,
  host: {
			name: string,
			picture: string
		},
		rating: string,
		location: string,
		equipments: string[],
		tags: string[]
}

class Home extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
        houseList: []
    }
}

componentDidMount() {
  const fetchData = async () => {
    try  {
        const data = await fetch("projects/Front-End+V2/P9+React+1/logements.json")
        const list = await data.json()
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
      <li>{ house.id }</li>
    )
    return(
    <div className="App">
      <header className="App-header">
        {housesDOM}
      </header>
    </div>
    )
  };
}

export default Home;