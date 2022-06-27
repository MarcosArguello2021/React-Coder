import './Footer.scss';
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {

    return (

        <div className="footer p-4">
            <div className="footer-default">
                <div className="container">
                    <div className="widget-copyright">
                        Autor de este sitio: <a href="https://www.linkedin.com/in/marcos-antonio-arguello/" target="_blank">Marcos Argüello <BsLinkedin/></a> Todos Los Derechos Reservados</div>
                </div>
            </div>
        </div>
    )
}

export default Footer