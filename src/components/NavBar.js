import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Business', path: '/business' },
        { name: 'Entertainment', path: '/entertainment' },
        { name: 'General', path: '/general' },
        { name: 'Health', path: '/health' },
        { name: 'Science', path: '/science' },
        { name: 'Sports', path: '/sports' },
        { name: 'Technology', path: '/technology' }
    ];

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsKeeda</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navItems.map((item, index) => (

                                <Link key={index} className="nav-link" aria-current="page" to={item.path}>{item.name}</Link>

                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;
