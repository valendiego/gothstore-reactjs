import styles from './Beneficios.module.css'

const Beneficios = () => {
    return(
        <section className={styles.benefits}>
            <div className={styles.benefit}>
                <div className={styles.titles__benefits}>
                    <i className='bi bi-bus-front-fill'></i>
                    <h2 className={styles.title__bf}>Envíos a todo el país</h2>
                </div>
                <p className={styles.p__bf}>Envíos económicos a todo el país y entregas sin cargo</p>
            </div>
            <div className={styles.benefit}>
                <div className={styles.titles__benefits}>
                    <i className="bi bi-credit-card-2-back-fill"></i>
                    <h2 className={styles.title__bf}>Todos los medios de pago</h2>
                </div>
                <p className={styles.p__bf}>Aceptamos tarjetas de débito y crédito, transferencia y efectivo</p>
            </div>
            <div className={styles.benefit}>
                <div className={styles.titles__benefits}>
                    <i className="bi bi-headset"></i>
                    <h2 className={styles.title__bf}>Respondemos tus dudas</h2>
                </div>
                <p className={styles.p__bf}>Contactate con nuestro servicio de atención al cliente</p>
            </div>
        </section>
    )
}

export default Beneficios