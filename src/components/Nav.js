import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
    return (
        <nav className="container">
            <h3>  <Link className="link" to="/">BASIC®</Link></h3>
            <ul>
                <li>
                    <Link className="link" to="/work">WORK</Link>
                </li>
                <li>
                    <Link className="link" to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link className="link" to="/news">NEWS</Link>
                </li>
                <li>
                    <Link className="link" to="/thinking">THINKING</Link>
                </li>
                <li>
                    <Link className="link" to="/contact">CONTACT</Link>
                </li>
            </ul>
            <h2>
                <Link className="link" to="/three">...</Link>
            </h2>

        </nav>
    )
}

export default Nav;