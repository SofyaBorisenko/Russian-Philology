import React from "react";
import './Footer.css';
import { Box, Flex, Divider, SimpleGrid, extendTheme } from "@chakra-ui/react";
import logo3 from '../images/logo3.png';

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}
const theme = extendTheme({ breakpoints })

const Footer = () => {
  return (
        <footer>
          <Divider
            orientation='horizontal'
            style={{ width: '100%', height: '1.5px', background: '#FE205A', marginTop: '15px' }}
          />
          {/* Mobile Version */}
          <Flex className="mobile-footer">
            <img src={logo3} alt="Логотип ПИ РАО" className="mob-logo3" />
            <Flex flexDirection={'column'} className="mob-footer-right">
              <p>125009, г. Москва,<br />
              ул. Моховая, д. 9, стр. 4</p>
              <p>+7 (495) 695-88-76<br />
              +7 (495) 695-81-28</p>
              <p>director@pirao.ru</p>
            </Flex>
          </Flex>
          <Flex className="mob-footer-bottom">
            <p className="mob-footer-bottom">© Русская Филология, 2023. Все права защищены.
              При использовании любых материалов сайта, включая графику и тексты,
              активная ссылка на сайт обязательна.</p>
          </Flex>
        </footer>
  );
};
export default Footer;