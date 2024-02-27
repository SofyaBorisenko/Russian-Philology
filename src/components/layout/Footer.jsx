import { Divider, Image, VStack, Text } from '@chakra-ui/react';
import logo3 from './assets/logo3.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f6f1' }}>
      <Divider
        orientation='horizontal'
        width={['100%', null, '80vw', '64vw']}
        height='1.5px'
        background='#FE205A'
        mx={['none', null, '10vw', '18vw']}
        mt={['1rem', '1.5rem', null, '2rem']}
      />
      <VStack py={['0.5rem', '0.625rem', '0.75rem', '1rem', '2rem']}>
        <Image
          src={logo3}
          alt='Логотип ПИ РАО'
          maxW={['4rem', '5rem', '5.25rem', '5.5rem', '6rem']}
          h='auto'
          flexShrink='0'
        />
        <Text
          color='#121d47'
          align='center'
          pt={['0.5rem', null, '0.75rem', null, '1rem']}
          fontFamily='PT Serif'
          fontStyle='normal'
          fontWeight='700'
          fontSize={['0.625rem', null, '0.725rem', '0.8rem', '0.9rem']}
        >
          © Русская филология, 2023. Все права защищены.
          <br />
          При использовании любых материалов сайта, включая графику и тексты,{' '}
          <br />
          активная ссылка на rus-philology.ru обязательна.
        </Text>
      </VStack>
    </footer>
  );
};
export default Footer;
