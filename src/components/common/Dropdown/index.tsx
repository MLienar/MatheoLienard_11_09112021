import { Component } from "react";
import styled, { keyframes }  from 'styled-components' 

import DropdownArrow from "./DropdownArrow"

interface DropdownProps {
    title: string, 
    details?: string,
    list?: [],
}

interface DropdownState {
    open: boolean,
}

const DropdownContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin-top: 3vh;
    @media screen and (max-width: 550px) {
        width: 100%;
    }
`
    
const DropdownTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    background: var(--orange);
    width: 100%;
    color: white;
    z-index: 2;
    cursor: pointer;
`

const DropdownTitleText = styled.h2`
    font-size: clamp(16px, 1rem + 0.6vw, 23px);
    font-weight: 500;
`

const DropdownAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px)
    } to {
        opacity: 1;
        transform: translateY(-5px);
    }
`

const DropdownContent = styled.div`
    background: #F6F6F6;
    padding: 25px 20px 20px;
    color: var(--orange);
    transform: translateY(-5px);
    animation: ${DropdownAnimation} 0.2s ease-in-out;
`



class Dropdown extends Component<DropdownProps, DropdownState> {
    state = {
        open: false,
    }

    toggleDropdown = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        })
    }

    render() {
        const title = this.props.title
        const details = this.props.details
        const list = this.props.list
        let content 

        list ? 
        ( content = <ul>
                    {list.map((listitem) => {
                        return (<li>listitem</li>)
                    }) }
                    </ul>) :
        ( content = <p>{ details }</p> ) 
        
        return (
            <DropdownContainer>
                <DropdownTitle onClick={this.toggleDropdown}>
                    <DropdownTitleText>{ title }</DropdownTitleText>
                    <DropdownArrow open={ this.state.open } />
                </DropdownTitle>
                { this.state.open && (
                    <DropdownContent>
                     { content }
                    </DropdownContent>
                )}    
            </DropdownContainer>
        )
    }
}

export default Dropdown