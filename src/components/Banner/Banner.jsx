import styles from './Banner.module.css'
import of2 from './assets/outfit2.jpg'
import of3 from './assets/outfit3.jpg'
import of4 from './assets/outfit4.jpg'
import of5 from './assets/outfit5.jpg'
import of6 from './assets/outfit6.jpg'

const Banner = () => {

    return (
        <section>
            <div className={styles.container__imgs}>
                <div className={styles.imgs}>
                    <img className={styles.img} src={of2} alt="" />
                </div>
                <div className={styles.imgs}>
                    <img className={styles.img} src={of3} alt="" />
                </div>
                <div className={styles.imgs}>
                    <img className={styles.img} src={of4} alt="" />
                </div>
                <div className={styles.imgs}>
                    <img className={styles.img} src={of5} alt="" />
                </div>
                <div className={styles.imgs}>
                    <img className={styles.img} src={of6} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner