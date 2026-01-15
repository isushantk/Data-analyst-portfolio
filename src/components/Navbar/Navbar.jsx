import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
                    Sushant Kumar
                </NavLink>

                <button
                    className="navbar-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/experience"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/education"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Education
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
