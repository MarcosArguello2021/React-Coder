import './ItemListContainer.scss'
export const ItemListContainer = ({ nombre }) => {

    return (
        <div className="containerList">
            <section >
                <h2>Nuestros catálogo de productos</h2>
                <hr />
                <p className="greeting">Bienvenido {nombre}</p>
            </section>
        </div>

    )
}