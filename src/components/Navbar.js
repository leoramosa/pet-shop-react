import React, { useEffect, useState, useContext } from 'react';

import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import LogoPet from '../images/logo.png';
import Badge from '@material-ui/core/Badge';
import ModalCart from './ModalCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  badges: {
    '& .MuiBadge-badge': {
      background: '#17d2c9',
      color: 'black',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  let { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    if (localStorage.cart) {
      let nCart = localStorage.getItem('cart');
      setCart(JSON.parse(nCart));
    }
  }, [setCart]);

  const [clicked, setClicked] = useState(false);

  /*
  usando clasess funcionaria asi
   const handleClick = () => {
    setClicked({ clicked });
  }; */

  const [showModalCart, setShowModalCart] = useState(false);

  const OpenModalCart = () => {
    setShowModalCart(true);
  };
  const CloseModalCart = () => {
    setShowModalCart(false);
  };

  return (
    <div className="container-nav">
      <div className="content-nav">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <Link to={'/'}>
          
            <img src={LogoPet} alt="" />
            </Link>
          </h1>

           
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
