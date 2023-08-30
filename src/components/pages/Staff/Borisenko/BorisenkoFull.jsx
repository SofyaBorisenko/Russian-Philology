import React from 'react';
import '../Staff.css';
import Bio from './Bio.jsx';
import Interests from './Interests.jsx';
import Publications from './Publications.jsx';
import Awards from './Awards.jsx';
import Navigation from './Navigation.jsx';

function Borisenko() {
    return (
          <div>
            <Navigation
            bioRef={Bio}
            interestsRef={Interests}
            publicationsRef={Publications}
            awardsRef={Awards}
            />
            <article>
              <p>Борисенко Наталья Анатольевна – ведущий научный сотрудник
              Психологического института РАО, кандидат филологических наук,
              специалист в области педагогической психологии, член авторского
              коллектива УМК «Русский язык. 5–9 классы» под науч. руков. акад.
              РАО Г.Г. Граник, лауреат премии Правительства Российской Федерации
              в области образования за создание УМК по курсу «Русский язык и
              литературное чтение» для общеобразовательных учреждений» (2008),
              вице-президент Русской ассоциации чтения, член Союза журналистов Москвы.</p>
              <p>Автор свыше 250 публикаций в научных («Вопросы психологии»,
              «Психологическая наука и образование», «Вопросы образования»,
              «Педагогика», «Русский язык в школе» и др.), научно-популярных
              («Русский язык», «Литература» ИД «Первое сентября») и литературно-
              художественных («Знамя») журналах; 20 учебников (в соавторстве с Г.Г.
              Граник и др.).</p>
              <br />
            </article>
            <Bio ref={Bio} />
            <Interests ref={Interests} />
            <Publications ref={Publications} />
            <Awards ref={Awards} />
          </div>
      );
    };

    export default Borisenko;