import { useState } from "react";
import styles from './OrderForm.module.css'
import { useNotification } from "../../notification/NotificationService";

const OrderForm = ({ onCreate }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { showNotification } = useNotification()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSubmitted(true)

        if (!name || !phone || !email) {
            showNotification('error', 'Debe completar todos los campos')
            return
        }

        const userData = {
            name,
            phone,
            email,
        };

        onCreate(userData)
    }

    return (
        <>
            <section className={`container ${styles.contact}`}>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <legend>Completa todos los campos para generar la orden</legend>

                    <div className={styles.container}>
                        <div className={styles.field}>
                            <label>Nombre:</label>

                            <input type="text" placeholder="Nombre" value={name} onChange={handleNameChange} />
                        </div>

                        <div className={styles.field}>
                            <label>Teléfono:</label>
                            <input type="tel" placeholder="Teléfono" value={phone} onChange={handlePhoneChange} />
                        </div>

                        <div className={styles.field}>
                            <label>E-mail:</label>
                            <input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>

                    <input type="submit" value='GENERAR ORDEN' className={styles.submit} />

                </form>
            </section>
        </>
    )
}

export default OrderForm