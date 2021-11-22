import { Component } from 'react'

import bannerImg  from '../../assets/img/img-about.png'
import { aboutText } from '../../assets/aboutText/data'

import Banner from '../../components/common/Banner'
import Dropdown from '../../components/common/Dropdown'



class About extends Component {

    render() {
        return (
            <main className="main-wrapper">
                <Banner bannerImg={ bannerImg }/>
                <div className="dropdownsContainer">
                    { aboutText.map((aboutQuestion) => {
                        return(
                        <Dropdown title={aboutQuestion.title} details={ aboutQuestion.details} key={ aboutQuestion.id }/>
                        )
                    }) }
                </div>
            </main>
        )
    }
}

export default About