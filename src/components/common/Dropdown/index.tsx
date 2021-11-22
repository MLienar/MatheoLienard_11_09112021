import { Component } from "react";

import DropdownArrow from "./DropdownArrow"

interface DropdownProps {
    title: string, 
    details?: string,
    list?: string[],
}

interface DropdownState {
    open: boolean,
}


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
                    {list.map((listitem, i) => {
                        return (<li className="DropdownListItem" key={i}>{listitem}</li>)
                    }) }
                    </ul>) :
        ( content = <p className="DropdownText">{ details }</p> ) 
        
        return (
            <div className="dropdownContainer">
                <div className="dropdownTitle" onClick={this.toggleDropdown}>
                    <h2 className="dropdownTitleText">{ title }</h2>
                    { this.state.open ? (<DropdownArrow className="open arrowImg"/>):(<DropdownArrow className="arrowImg"/>)}
                    
                </div>
                { this.state.open && (
                    <div className="dropdownContent">
                     { content }
                    </div>
                )}    
            </div>
        )
    }
}

export default Dropdown