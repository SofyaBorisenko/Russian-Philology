import { forwardRef } from 'react';
import '../Staff.scss';

const Awards = forwardRef((props, ref) => {
    return (
        <article ref={ref} className='staff-article'>
            <h2>Награды и благодарности</h2>
            <ul>
                <li>Премия Правительства Российской Федерации в области 
                    образования за создание УМК по курсу «Русский язык 
                    и литературное чтение» для общеобразовательных 
                    учреждений»;</li>
                <li>Благодарность РАО за многолетнюю 
                    высококвалифицированную деятельность в области 
                    психологии и в связи со 100-летием ФГНУ ПИ РАО (2012).</li>
            </ul>
        </article>
        );
});

export default Awards;