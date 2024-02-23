import './Staff.scss';
import { Stack, Button } from '@chakra-ui/react';

const Navigation = ({
  bioRef,
  interestsRef,
  publicationsRef,
  awardsRef,
  grantsRef,
}) => {
  const scrollToSection = (ref, event) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const sections = [
    { id: 'bio', label: 'Биография', ref: bioRef },
    { id: 'interests', label: 'Научные интересы', ref: interestsRef },
    { id: 'publications', label: 'Публикации', ref: publicationsRef },
    { id: 'awards', label: 'Награды и благодарности', ref: awardsRef },
    { id: 'grants', label: 'Участие в грантах', ref: grantsRef },
  ];

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
        {sections.map(({ id, label, ref }) => (
          <Button
            key={id}
            backgroundColor={'#e1e1e1'}
            height={{ base: '7', md: '10' }}
            padding={{ base: '2', md: '3' }}
            variant='solid'
            _hover={{ bg: '#C4EAA5' }}
          >
            <a href={`#${id}`} onClick={(e) => scrollToSection(ref, e)}>
              {label}
            </a>
          </Button>
        ))}
      </Stack>
    </nav>
  );
};

export default Navigation;
