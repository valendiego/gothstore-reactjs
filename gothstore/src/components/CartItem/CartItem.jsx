import styles from './CartItem.module.css'
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationService";
import Swal from "sweetalert2";

const CartItem = ({ img, name, price, quantity, id, category }) => {
    const { removeItem } = useCart()
    const { showNotification } = useNotification();

    const handleDeleteConfirmation = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Deseas eliminar ${name} del carrito?`,
            icon: 'warning',
            showCancelButton: true,
            buttonsStyling: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'button confirm',
                cancelButton: 'button cancel',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteItem();
            }
        });
    };

    const handleDeleteItem = () => {
        showNotification('success', 'Eliminado correctamente');
        removeItem(id);
    };

    return (
        <div className={styles.container__cartitem}>
            <section className={styles.cartitem}>
                <div className={styles.container__img}>
                    <img className={styles.img} src={img} alt={name} />
                </div>
                <div className={styles.container__item}>
                    <h5 className={styles.name}>{name}</h5>
                    <h5 className={styles.category}>Categoría: {category}</h5>
                    <div className={styles.container__pricequantity}>
                        <p className={styles.price}>
                            Precio unitario: ${price}
                        </p>
                        <p className={styles.quantity}>
                            Cantidad: {quantity}
                        </p>
                    </div>
                    <div className={styles.container__footeritem}>
                        <p className={styles.subtotal}>
                            <strong>Subtotal: ${price * quantity}</strong>
                        </p>
                        <button onClick={handleDeleteConfirmation} className="bi-trash3" style={{ border: '1px solid black', backgroundColor: 'black', color: 'white', padding: '0 6px', borderRadius: '5px', fontSize: '1.2rem', marginLeft: '20px', borderRadius: '20px' }}></button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default CartItem