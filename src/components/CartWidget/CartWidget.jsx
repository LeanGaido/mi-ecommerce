import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartWidget({cartItems}) {
    return (
        <Button as={ Link } 
                to={`Cart`}
                variant="outline-success">
            <FaShoppingCart></FaShoppingCart> {cartItems}
        </Button>
    )
}

export default CartWidget;