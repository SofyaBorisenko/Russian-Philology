import '../../../App.css';
import photo1 from '../assets/photo1.webp';
import photo2 from '../assets/photo2.webp';
import photo3 from '../assets/photo3.webp';
import photo4 from '../assets/photo4.webp';
import photo5 from '../assets/photo5.webp';
import photo6 from '../assets/photo6.webp';
import photo7 from '../assets/photo7.webp';
import { Button, Image, VStack, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  {
    img: photo1,
    description:
      'Слева направо: С.М. Бондаренко, Г.Г. Граник, М.С. Шехтер, Л.А. Концевая (2000)',
    imgAlt:
      'Слева направо: С.М. Бондаренко, Г.Г. Граник, М.С. Шехтер, Л.А. Концевая (2000)',
  },
  {
    img: photo2,
    description:
      'Группа психологических основ разработки школьного учебника: в первом ряду слева направо: Г.Н. Владимирская, Г.Г. Граник, Н.А. Борисенко, во втором ряду: С.В. Шишкова, О.В. Гвинджилия, К.В. Миронова (2014)',
    imgAlt:
      'Группа психологических основ разработки школьного учебника: в первом ряду слева направо: Г.Н. Владимирская, Г.Г. Граник, Н.А. Борисенко, во втором ряду: С.В. Шишкова, О.В. Гвинджилия, К.В. Миронова (2014)',
  },
  {
    img: photo3,
    description: 'Г.Г. Граник (2008)',
    imgAlt: 'Г.Г. Граник (2008)',
  },
  {
    img: photo4,
    description: 'Г.Г. Граник (2011)',
    imgAlt: 'Г.Г. Граник (2011)',
  },
  {
    img: photo5,
    description: 'Г.Г. Граник (2007)',
    imgAlt: 'Г.Г. Граник (2007)',
  },
  {
    img: photo6,
    description: 'Слева направо: Н.А. Борисенко, Г.Г. Граник (2010)',
    imgAlt: 'Слева направо: Н.А. Борисенко, Г.Г. Граник (2010)',
  },
  {
    img: photo7,
    description:
      'Слева направо: Г.Н. Владимирская, Н.А. Борисенко, Г.Г. Граник (2011)',
    imgAlt:
      'Слева направо: Г.Н. Владимирская, Н.А. Борисенко, Г.Г. Граник (2011)',
  },
];

const MyImageGallery = () => {
  const [index, setIndex] = useState(0);
  const { img, description, imgAlt } = images[index];
  const checkNumber = (number) => {
    if (number > images.length - 1) {
      return 0;
    }
    if (number < 0) {
      return images.length - 1;
    }
    return number;
  };
  const nextImage = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevImage = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const textStyle = {
    fontFamily: 'PT Serif',
    fontSize: ['0.7rem', '0.8rem', null, '0.9rem', '1rem'],
    fontStyle: 'italic',
    textAlign: 'center',
    maxW: '60%',
  };

  const buttonStyle = {
    height: ['1.5rem', '2rem', null, '2.5rem'],
    minWidth: ['1.5rem', '2rem', null, '2.5rem'],
    background: '#f0f6f1',
    border: '2px solid #C4EAA5',
    borderRadius: '3.125rem',
    color: '#121d47',
    fontSize: ['0.575rem', '0.75rem', null, '1rem'],
    padding: ['0.25rem', '0.5rem', null, '0.625rem'],
    justifyContent: 'center',
    alignItems: 'center',
    _hover: {
      background: '#f0f6f1',
      color: '#FE205A',
      border: '2px solid #C4EAA5',
    },
  };

  return (
    <main>
      <VStack pt={['1rem', null, '1.5rem', null, '2rem']} h='100vh'>
        <HStack justifyContent='space-between' alignItems='center' gap='0'>
          <Button
            {...buttonStyle}
            onClick={prevImage}
            id='al'
            aria-label='Предыдущее фото'
          >
            <FaArrowLeft />
          </Button>
          <VStack gap='0'>
            <Image src={img} alt={imgAlt} maxW='80%' maxH='600px' />
          </VStack>
          <Button
            {...buttonStyle}
            onClick={nextImage}
            id='al'
            aria-label='Следующее фото'
          >
            <FaArrowRight />
          </Button>
        </HStack>
        <Text py={{ base: '0.5rem', md: '1rem' }} {...textStyle}>
          {description}
        </Text>
      </VStack>
    </main>
  );
};

export default MyImageGallery;
