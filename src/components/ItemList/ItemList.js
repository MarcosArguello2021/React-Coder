import Item from "../Item/Item"
import './ItemList.scss'

const ItemList = ({ items }) => {

    return (
        <div className="items">       
            <div className="itemList">
                {
                    items.map((item, index) => <Item key={index} item={item}/>)
                }
            </div>
        </div>
    )
}

export default ItemList