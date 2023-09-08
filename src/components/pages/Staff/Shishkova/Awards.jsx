import React, { forwardRef } from 'react';
import '../Staff.scss';

const Awards = forwardRef((props, ref) => {
    return (
        <article ref={ref} className='staff-article'>
            <h2>Награды и благодарности</h2>
            <ul>
                <li>Благодарность РАО за многолетнюю деятельность в области психологии и в связи со 100-летием ФГНУ ПИ РАО (2012).</li>
            </ul>
        </article>
        );
});

export default Awards;