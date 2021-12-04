import { Link } from "react-router-dom";
import "./Footer.css"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

function Footerbar(props) {

    return(
    <div id="page-container">
            <div id="content-wrap">
            </div>
        <footer id="footer" className="footer-outter">
            <div className="footer-leftside">
                    <span id="copyright">&copy;</span>
                <h1>
                Edward Cabral
                </h1>
            </div>
            <div className="footer-rightside">
                <ul id="footer-icons">
                        <li className="icon-1"><a href="https://github.com/"><BsGithub /></a></li>
                    <li>
                            <a href="https://www.linkedin.com/in/edward-cabral/"><BsLinkedin /></a>
                        </li>

                </ul>
            </div>
        </footer>
    </div>
    )

}

export default Footerbar;