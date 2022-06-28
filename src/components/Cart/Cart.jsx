import React, { useContext, useEffect } from 'react';
import { cartContext } from "../../Context/CartContext"
import { FaShoppingCart, FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Cart() {
    const { itemsCarrito, cantCarrito, addOneItem, removeOneItem, removeFullItem } = useContext(cartContext);

    useEffect(() => {
        //addOneItem({title: 'Home'})
    }, [itemsCarrito])

    return (
        <div className="cart">
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                            {
                                cantCarrito > 0 ? 
                                <div className="table-responsive">
                                    <h2>Carrito de compras</h2>
                                    <br/>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div class="p-2 px-3 text-uppercase">Producto</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Precio</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Cantidad</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Eliminar</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                itemsCarrito.map(item => {
                                                    return (
                                                        <tr key={item.Key}>
                                                            <th scope="row" className="border-0">
                                                            <div className="p-2">
                                                                <img src="" alt="" width="70" className="img-fluid rounded shadow-sm" />
                                                                <div className="ms-3 d-inline-block align-middle">
                                                                    <h5 className="mb-0"> <Link  to={`#`} className="text-dark d-inline-block align-middle">{item.Desc}</Link></h5>
                                                                </div>
                                                            </div>
                                                            </th>
                                                            <td className="border-0 align-middle"><strong>${item.Precio}</strong></td>
                                                            <td className="border-0 align-middle">
                                                                <Button variant="outline-warning" 
                                                                        onClick={() => removeOneItem(item.Key)}>
                                                                    <FaMinus></FaMinus>
                                                                </Button>
                                                                <strong> {item.Quantity} </strong>
                                                                <Button variant="outline-success" 
                                                                        onClick={() => addOneItem(item.Key)}>
                                                                    <FaPlus></FaPlus>
                                                                </Button>
                                                            </td>
                                                            <td className="border-0 align-middle">
                                                                <Button variant="outline-danger" 
                                                                        onClick={() => removeFullItem(item.Key)}>
                                                                    <FaTrashAlt></FaTrashAlt>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div> :  
                                <div>
                                    <h2><FaShoppingCart></FaShoppingCart></h2>
                                    <h2>El Carrito de compras se encuentra vacio</h2>
                                    <br></br>
                                    <Button variant="outline-primary"
                                            as={Link}
                                            to={`/Home`}>
                                        Ver Productos
                                    </Button>
                                </div> 
                            }
                            
                        </div>
                    </div>
                    {/* <div class="row py-5 p-4 bg-white rounded shadow-sm">
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Coupon code</div>
                            <div class="p-4">
                                <p class="mb-4"><em>If you have a coupon code, please enter it in the box below</em></p>
                                <div class="input-group mb-4 border rounded-pill p-2">
                                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0" />
                                    <div class="input-group-append border-0">
                                        <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Instructions for seller</div>
                            <div class="p-4">
                                <p class="mb-4"><em>If you have some information for the seller you can leave them in the box below</em></p>
                                <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                            <div class="p-4">
                                <p class="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
                                <ul class="list-unstyled mb-4">
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                        <h5 class="fw-bold">$400.00</h5>
                                    </li>
                                </ul>
                                <a href="#" class="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}
export default Cart;