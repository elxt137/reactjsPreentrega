import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-danger position-relative">
            <img src={"images/cart4.svg"} alt={"Carrito"} width={32} />
  Inbox
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
    )
}

export default CartWidget;