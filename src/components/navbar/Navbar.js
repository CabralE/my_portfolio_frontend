import { Link } from "react-router-dom";
import "./Navbar.css"
<link href="https://fonts.googleapis.com/css2?family=Chicle&family=Josefin+Sans:ital,wght@1,300&family=Lato:wght@100&display=swap" rel="stylesheet"></link>
function Navbar(props) {

    return (
        <nav className="navbar">
            <div className="logo">
                <h1 id="myInitials">
                    EC
                </h1>
            </div>
            <ul className="nav-links">
                <Link to="/about" className="nav-links-li">
                    <li >About</li>
                </Link>
                <Link to="/projects" className="nav-links-li">
                    <li>Projects</li>
                </Link>
                <Link to="/" className="nav-links-li">
                    <li>Contact</li>
                </Link>
                
            </ul>
        </nav>
    );
}

export default Navbar;