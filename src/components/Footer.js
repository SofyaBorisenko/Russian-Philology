import React from "react";
import { Box, Flex, Divider, SimpleGrid, extendTheme } from "@chakra-ui/react";
import logo3 from '../images/logo3.png';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })

const Footer = () => {
  return (
      <Box backgroundColor="#f0f6f1">
        <footer>
          <Divider
            orientation='horizontal'
            style={{ width: '100%', height: '1.5px', background: '#FE205A', marginTop: '15px' }}
          />
          <Flex className="footer-flex">
            <img src={logo3} alt="Логотип ПИ РАО" className="logo3" />
            <SimpleGrid className="footer-grid">
              <Box>
                <SimpleGrid className="footer-grid-columns">
                  <Box>125009, г. Москва, </Box>
                  <Box>ул. Моховая, д. 9, стр. 4</Box>
                </SimpleGrid>
              </Box>
              <Box>
                <SimpleGrid className="footer-grid-columns">
                  <Box>+7 (495) 695-88-76</Box>
                  <Box>+7 (495) 695-81-28</Box>
                </SimpleGrid>
              </Box>
              <Box>
                <SimpleGrid className="footer-grid-columns">
                  <Box>director@pirao.ru</Box>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Flex>
          <Flex className="footer-bottom">
            <p>© Русская Филология, 2023. Все права защищены. 
              При использовании любых материалов сайта,<br />включая графику и тексты, 
              активная ссылка на сайт обязательна.</p>
          </Flex>
        </footer>
      </Box>
  );
};
export default Footer;