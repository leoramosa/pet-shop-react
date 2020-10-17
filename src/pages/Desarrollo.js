import React from 'react';
import appweb from '../images/construccion.png'
import './styles/desarrollo.css'
import Progress from './../components/progress'
function Desarrollo() {
  return (
      <div>
        <section className="appweb">
          <div className="contentapp">
            <p className="title-web">
              Ecommerce en construcción
            </p>
            <p className="subtitle">
              El sitio estará listo pronto
            </p>
            <div className="progress-app">
            <Progress/>
            </div>
            <div className="img-app">

            <img src={appweb} alt=""/>
            </div>
          </div>
        </section>
      </div>
  );
}



export default Desarrollo;