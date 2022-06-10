import { useState } from "react"
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { configBtns } from "./configBtns"
import './ItemCount.scss';


export const ItemCount = ({ max, min=1, setContador, contador, handleAgregar}) => {
    

    const incrementar = (e) => {
        contador < max && setContador(contador + 1);
    }

    const decrementar = () => {
        contador > 1 && setContador(contador - 1);
    }
    

    const { configRestar, configSumar } = configBtns(contador, max, min, decrementar, incrementar)

    return (
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