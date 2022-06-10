import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import './Navbar.scss';

export const Navbar = () => {

    return <header>
        <nav className="navbar navbar-expand-lg navbar-dark bgColors">
            <div className="container-fluid">
                <Link to={"/"} className="nav navbar-brand">e-Commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" aria-current="page" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link" >Catálogo</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Produtos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to={"/categoria/ESPUMANTES"} className="dropdown-item">Espumantes</Link></li>
                                <li><Link to={"/categoria/BLANCOS"} className="dropdown-item" >Blancos</Link></li>
                                <li><Link to={"/categoria/BLEND"} className="dropdown-item" >Blend</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={"/nosotros"} className="nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contacto"} className="nav-link">Contáctenos</Link>
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
