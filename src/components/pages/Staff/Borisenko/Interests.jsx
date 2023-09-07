import React, { forwardRef } from 'react';
import '../Staff.scss';

const Interests = forwardRef((props, ref) => {
    return (
        <article ref={ref}>
            <h2>Научные интересы</h2>
            <ul>
                <li>теория и практика создания учебников нового типа по русскому языку;</li>
                <li>психодидактика, в том числе психодидактика школьного учебника;</li>
                <li>цифровизация образования (электронные учебники, цифровые образовательные платформы, цифровое чтение и др.);</li>
                <li>психология чтения (понимание текста, воссоздающее читательское воображение и его роль в обучении, чтение с экрана);</li>
                <li>психолого-дидактические проблемы современного филологического образования;</li>
                <li>чтение и грамотность, в том числе новая грамотность, воспитание читателя-школьника, приобщение подростков к чтению;</li>
                <li>русский язык, культура русской речи, изменения в современном русском языке.</li>
            </ul>
            <br />
        </article>
    );
});

export default Interests;