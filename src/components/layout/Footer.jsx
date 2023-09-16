import React from "react";
import './Footer.scss';
import { Divider } from "@chakra-ui/react";
import logo3 from './assets/logo3.png';

const Footer = () => {
  return (
        <footer>
          <Divider
            orientation='horizontal'
            style={{ width: '100%', height: '1.5px', background: '#FE205A', marginTop: '15px' }}
          />
          <div className="footer-top">
            <img src={logo3} alt="Логотип ПИ РАО" className="logo3" />
            <div className="footer-right">
              <p>Адрес лаборатории:<br />
              125009, г. Москва,<br />
              ул. Моховая, д. 9,<br />
              стр. 4, к. 018</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Русская Филология, 2023. Все права защищены.<br />
              При использовании любых материалов сайта, включая графику и тексты, <br />
              активная ссылка на сайт обязательна.</p>
          </div>
        </footer>
  );
};
export default Footer;