import { Component } from 'react'
import styled from 'styled-components'

import bannerImg  from '../../assets/img/img-about.png'
import { aboutText } from '../../assets/aboutText/data'

import Banner from '../../components/common/Banner'
import Dropdown from '../../components/common/Dropdown'

const DropdownsContainer = styled.div`
    min-height: 40vh;
    width: clamp(500px, 80%, 950px);
    margin: auto;
    margin-top: 5vh;
`

class About extends Component {

    render() {
        return (
            <main className="main-wrapper">
                <Banner bannerImg={ bannerImg }/>
                <DropdownsContainer>
                    { aboutText.map((aboutQuestion) => {
                        return(
                        <Dropdown title={aboutQuestion.title} details={ aboutQuestion.details} key={ aboutQuestion.id }/>
                        )
                    }) }
                </DropdownsContainer>
            </main>
        )
    }
}

export default About