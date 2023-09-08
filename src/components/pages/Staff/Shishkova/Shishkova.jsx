import React from 'react';
import '../Staff.scss';
import Bio from './Bio.jsx';
import Interests from './Interests.jsx';
import Publications from './Publications.jsx';
import Awards from './Awards.jsx';
import Navigation from './Navigation.jsx';
import Grants from './Grants';

function Shishkova() {
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
              <p>Шишкова Светлана Викторовна – старший научный сотрудник Психологического института РАО, специалист в области педагогической психологии, член авторского коллектива УМК «Русский язык. 1–9 кл.» под науч. руков. акад. РАО Г.Г. Граник.</p>
            </article>
            <Bio ref={Bio} />
            <Interests ref={Interests} />
            <Publications ref={Publications} />
            <Awards ref={Awards} />
            <Grants ref={Grants} />
          </div>
      );
    };

    export default Shishkova;