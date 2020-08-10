import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <div>
      <footer className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="box">
                <h3>Productos</h3>
                <ul>
                  <li>
                    <a>Nuevos Productos</a>
                  </li>
                  <li>
                    <a>En oferta</a>
                  </li>
                  <li>
                    <a>Últimos productos</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="box">
                <h3>Acerca del Petshop</h3>
                <ul>
                  <li>
                    <a>Sobre nosotros</a>
                  </li>
                  <li>
                    <a>Nuestras tiendas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="box">
                <h3>Contacto</h3>
                <mat-form-field>
                  <input />
                </mat-form-field>
                <button>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
