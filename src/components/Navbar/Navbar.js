import { React } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <Link className="navbar-brand" to={"/book-store-app/"}>
                    <h3 className='display-6 fw-bolder'>
                        <i className="display-5 fa-solid fa-book-open-reader me-2 text-warning"></i>
                        BookStore
                    </h3>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar