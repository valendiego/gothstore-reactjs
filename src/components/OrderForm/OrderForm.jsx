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
            return showNotification('error', 'Debe completar todos los campos')
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
            <section className={styles.container__orderform}>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <legend className={styles.titleform}>Completa todos los campos para generar la orden de compra</legend>

                    <div className={styles.container__fields}>
                        <div className={styles.field}>
                            <label className={styles.label}>Nombre:</label>
                            <input className={styles.input} type="text" placeholder="Nombre" value={name} onChange={handleNameChange} />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Teléfono:</label>
                            <input className={styles.input} type="tel" placeholder="Teléfono" value={phone} onChange={handlePhoneChange} />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>E-mail:</label>
                            <input className={styles.input} type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>

                    <input type="submit" value='GENERAR ORDEN' className={styles.submit} />

                </form>
            </section>
        </>
    )
}

export default OrderForm