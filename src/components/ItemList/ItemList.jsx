import Item from "../Item/Item";

function ItemList({ grettings }) {

    return (
        grettings.map(item => {
            return (
                <Item Id={ item.Id }
                      item= { item }/>
            );
        })
    );
}

export default ItemList;