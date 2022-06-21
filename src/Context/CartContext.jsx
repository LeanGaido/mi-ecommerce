import { createContext, useState } from "react";

export const cartContext = createContext({});

function CartContext({ children }) {
    const [cantCarrito, setCantCarrito] = useState(0);

    return ( 
        <cartContext.Provider value={ {
            cantCarrito: cantCarrito, 
            setCantCarrito: setCantCarrito
        } }>
            {children}
        </cartContext.Provider>
    );
}

export default CartContext;