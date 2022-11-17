import { useContext } from "react";
import CartContext from "../../store/cart-content.js";
import Modal from "../UI/Modal.js";
import style from "./Cart.module.css";
import CartItem from "./CartItem.js";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hasItems = cartCtx.items.length > 0;
  const cartItemRemovehandler = (id) => {};

  const cartItemAddhandler = (item) => {};

  const carItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null, item.id)}
          onAdd={cartItemAddhandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {carItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={style.actions}>
        <button className={style["button-alt"]} onClick={props.onClose}>
          Close
        </button>

        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
