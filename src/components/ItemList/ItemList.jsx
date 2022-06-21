import Item from "../Item/Item";

function ItemList({ grettings }) {

    return (
        grettings.map(item => {
            return (
                <Item key={ item.Key }
                      item= { item }/>
            );
        })
    );
}

export default ItemList;