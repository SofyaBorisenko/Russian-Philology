import React from "react";
import './Footer.css';
import { Divider } from "@chakra-ui/react";
import logo3 from '../images/logo3.png';

const Footer = () => {
  return (
        <footer>
          <Divider
            orientation='horizontal'
            style={{ width: '100%', height: '1.5px', background: '#FE205A', marginTop: '15px' }}
          />
          {/* Mobile Version */}
          <div className="mob-footer-top">
            <img src={logo3} alt="Логотип ПИ РАО" className="mob-logo3" />
            <div className="mob-footer-right">
              <p>125009, г. Москва,<br />
              ул. Моховая, д. 9, стр. 4</p>
              <p>+7 (495) 695-88-76<br />
              +7 (495) 695-81-28</p>
              <p>director@pirao.ru</p>
            </div>
          </div>
          <div className="mob-footer-bottom">
            <p>© Русская Филология, 2023. Все права защищены.<br />
              При использовании любых материалов сайта,включая графику и тексты,
              активная ссылка на сайт обязательна.</p>
          </div>
          {/* Full-Screen Version */}
          <div className="full-screen-footer-top">
            <img src={logo3} alt="Логотип ПИ РАО" className="logo3" />
            <div className="footer-container">
              <div className="footer-grid">
                <div className="footer-grid-columns">
                  <p>125009, г. Москва,</p>
                  <p>ул. Моховая, д. 9, стр. 4</p>
                </div>
                <div className="footer-grid-columns">
                  <p>+7 (495) 695-88-76</p>
                  <p>+7 (495) 695-81-28</p>
                </div>
                <div className="footer-grid-columns">
                  <p>director@pirao.ru</p>
                </div>
              </div>
            </div>
          </div>
          <div className="full-screen-footer-bottom">
            <p>© Русская Филология, 2023. Все права защищены.
              При использовании любых материалов сайта,<br />включая графику и тексты,  
              активная ссылка на сайт обязательна.</p>
          </div>
        </footer>
  );
};
export default Footer;