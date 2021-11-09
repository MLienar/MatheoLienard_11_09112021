import { Component } from 'react'

interface IProps {
    House: any
}

interface IState {

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

class Thumb extends Component<IProps, IState> {

}

export default Thumb