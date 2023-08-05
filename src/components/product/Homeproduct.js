import React from 'react'
import Itemcard from './Itemcard'
import data from './Product1'
import styles from "./Product.module.scss"

const Homeproduct = () => {
    return (
        <>
            <h1>All Products</h1>
            <section>
                <div className={styles.product}>
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                title={item.title}
                                shortDesc={item.shortDesc}
                                price={item.price}
                                item={item}
                                key={index} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Homeproduct