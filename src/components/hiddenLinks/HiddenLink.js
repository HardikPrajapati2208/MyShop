// import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'
import { Navigate } from 'react-router-dom';


const ShowOnLongin = ({ children }) => {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    if (isLoggedIn) {
        return children
    }
    else {
        return null
    }
};

export const ShowOnLogout = ({ children }) => {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    if (!isLoggedIn) {
        return children;
    }
    else {
        return null
    }
};

export const Privatelink = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if (isLoggedIn) {
        return children
    }
    else {
        return <Navigate to={"/login"} />;
    }
}


export default ShowOnLongin;
