import React, { forwardRef } from 'react';
import '../Staff.scss';

const Bio = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <article className='staff-article'>
                <h2>Биография</h2>
                <p>В 2007 г. закончила с отличием филологический факультет МГУ им. М.В. Ломоносова
                (квалификации: «Филолог. Преподаватель русского языка и литературы», «Преподаватель
                английского языка в школах и неязыковых вузах») и Межвузовский факультет китайского
                языка при ИСАА МГУ.</p>
                <p>В 2007-2008 гг. прошла годичную стажировку в Международном институте китайского языка
                при Ляонинском университете в г. Шэньян (КНР). В 2010 г. получила сертификат о сдаче
                квалификационного экзамена по китайскому языку HSK 5 уровня.</p>
                <p>В 2013 г. прошла онлайн курс Стэнфордского университета «Writing in the Sciences».</p>
                <p>В 2017 г. закончила магистратуру НИУ ВШЭ по специальности «Психология».</p>
                <p>В 2021 г. успешно защитила кандидатскую диссертацию по специальности 19.00.07 «Педагогическая психология» на тему «Психодидактические условия развития у подростков понимания лирической поэзии».</p>
                <p>С 2005 г. работает в Психологическом институте РАО. С 2022 г. работает по совместительству в
                ФГБУН НИЦ «Наука» РАН.</p>
                <p>В 2010-2016 гг. преподавала в ГБОУ СОШ 1095 СП № 3 английский язык, китайский язык и культуру Китая.</p>
                <p>Член Союза литераторов РФ. Пишет стихи на китайском языке и представляет их русскому
                читателю в авторском переводе. Автор сборника стихов на китайском языке с переводом и
                заметок о Китае «На солнечной стороне» (М.: ВКН, 2022).</p>
            </article>
        </section>
        );
});

export default Bio;