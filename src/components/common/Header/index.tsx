import { Component } from "react";
import { Link } from "react-router-dom"
import Logo from '../../../assets/img/logo.svg'

class Header extends Component { 
    render() {
        return (
            <header className="myHeader main-wrapper">
                <img className="appLogo" src={ Logo } alt="Kasa Logo" />
                <nav>  
                    <Link className="navLinks" to="/">Accueil</Link>
                    <Link className="navLinks" to="/about">A propos</Link>
                </nav>
            </header>
        )
    }
}

export default Header