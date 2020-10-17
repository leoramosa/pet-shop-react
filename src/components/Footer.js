import React from 'react';
import './styles/Footer.scss';

function Footer() {
  return (
    <div>
      <footer className="Footer">
        <div className="container-footer">
          <div className="column-footer">
            <div className="column-footer-content">
              <div className="box">
                <ul>
                  <li>
                  Desarrollado por 
                    <a className="linkweb" href="https://leoramos.netlify.app/" target="blank"> Leonardo Ramos</a>
                  </li>
                  <li>
                    <a className="webbleo" href="https://leoramos.netlify.app/" target="blank">leoramos.app</a>
                  </li>
                  <li className="redes">
                    <a href="https://www.instagram.com/leo.ramosa/" target="blank"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.facebook.com/leonardo.ramos.ar" target="blank"><i className="fab fa-instagram-square"></i></a>
                    <a href="https://www.linkedin.com/in/leonardoramos-a/" target="blank"><i className="fab fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
