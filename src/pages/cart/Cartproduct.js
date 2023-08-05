import React from 'react'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'
import styles from "./Cart.module.scss"

const Cartproduct = () => {
    return (
        <div className={styles.cartproduct}><h2>Welcome to cart</h2>
            <hr />
            <CartProvider>
                <Cart />
            </CartProvider>
        </div>
    )
}

export default Cartproduct