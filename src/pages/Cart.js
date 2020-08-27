import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

function Cart() {
  let { cart, setCart, usuario } = useContext(AppContext);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    calcularTotal();
  }, [cart]);
  function calcularTotal() {
    let suma = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    setTotal(suma.toFixed(2));
  }
  function quitarProducto(idprod) {
    if (window.confirm("¿Está seguro de quitar este producto del carrito?")) {
      // idprod= 10 <= el id que quiero quitar de la lista
      // carrito [3,6,9,10,45,23]
      // nCarrito [3,6,9,45,23]
      let nCart = cart.filter((item) => item.id !== idprod);
      setCart(nCart);
      localStorage.setItem("cart", JSON.stringify(nCart));
    }
  }
  function addZero(d) {
    if (d < 10) {
      d = "0" + d;
    }
    return d;
  }

  return (
    <div id="carrito" className="contenedor">
      <h1>Carrito</h1>
      <table className="tabla_carrito">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Cantidad</td>
            <td>Precio</td>
            <td>Subtotal</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>S/ {item.precio}</td>
                <td>S/ {(item.cantidad * item.precio).toFixed(2)}</td>
                <td>
                  <button onClick={quitarProducto.bind(this, item.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" align="right">
              Total
            </td>
            <td>S/ {total}</td>
          </tr>
        </tfoot>
      </table>
      <p align="right">
        <button className="btnComprar">Comprar</button>
      </p>
    </div>
  );
}
export default Cart;
