import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.scss';

export const Navbar = () => {

    return <header>
        <nav className="navbar navbar-expand-lg navbar-dark bgColors">
            <div className="container-fluid">
                <Link to={"/"} className="nav navbar-brand">e-Commerce: Vineria</Link>
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
                                Variedades
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to={"/categoria/BLANCOS"} className="dropdown-item" >BLANCOS</Link></li>
                                <li><Link to={"/categoria/BLEND"} className="dropdown-item" >BLEND</Link></li>
                                <li><Link to={"/categoria/ESPUMANTES"} className="dropdown-item">ESPUMANTES</Link></li>
                                <li><Link to={"/categoria/ORGANICOS"} className="dropdown-item">ORGÁNICOS</Link></li>
                                <li><Link to={"/categoria/TINTOS"} className="dropdown-item">TINTOS</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="nav-item">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>

    </header>
}
