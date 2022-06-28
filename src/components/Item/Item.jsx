import './Item.css';
import { Link } from "react-router-dom";

function Item({item}) {

    return (
        <div key={item.Id}
             className="Item">
            <h2>{item.Desc}</h2>
            <img key={item.Img}
                 src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                 className='img-thumbnail'
                 alt='...'
                 style={{ maxWidth: '24rem' }} />
                 <Link to={`/Producto/${item.Id}`}>
                    Ver Detalle
                 </Link>
            <small>El Stock Disponible es: {item.Stock}</small>
        </div>
    );
}

export default Item;