import React, { forwardRef } from 'react';
import '../Staff.scss';

const Interests = forwardRef((props, ref) => {
    return (
        <article ref={ref} className='staff-article'>
            <h2>Научные интересы</h2>
            <ul>
                <li>lala;</li>
                <li>lala;</li>
                <li>lala.</li>
            </ul>
            <br />
        </article>
    );
});

export default Interests;