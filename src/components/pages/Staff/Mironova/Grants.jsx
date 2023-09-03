import React, { forwardRef } from 'react';
import '../Staff.scss';

const Grants = forwardRef((props, ref) => {
    return (
        <article ref={ref} className='staff-article'>
            <h2>Участие в грантах</h2>
            <ul>
                <li>Грант РФФИ № 18-013-20085 «Проект организации научной конференции «Психодидактика современного учебника: преемственность традиций и векторы развития»» (2018).</li>
            </ul>
            <br />
        </article>
        );
});

export default Grants;