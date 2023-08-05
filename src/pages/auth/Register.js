import React, { useState } from 'react'
import styles from "./auth.module.scss"
import registerImg from "../../assets/register.png"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'
import { toast } from 'react-toastify'




const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPSassword] = useState("")
    const [isLoding, setIsLoding] = useState(false)

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault()
        if (password !== cpassword) {
            toast.error("Password do not match.")
        }
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setIsLoding(false)
                toast.success("Registration Successful..")
                navigate("/login")

            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoding(false)
            });

    }


    return (

        <>

            {isLoding && <Loader />}
            <section className={`container ${styles.auth}`}>

                <Card>
                    <div className={styles.form}>
                        <h2>Register</h2>

                        <form onSubmit={registerUser}>
                            <input type='text' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type='password' placeholder='Confirm Password' required value={cpassword} onChange={(e) => setCPSassword(e.target.value)} />

                            <button type="submit" className="--btn --btn-primary --btn-block">Register</button>
                        </form>

                        <span className={styles.register}>
                            <p>Already an Account ?</p>
                            <Link to='/login'>👉 Login</Link>
                        </span>
                    </div>
                </Card>
                <div className={styles.img}>
                    <img src={registerImg} alt='Register' width="400" />
                </div>
            </section >
        </>

    )
}

export default Register