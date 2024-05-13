import './Header.css'
import logo from '../assets/cinema.png'

export const Header = () => {
    return (
        <nav className="header">
            <div className="header-group">
                <img
                    className="header-logo"
                    src={logo}
                />
                <div className="header-profile">
                    <p>Profile</p>
                </div>
            </div>
      </nav>
    )
}