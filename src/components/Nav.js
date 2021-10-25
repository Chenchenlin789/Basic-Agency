import { Link } from 'react-router-dom';
// import "./Nav.css";

const Nav = () => {
    return (
        <nav className="container">
            <h3>  <Link to="/home">BASIC®</Link></h3>
            <ul>
                <li>
                    <Link to="/work">WORK</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/news">NEWS</Link>
                </li>
                <li>
                    <Link to="/thinking">THINKING</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
            <h2>
                <Link to="/three">...</Link>
            </h2>

        </nav>
    )
}

export default Nav;