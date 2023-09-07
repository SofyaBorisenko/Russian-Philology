import React, { forwardRef } from 'react';
import '../Staff.scss';

const Grants = forwardRef((props, ref) => {
    return (
        <article ref={ref} className='staff-article'>
            <h2>Участие в грантах</h2>
            <ul>
                <li>Грант РФФИ № 18-013-20085 «Проект организации научной конференции «Психодидактика современного учебника: преемственность традиций и векторы развития»». 2018.</li>
                <li>Грант РГНФ № 11-06-00646а «История и направления исследований чтения и грамотности в Психологическом институте РАО (к 100-летию института)».  2012-2013.</li>
            </ul>
            <br />
        </article>
        );
});

export default Grants;