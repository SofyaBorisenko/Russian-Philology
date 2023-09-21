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
        <Stack
        align='center'
        direction='row'
        flexWrap='wrap'
        paddingTop={{ base: 2, md: 3 }}
        paddingBottom={{ base: 2, md: 3 }}
        spacing={{ base: 1, md: 2, xl: 4 }}
        width={'100%'}
        >
          <Button
          backgroundColor={'#F0F6F1'}
          height={{ base: '7', md: '10' }}
          padding={{ base: '2', md: '3' }}
          variant='solid'
          _hover={{ bg: '#C4EAA5' }}
          >
            <a href="#bio" onClick={(e) => scrollToSection(bioRef, e)}>
              Биография
            </a>
          </Button>
          <Button
          backgroundColor={'#F0F6F1'}
          height={{ base: '7', md: '10' }}
          padding={{ base: '2', md: '3' }}
          variant='solid'
          _hover={{ bg: '#C4EAA5' }}
          >
            <a href="#interests" onClick={(e) => scrollToSection(interestsRef, e)}>
              Научные интересы
            </a>
          </Button>
          <Button
          backgroundColor={'#F0F6F1'}
          height={{ base: '7', md: '10' }}
          padding={{ base: '2', md: '3' }}
          variant='solid'
          _hover={{ bg: '#C4EAA5' }}
          >
            <a href="#publications" onClick={(e) => scrollToSection(publicationsRef, e)}>
              Публикации
            </a>
          </Button>
          <Button
          backgroundColor={'#F0F6F1'}
          height={{ base: '7', md: '10' }}
          padding={{ base: '2', md: '3' }}
          variant='solid'
          _hover={{ bg: '#C4EAA5' }}
          >
            <a href="#awards" onClick={(e) => scrollToSection(awardsRef, e)}>
              Награды и благодарности
            </a>
          </Button>
          <Button
          backgroundColor={'#F0F6F1'}
          height={{ base: '7', md: '10' }}
          padding={{ base: '2', md: '3' }}
          variant='solid'
          _hover={{ bg: '#C4EAA5' }}
          >
            <a href="#grants" onClick={(e) => scrollToSection(grantsRef, e)}>
              Участие в грантах
            </a>
          </Button>
        </Stack>
      </nav>
    );
  };

  export default Navigation;