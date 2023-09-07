import React, { forwardRef } from 'react';
import '../Staff.scss';

const Interests = forwardRef((props, ref) => {
    return (
        <article ref={ref} className='staff-article'>
            <h2>Научные интересы</h2>
            <ul>
                <li>теория и практика создания учебных книг нового – психодидактического – типа по
                литературе;</li>
                <li>психология понимания поэтического текста, психодидактические принципы и приемы
                развития у подростков понимания лирики;</li>
                <li>психология чтения (сравнительное изучение чтения с листа и с экрана,
                функционирование воссоздающего читательского воображения, читательские практики
                подростков и др.);</li>
                <li>психодидактические основы организации обучения детей китайскому языку;</li>
                <li>школьное литературное образование в Китае.</li>
            </ul>
            <br />
        </article>
    );
});

export default Interests;