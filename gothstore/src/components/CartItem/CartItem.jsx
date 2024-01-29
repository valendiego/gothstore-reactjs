import styles from './CartItem.module.css'
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationService";
import Swal from "sweetalert2";

const CartItem = ({ img, name, price, quantity, id }) => {
    const { removeItem, total } = useCart()
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
                <img className={styles.img} src={img} alt={name} />
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.price}>
                    <strong>Precio unitario: </strong>${price}
                </p>
                <p className={styles.quantity}>
                    <strong>Cantidad de Unidades: </strong>
                    {quantity}
                </p>
                <p className={styles.subtotal}>
                    <strong>Subtotal: </strong>${price * quantity}
                </p>
                <button onClick={handleDeleteConfirmation} className="bi-trash3" style={{border:'1px solid black',backgroundColor:'transparent', color:'black', padding:'5px', borderRadius:'5px', fontSize:'1.2rem'}}></button>
            </section>
        </div>
    )
}

export default CartItem