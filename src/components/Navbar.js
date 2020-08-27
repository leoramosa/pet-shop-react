import React, { useEffect, useState, useContext } from "react";
import { Button } from "./Button";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LogoPet from "../images/logo.png";
import Badge from "@material-ui/core/Badge";

import ModalCart from "../components/ModalCart";

function Navbar() {
  let { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    if (localStorage.cart) {
      let nCart = localStorage.getItem("cart");
      setCart(JSON.parse(nCart));
    }
  }, []);

  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked({ clicked: !clicked });
  };

  const [showModal, setShowModal] = useState(false);

  const OpenModal = () => {
    setShowModal(true);
  };
  const CloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <img src={LogoPet} alt="" />
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-links">
            Products
          </Link>
        </li>
        <li>
          <Link className="nav-links">
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-links">
            Contact Us
          </Link>
        </li>
        <ModalCart CloseModal={CloseModal} showModal={showModal} />

        <button type="button" onClick={OpenModal}>
          open
        </button>
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
}

export default Navbar;
