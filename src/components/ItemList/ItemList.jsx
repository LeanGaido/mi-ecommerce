import Item from "../Item/Item";

function ItemList({grettings, setCantCarrito}) {

    return (
        grettings.map(item => {
            return (
                <Item item= {item} 
                      setCantCarrito= {setCantCarrito} />
            );
        })
    );
}

export default ItemList;