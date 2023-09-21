import { forwardRef } from 'react';
import '../Staff.scss';

const Interests = forwardRef((props, ref) => {
    return (
        <article ref={ref} className='staff-article'>
            <h2>Научные интересы</h2>
            <ul>
                <li>теория и практика создания школьных учебников нового типа по русскому языку на психодидактической основе;</li>
                <li>психологические проблемы обучения русскому языку учащихся начальной и основной школы;</li>
                <li>проблемы чтения и понимания текста. Приобщение к чтению младших школьников.</li>
            </ul>
        </article>
    );
});

export default Interests;