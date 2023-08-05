import React, { useState } from 'react';
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import 'firebase/firestore';
import { database } from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';


const Contact = () => {

    const [name, SetName] = useState();
    const [email, SetEmail] = useState();
    const [subject, SetSubject] = useState();
    const [message, SetMessage] = useState();
    const [isLoding, setIsLoding] = useState(false)

    const navigate = useNavigate()

    const userCollectionRef = collection(database, "contacinfo")

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoding(true)
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then(() => {
            setIsLoding(false)
            toast.success("Message Successful...")
            navigate("/")
        })
            .catch((error) => {
                setIsLoding(false)
                toast.error(error.message)
            });
    }


    return (
        <>
            {isLoding && <Loader />}

            <div className={`container ${styles.contact}`}>
                <div className={styles.section}>
                    <form >
                        <h2>Contact Us</h2>
                        <Card cardClass={styles.card}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                onChange={(e) => { SetName(e.target.value) }}
                            />
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your active email"
                                required
                                onChange={(e) => { SetEmail(e.target.value) }}
                            />
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                onChange={(e) => { SetSubject(e.target.value) }}
                            />
                            <label>Message</label>
                            <textarea name="message" cols="30" rows="10"
                                onChange={(e) => { SetMessage(e.target.value) }}
                            ></textarea>
                            <button onClick={handleSubmit} className="--btn --btn-primary">Send Message</button>
                        </Card>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;