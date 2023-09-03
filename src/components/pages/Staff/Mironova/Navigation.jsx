import React from 'react';
import '../Staff.scss';
import { Stack, Button } from '@chakra-ui/react';

const Navigation = ({ bioRef, interestsRef, publicationsRef, awardsRef, grantsRef }) => {
  const scrollToSection = (ref, event) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <nav className='staff-nav'>
        <Stack direction='row' spacing={4} align='center' paddingTop={3}>
          <Button colorScheme='gray' variant='solid' _hover={{ bg: '#C4EAA5' }}>
          <a href="#bio" onClick={(e) => scrollToSection(bioRef, e)}>
            Биография
          </a>
          </Button>
          <Button colorScheme='gray' variant='solid' _hover={{ bg: '#C4EAA5' }}>
          <a href="#interests" onClick={(e) => scrollToSection(interestsRef, e)}>
            Научные интересы
          </a>
          </Button>
          <Button colorScheme='gray' variant='solid' _hover={{ bg: '#C4EAA5' }}>
          <a href="#publications" onClick={(e) => scrollToSection(publicationsRef, e)}>
            Публикации
          </a>
          </Button>
          <Button colorScheme='gray' variant='solid' _hover={{ bg: '#C4EAA5' }}>
          <a href="#awards" onClick={(e) => scrollToSection(awardsRef, e)}>
            Награды и благодарности
          </a>
          </Button>
          <Button colorScheme='gray' variant='solid' _hover={{ bg: '#C4EAA5' }}>
          <a href="#grants" onClick={(e) => scrollToSection(grantsRef, e)}>
            Участие в грантах
          </a>
          </Button>
        </Stack>
      </nav>
    );
  };

  export default Navigation;