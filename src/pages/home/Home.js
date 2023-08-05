import React from 'react'
import styles from "./Home.module.scss"
import Slider from '../../components/slider/Slider'
import ShowOnLongin, { Privatelink, ShowOnLogout } from '../../components/hiddenLinks/HiddenLink'
import Slider1 from '../../components/slider/Slider1'
import Homeproduct from '../../components/product/Homeproduct'
import { CartProvider } from 'react-use-cart'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <>

            <CartProvider>
                <ShowOnLogout>
                    <Slider1 />
                    <hr className={styles.hr} />
                </ShowOnLogout>
                <Privatelink>
                    <ShowOnLongin>
                        <Slider />
                        <hr />
                        <Homeproduct />
                    </ShowOnLongin>
                </Privatelink>
            </CartProvider>
        </>
    )
}

export default Home
