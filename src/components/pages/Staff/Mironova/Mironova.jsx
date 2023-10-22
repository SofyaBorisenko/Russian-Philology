import '../Staff.scss';
import '../../../../App.css';
import Bio from './Bio.jsx';
import Interests from './Interests.jsx';
import Publications from './Publications.jsx';
import Awards from './Awards.jsx';
import Navigation from './Navigation.jsx';
import Grants from './Grants';

function Mironova() {
    return (
          <div>
            <Navigation
            bioRef={Bio}
            interestsRef={Interests}
            publicationsRef={Publications}
            awardsRef={Awards}
            grantsRef={Grants}
            />
            <article className='staff-article'>
              <p>Миронова Ксения Вадимовна – кандидат психологических наук, научный сотрудник лаборатории экопсихологии развития и
              психодидактики Психологического института РАО (группа психологических основ построения
              школьных учебников), старший научный сотрудник отдела по изучению проблем чтения
              Научного и издательского центра «Наука» РАН. Автор посвященных лирической поэзии глав в
              учебных книгах по литературе для учащихся основной школы (курс «Русская филология»).</p>
            </article>
            <Bio ref={Bio} />
            <Interests ref={Interests} />
            <Publications ref={Publications} />
            <Awards ref={Awards} />
            <Grants ref={Grants} />
          </div>
      );
    };

    export default Mironova;