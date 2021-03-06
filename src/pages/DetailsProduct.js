import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InputNumber from '../components/InputNumber';
import './styles/Details.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from '../components/Modal';
import { AppContext } from '../context/AppContext';
import ModalAddProduct from '../components/ModalAddProduct';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none',
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function DetailsProduct(props) {
  const classes = useStyles();
  const [talla, setTalla] = React.useState();

  const handleChange = (event) => {
    setTalla(event.target.value);
  };
  const [color, setColor] = React.useState();

  const handleChange2 = (event) => {
    setColor(event.target.value);
  };

  let { cart, setCart } = useContext(AppContext);
  const [cantidad, setCantidad] = useState(1);

  let [detalle, setDetalle] = useState({
    idcolor: [],
    idtallaproducto: [],
    idcategoria: [],
  });
  let [imagenes, setImagenes] = useState([]);
  let [thumbs, setThumbs] = useState([]);
  let [fotoActual, setFotoActual] = useState('');

  let ruta = 'https://apirestshoop.herokuapp.com/servicios/productos/';
  const val_id = props.match.params.id;
  useEffect(() => {
    axios.get(ruta + val_id + '/').then((res) => {
      let datos = res.data;

      setDetalle(datos);
      let tmp = [];
      let flag = true;
      datos.idcolor.forEach((item) => {
        let objeto = {
          color: item.valuecolor,
          imagenes: [],
        };
        let tmp_thumbs = [];
        if (item.valuecolor) {
          objeto.imagenes.push(item.imagencolor1);
          tmp_thumbs.push(item.imagencolor1);
          if (flag) {
            setFotoActual(item.imagencolor1);
          }
        }
        if (item.imagencolor2) {
          objeto.imagenes.push(item.imagencolor2);
          tmp_thumbs.push(item.imagencolor2);
        }
        if (item.imagencolor3) {
          objeto.imagenes.push(item.imagencolor3);
          tmp_thumbs.push(item.imagencolor3);
        }
        if (item.imagencolor4) {
          objeto.imagenes.push(item.imagencolor4);
          tmp_thumbs.push(item.imagencolor4);
        }
        if (item.imagencolor5) {
          objeto.imagenes.push(item.imagencolor5);
          tmp_thumbs.push(item.imagencolor5);
        }
        tmp.push(objeto);
        if (flag) {
          setThumbs(tmp_thumbs);
          flag = false;
        }
      });
      setImagenes(tmp);
    });
  }, [ruta, val_id]);

  function cambiarFoto(ruta) {
    setFotoActual(ruta);
  }

  function obtenerThumbs(color) {
    imagenes.forEach((item) => {
      if (item.color === color) {
        setThumbs(item.imagenes);
        setFotoActual(item.imagenes[0]);
      }
    });
  }

  let thumbnails = document.getElementsByClassName('thumbnail');

  let activeImages = document.getElementsByClassName('active');

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
      console.log(activeImages);

      if (activeImages.length > 0) {
        activeImages[0].classList.remove('active');
      }

      this.classList.add('active');
      document.getElementById('featured').src = this.src;
    });
  }
  function updateCantidad(e) {
    setCantidad(e.target.value);
  }

  function agregarProducto() {
    OpenModal();
    let idprod = props.match.params.id;
    let nProducto = {
      id: idprod,
      nombre: detalle.nombre,
      img: fotoActual,
      colores: color,
      tallas: talla,
      precio: detalle.precionormal,
      cantidad: parseInt(cantidad),
    };
    let nCart = cart;
    let encontrado = false;
    for (let item of nCart) {
      // Recorro los items del carrito
      if (item.id === idprod) {
        // Si encuentro el producto en el carrito
        item.cantidad += nProducto.cantidad; //sumo la cantidad que compro a la existente
        encontrado = true;
        break;
      }
    }
    if (!encontrado)
      //si no se encontró el producto en el carrito
      nCart = cart.concat(nProducto); //Agrego un nuevo producto
    localStorage.setItem('cart', JSON.stringify(nCart));
    setCart(nCart);
  }

  const [showModal, setShowModal] = useState(false);

  const OpenModal = () => {
    setShowModal(true);
  };
  const CloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="HomeLayout">
      <div className={classes.root}>
        <div className="col-lg-12 rutes">
          <Link to="/">Home</Link> / <Link to="">Categoría</Link> /
          {detalle.idcategoria.nombrecategoria}
        </div>
        <div>
          <Grid container>
            <Grid item xs={7}>
              <Paper className={classes.paper}>
                <div className="" id="content-wrapper">
                  <div id="slide-wrapper">
                    <div id="slider">
                      {thumbs.map((item, i) => {
                        return (
                          <img
                            className="thumbnail active"
                            key={i}
                            onClick={cambiarFoto.bind(this, item)}
                            src={item}
                            height="80"
                            alt="imagen"
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="img-fluid"
                      id="featured"
                      src={fotoActual}
                      alt=""
                    />
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={5}>
              <div className="modal-detail">
                <p className="title_product">{detalle.nombre}</p>
                <div className="">
                  <Modal />
                </div>
              </div>
              <p className="description_product">{detalle.descripcion}</p>
              <div className="title_price">
                <div className="price_internet">
                  <div>Normal</div>
                  <div>S/. {detalle.precionormal}</div>
                </div>
                <div className="price_internet">
                  <div>Internet</div>
                  <div>S/ {detalle.preciointernet}</div>
                </div>
                <div className="puntos__internet">
                  <div>Acumulas</div>
                  <div>{detalle.preciointernet} PetPuntos</div>
                </div>
              </div>
              <div className="colors__product">
                <div className="content_color-talla">
                  <div className="color-talla-defa">
                    <p className="colors__product-title">COLORES</p>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={color}
                        onChange={handleChange2}
                      >
                        {detalle.idcolor.map((item, i) => (
                          <MenuItem
                            key={item.id}
                            value={item.valuecolor}
                            onClick={obtenerThumbs.bind(this, item.valuecolor)}
                          >
                            {item.valuecolor}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="color-talla-defa">
                    <p className="colors__product-title">TALLAS</p>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Talla
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={talla}
                        onChange={handleChange}
                        defaultValue={talla}
                      >
                        {detalle.idtallaproducto.map((talla) => (
                          <MenuItem key={talla.id} value={talla.nomtalla}>
                            {talla.nomtalla}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="btn_compra_quanty">
                <InputNumber
                  className="cantidad"
                  onChange={updateCantidad.bind(this)}
                  min="1"
                />
                <div className="btn-add">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={agregarProducto.bind(this)}
                  >
                    agregar a bolsa
                  </Button>
                  <ModalAddProduct
                    CloseModal={CloseModal}
                    showModal={showModal}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default DetailsProduct;
