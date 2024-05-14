import './Header.css'
import logo from '../assets/cinema.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="header">
            <div className="header-group">
                <Link to="/">
                    <img
                        className="header-logo"
                        src={logo}
                    />
                </Link>
                <div className="header-profile">
                    <p>Profile</p>
                </div>
            </div>
      </nav>
    )
}