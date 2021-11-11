import { Component } from "react";
import { House } from '../../../utils/Interfaces'
import Thumb from '../Thumb'
import styled from 'styled-components'

type IProps = {
}

type IState = {
  houseList: House[];
}

const ThumbsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    padding: 40px;
    background: var(--gris);
    border-radius: 10px;
    @media screen and (max-width: 950px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 600px) {
        display: flex;
        flex-flow: column nowrap;
        padding: 5vw;
        gap: 5vw;
    }
`
    
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
            <ThumbsGrid>
                { housesDOM }
            </ThumbsGrid>
        )
    }
}

export default ThumbGrid