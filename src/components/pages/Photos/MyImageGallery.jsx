import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './MyImageGallery.css';
import '../../../App.css';
import photo1 from '../assets/photo1.webp';
import photo2 from '../assets/photo2.webp';
import photo3 from '../assets/photo3.webp';
import photo4 from '../assets/photo4.webp';
import photo5 from '../assets/photo5.webp';
import photo6 from '../assets/photo6.webp';
import photo7 from '../assets/photo7.webp';

const images = [
  {
    original: photo1,
    thumbnail: photo1,
    description:
      'Слева направо: С.М. Бондаренко, Г.Г. Граник, М.С. Шехтер, Л.А. Концевая (2000)',
    originalAlt:
      'Слева направо: С.М. Бондаренко, Г.Г. Граник, М.С. Шехтер, Л.А. Концевая (2000)',
  },
  {
    original: photo2,
    thumbnail: photo2,
    description:
      'Группа психологических основ разработки школьного учебника: в первом ряду слева направо: Г.Н. Владимирская, Г.Г. Граник, Н.А. Борисенко, во втором ряду: С.В. Шишкова, О.В. Гвинджилия, К.В. Миронова (2014)',
    originalAlt:
      'Группа психологических основ разработки школьного учебника: в первом ряду слева направо: Г.Н. Владимирская, Г.Г. Граник, Н.А. Борисенко, во втором ряду: С.В. Шишкова, О.В. Гвинджилия, К.В. Миронова (2014)',
  },
  {
    original: photo3,
    thumbnail: photo3,
    description: 'Г.Г. Граник (2008)',
    originalAlt: 'Г.Г. Граник (2008)',
  },
  {
    original: photo4,
    thumbnail: photo4,
    description: 'Г.Г. Граник (2011)',
    originalAlt: 'Г.Г. Граник (2011)',
  },
  {
    original: photo5,
    thumbnail: photo5,
    description: 'Г.Г. Граник (2007)',
    originalAlt: 'Г.Г. Граник (2007)',
  },
  {
    original: photo6,
    thumbnail: photo6,
    description: 'Слева направо: Н.А. Борисенко, Г.Г. Граник (2010)',
    originalAlt: 'Слева направо: Н.А. Борисенко, Г.Г. Граник (2010)',
  },
  {
    original: photo7,
    thumbnail: photo7,
    description:
      'Слева направо: Г.Н. Владимирская, Н.А. Борисенко, Г.Г. Граник (2011)',
    originalAlt:
      'Слева направо: Г.Н. Владимирская, Н.А. Борисенко, Г.Г. Граник (2011)',
  },
];

function MyImageGallery() {
  return (
    <main className='my-custom-gallery'>
      <ImageGallery items={images} />
    </main>
  );
}

export default MyImageGallery;
