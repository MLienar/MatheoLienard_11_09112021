import { Component } from "react"
import { Link } from 'react-router-dom'

class Error extends Component {
    render() {
        return (
            <div className="errorPage">
                <h1 className="bigError">404</h1>
                <p className="errorMessage">Oups ! La page que vous demandez n'existe pas.</p>
                <Link className="homeLink" to="/">Retour à la page d'accueil</Link>
            </div>

        )
    }
}

export default Error