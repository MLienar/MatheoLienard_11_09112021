import { Component } from "react";
import LogoWhite from '../../../assets/img/logo-white.svg'

class Footer extends Component {
    render() {
        return (
            <footer className="footerDiv">
                <img className="footerLogo" src={LogoWhite} alt="logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}

export default Footer