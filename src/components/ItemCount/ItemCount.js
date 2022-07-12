import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { configBtns } from "./configBtns"
import './ItemCount.scss';


export const ItemCount = ({ max, min, setContador, contador, handleAgregar}) => {
    

    const incrementar = () => {
        contador < max && setContador(contador + 1);
    }

    const decrementar = () => {
        contador > 1 && setContador(contador - 1);
    }
    

    const { configRestar, configSumar } = configBtns(contador, max, min, decrementar, incrementar)

    return (
        max === 0 
        ?  
        <div className="p-3 mb-2 bg-danger text-white">NO HAY STOCK DE ESTE PRODUCTO</div> 
        :
        <section>
            <div className="contador container my-4 d-flex">
                <div>
                    <button {...configRestar}>
                        <BsDashLg />
                    </button>
                    <span className="mx-4 text-light">{contador}</span>
                    <button {...configSumar}>
                        <BsPlusLg />
                    </button>
                </div>
                <button type="button" onClick={handleAgregar} className="btn btn-outline-light">Agregar</button>
            </div>
        </section>
    )
};