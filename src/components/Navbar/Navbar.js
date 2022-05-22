import { CartWidget } from '../CartWidget/CartWidget';
import './Navbar.scss';

export const Navbar = () => {

    return <header>
        <nav className="navbar navbar-expand-lg navbar-dark bgColors">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">e-Commerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catálogo</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Produtos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Lista1</a></li>
                                <li><a className="dropdown-item" href="#">Lista2</a></li>
                                <li><a className="dropdown-item" href="#">Lista3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contáctenos</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <CartWidget/>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>

    </header>
}
