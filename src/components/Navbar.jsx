import {Link, useLocation} from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <h2> Web II </h2>
                </Link>
            </div>
            <ul className="navbar-nav">
                <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className={`nav-item ${location.pathname === "/users" ? "active" : ""}`}>
                    <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className={`nav-item ${location.pathname === "/users/create" ? "active" : ""}`}>
                    <Link to="/users/create" className="nav-link">Create User</Link>
                </li>

            </ul>
        </nav>
    );
}
export default Navbar;