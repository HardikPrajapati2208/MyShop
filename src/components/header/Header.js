import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLongin, { Privatelink, ShowOnLogout } from '../hiddenLinks/HiddenLink';
import { CartProvider } from 'react-use-cart';


const activLink = ({ isActive }) => (isActive ? `${styles.active}` : ``)

const logo = (
    <div className={styles.logo}>
        <Link to="/">
            <h2>
                My<span>Shope</span>.
            </h2>
        </Link>
    </div>
)

const cart = (
    <span className={styles.cart}>
        <NavLink to="/cart" className={activLink}>
            Cart
            <FaShoppingCart size={20} />
            {/* <p>0</p> */}
        </NavLink>
    </span>
)



const Header = () => {

    const [showMenu, setShowmenu] = useState(false)
    const [displayName, setdisplayName] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Monitor currently sign in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                if (user.displayName == null) {
                    const u1 = user.email.substring(0, user.email.indexOf("@"));
                    const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
                    setdisplayName(uName)
                } else {

                    setdisplayName(user.displayName)
                }

                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    userName: user.displayName ? user.displayName : displayName,
                    userID: user.uid,

                }))

            }
            else {
                setdisplayName("");
                dispatch(REMOVE_ACTIVE_USER());
            }
        });

    }, [dispatch, displayName])
    const toggleMenu = () => {
        setShowmenu(!showMenu)
    };

    const hideMenu = () => {
        setShowmenu(false)
    }

    const logoutUser = () => {
        signOut(auth).then(() => {
            toast.success("Logout successfully..")
            navigate("/")
        }).catch((error) => {
            toast.error(error.message)
        });
    }



    return (
        <header>
            <div className={styles.header}>
                {logo}
                <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
                    <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`}></div>

                    <ul onClick={hideMenu}>
                        {/* <li>Admin</li> */}
                        <li className={styles["logo-mobile"]}>
                            {logo}
                            <FaTimes size={22} color="#fff" onClick={hideMenu} />
                        </li>
                        <li>
                            <NavLink to="/" className={activLink}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={activLink}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className={styles["header-right"]} onClick={hideMenu}>
                        <span className={styles.links}>
                            <ShowOnLogout>
                                <NavLink to="/login" className={activLink}>Login</NavLink>
                            </ShowOnLogout>
                            <Privatelink>
                                <ShowOnLongin>
                                    <a href='#link' style={{ color: "#ff7722" }}>
                                        <FaUserCircle size={16} />
                                        Hi, {displayName}
                                    </a>
                                    <NavLink to="/order-history" className={activLink}>My Order</NavLink>
                                    <NavLink to="/" onClick={logoutUser}>Logout </NavLink>
                                </ShowOnLongin>
                            </Privatelink>
                        </span>
                        <CartProvider>
                            {cart}
                        </CartProvider>

                    </div>

                </nav>

                <div className={styles["menu-icon"]}>
                    {cart}
                    <HiOutlineMenuAlt3 size={20} onClick={toggleMenu} />
                </div>
            </div>
        </header>
    );
};

export default Header