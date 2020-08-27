import React from "react";
import ReactDOM from "react-dom";

import "../components/styles/ModalCart.css";

function ModalCart(props) {
  if (!props.showModal) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal ">
      <div className="Modal__container">
        <button onClick={props.CloseModal} className="Modal__close-button">
          X
        </button>
        leons
      </div>
    </div>,
    document.getElementById("modalcart")
  );
}

export default ModalCart;
