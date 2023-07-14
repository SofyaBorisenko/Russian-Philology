import React from "react";
import { Box, Flex, Divider, SimpleGrid } from "@chakra-ui/react";
import logo3 from '../images/logo3.png';

const Footer = () => {
  return (
    <Box backgroundColor="#f0f6f1">
      <footer>
        <Divider
          orientation='horizontal'
          style={{ width: '100%', height: '1.5px', background: '#FE205A', marginTop: '15px' }}
        />
        <Flex
          margin="0 auto"
          px={12}
          color="#121d47"
          justifyContent="center"
          alignItems="center"
          maxWidth="70%"
          height={16}
        >
          <img src={logo3} alt="Логотип ПИ РАО" style={{ width: '70px', height: '65px', marginTop: '1.5rem' }} />
          <SimpleGrid
            columns={3}
            margin="0 auto"
            px={12}
            color="#121d47"
            justifyContent="center"
            alignItems="start"
            alignContent="center"
            maxWidth="70%"
            height={16}
            gap={3}
          >
            <Box>
              <SimpleGrid columns={1} gap={2} textAlign="left">
                <Box>125009, г. Москва, </Box>
                <Box>ул. Моховая, д. 9, стр. 4</Box>
              </SimpleGrid>
            </Box>
            <Box>
              <SimpleGrid columns={1} gap={2} textAlign="center">
                <Box>+7 (495) 695-88-76</Box>
                <Box>+7 (495) 695-81-28</Box>
              </SimpleGrid>
            </Box>
            <Box>
              <SimpleGrid columns={1} gap={2} textAlign="right" style={{ marginRight: '4.4rem' }}>
                <Box>director@pirao.ru</Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Flex>
        <Flex
          margin="0 auto"
          px={12}
          color="#121d47"
          justifyContent="center"
          alignItems="center"
          maxWidth="70%"
          height={16}
        >
          <p>© Русская Филология, 2023. Все права защищены. 
            При использовании любых материалов сайта,<br />включая графику и тексты, 
            активная ссылка на сайт обязательна.</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;