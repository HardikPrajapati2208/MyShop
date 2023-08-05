// CartPage.js
import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import styles from "./Cart.module.scss"


const Cart = () => {
    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if (isEmpty) return <h1> Your cart is Empty Shop Now</h1>
    return (
        <section>
            <CartProvider>
                <div className={styles.cart}>
                    <div className={styles.center_table}>
                        <h3>Total Items: [{totalItems}]</h3>  {/* Cart ({totaUniquelItems})  */}
                        <table className={styles.table}>
                            <body className={styles.body}>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{ height: '8rem' }} />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td>Quntity ({item.quantity})</td>
                                            <td>
                                                <button className={styles.button}
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                >-</button>
                                                <button className={styles.button}
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                <button className={styles.button}
                                                    onClick={() => removeItem(item.id)}
                                                >Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </body>
                        </table>
                    </div>
                    <div>
                        <h2>Total Price: $ {cartTotal}</h2>
                    </div>
                    <div>
                        <button className={styles.button}
                            onClick={() => emptyCart()}>
                            clear cart
                        </button>
                        <button className={styles.button}>
                            Buy now
                        </button>
                    </div>
                </div>
            </CartProvider>
        </section>
    );
};

export default Cart;
