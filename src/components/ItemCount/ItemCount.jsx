import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { cartContext } from "../../Context/CartContext"

function ItemCount({item, inicial}) {
    const [contador, setContador] = useState(inicial);
    const [stock, setStock] = useState(item.Stock);
    const { addItem } = useContext(cartContext);

    useEffect(() => {
        if(contador > stock) {
            setContador(stock);
            alert("El Stock Maximo es " + stock);
        } else if(contador < 1 && stock > 0){
            setContador(1);
            alert("No se puede comprar menos de 1");
        }
    }, [contador])

    const fc = () => {
        addItem({
                    Key: item.Key,
                    Desc: item.Desc, 
                    Img: item.Img, 
                    Stock: item.Stock, 
                    Precio: item.Precio, 
                    Categoria: item.Categoria, 
                    Quantity: contador 
                }, contador);
        setStock(stockActual => stockActual - contador);
    }

    return <>
        <div className="contador-Container">
            <Container>
                <div>
                    <Button variant="outline-warning" 
                            onClick={
                                () => setContador(contadorActual => contadorActual - 1)
                            }>
                        <FaMinus></FaMinus>
                    </Button>
                    <span> Productos a Agregar: {contador} </span>
                    <Button variant="outline-primary" 
                            onClick={
                                () => setContador(contadorActual => contadorActual + 1)
                            }>
                        <FaPlus></FaPlus>
                    </Button>
                </div>
                <div>
                {stock > 0 ?
                    <Button variant="outline-success" 
                            onClick={fc}>
                        Agregar al Carrito
                    </Button>
                    :
                    <Button variant="outline-info">
                        No hay mas Stock
                    </Button>
                }
                </div>
            </Container>
        </div>
    </>;
}

export default ItemCount;