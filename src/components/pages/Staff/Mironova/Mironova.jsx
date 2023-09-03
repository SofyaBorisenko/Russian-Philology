import React from 'react';
import '../Staff.scss';
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
              <p>Миронова Ксения Вадимовна – кандидат психологических наук. Научный сотрудник лаборатории экопсихологии развития и психодидактики Психологического института РАО (группа психологических проблем построения школьных учебников). Старший научный сотрудник Научного и издательского центра «Наука» РАН. Автор учебных книг по литературе для учащихся основной школы.</p>
              <br />
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