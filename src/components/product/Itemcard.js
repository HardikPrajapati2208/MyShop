import React from 'react'
import styles from "./Product.module.scss"
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';

const Itemcard = (props) => {
    const { addItem } = useCart();
    const handleAddToCart = () => {
        toast.success('Item added to cart!', {
        });
    };
    return (
        <div className={styles.product}>
            <div className={styles.details}>
                <div className={styles.data}>
                    <img src={props.img} />
                    <h2> {props.title}</h2>
                    <h3>${props.price}</h3>
                    <p>{props.shortDesc}</p>
                    <button className={styles.cart}
                        onClick={() => { addItem(props.item); handleAddToCart() }}
                    >Add to cart <FaShoppingCart /> </button>
                </div>
            </div>
        </div >
    )
}

export default Itemcard