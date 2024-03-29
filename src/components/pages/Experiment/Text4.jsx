import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import Petr1 from '../assets/Petr1.webp';
import { Link } from '@chakra-ui/react';
import './Experiment.scss';
import '../../../App.css';

function Text4() {
  return (
    <div>
      <Header />
      <main className='experiment'>
        <br />
        <article className='exp-article'>
          <Link
            textDecoration='underline'
            color='#43129B'
            className='link-back'
            href='/experiment-2024 '
          >
            НАЗАД
          </Link>
          <br />
          <p>
            Абрам Петрович Ганнибал (до крещения Ибрагим) (1696–1781) –
            воспитанник и сподвижник Петра I, прадед Пушкина со стороны матери.
            Находился постоянно при Петре в качестве камердинера и секретаря, в
            1717 г. послан был в Париж, вступил во французскую службу,
            участвовал в войне с Испанией, учился в артиллерийской школе и
            только в 1723 г. возвратился в Россию. С этого времени вся
            дальнейшая его служба протекала в России: он был поручиком
            бомбардирской роты Преображенского полка, ездил на китайскую границу
            вместе с ближайшим сподвижником Петра I А.Д. Меншиковым, в 1755 г.
            состоял губернатором Выборга, в 1759 г. был произведён в
            генерал-аншефы, в 1762-м уволен за старостью и поселился в своём
            имении Суйда, под Петербургом, где и умер.
          </p>
        </article>
        <br />
        <div className='pic'>
          <img className='petr1' src={Petr1} alt='Пётр I' />
          <h3>Гравюра с портрета Петра I работы К. Моора (1717)</h3>
        </div>
        <br />
      </main>
      <Footer />
    </div>
  );
}

export default Text4;
