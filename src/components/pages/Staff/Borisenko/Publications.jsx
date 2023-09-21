import { forwardRef } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import '../Staff.scss';

const Publications = forwardRef((props, ref) => {
  return (
        <article ref={ref} className='staff-article'>
            <h2>Публикации</h2>
            <Tabs
            isFitted
            position="relative"
            variant="enclosed"
            width={'100%'}
            >
                <TabList gap={1} style={{ flexWrap: 'wrap' }}>
                {[
                    'Научные статьи в рецензируемых изданиях',
                    'Статьи в научных сборниках и монографиях',
                    'Учебные книги и пособия',
                    'Редактирование монографий и сборников конференций',
                    'Словарные статьи',
                ].map((text) => (
                    <Tab
                    key={text}
                    backgroundColor={'#F0F6F1'}
                    _selected={{ backgroundColor: '#C4EAA5' }}
                    fontSize={{ base: '0.75rem', sm: '0.8rem', md: '0.9rem', lg: '1rem', xl: '1.1rem' }}
                    padding={{ base: '2', md: '3', xl: '4' }}
                    style={{
                        alignContent: 'flex-start',
                        flexWrap: 'wrap',
                        lineHeight: '1',
                        color: '#121d47',
                        fontFamily: '"PT Sans", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        textAlign: 'left',
                        maxWidth: 'fit-content',
                    }}
                    >
                    {text}
                    </Tab>
                ))}
                </TabList>
                <TabPanels>
                    <TabPanel padding={0}>
                        <ol>
                            <li>Миронова К.В., Борисенко Н.А., Шишкова С.В. Возрастная динамика понимания текста подростками 11–16 лет в процессе смыслового чтения с экрана и с листа // Вопросы психологии. 2023. № 1. С. 27-39.</li>
                            <li>Борисенко Н.А. Трансформация функций школьного учебника в условиях цифровизации образования // Педагогика. 2022. № 7. С. 31-44.</li>
                            <li>Борисенко Н.А., Миронова К.В., Шишкова С.В. Вклад научной школы Г.Г. Граник в психологию понимания: от бумажного текста к электронному // Теоретическая и экспериментальная психология. 2022. Т. 15. № 3. С. 170-186. DOI:10.24412/2073-0861-2022-3-170-186</li>
                            <li>Миронова К.В., Борисенко Н.А., Шишкова С.В. Понимание текста подростками 11-12 лет в процессе смыслового чтения с бумажных и электронных носителей // Вопросы психологии. 2022. № 2. С. 99-110.</li>
                            <li>Борисенко Н.А. Может ли учебник воспитать патриота? (О воспитательном потенциале учебника русского языка) // Русский язык в школе. 2022. Т. 83. № 3. С. 7-17. DOI:10.30515/0131-6141-2022-83-3-7-17.</li>
                            <li>Граник Г.Г., Борисенко Н.А. Психолого-дидактические проблемы создания цифровых учебников // Психологическая наука и образование. 2021. Т. 26. № 3. C. 102-112. DOI:10 17759/pse 2021260307</li>
                            <li>Граник Г.Г., Борисенко Н.А., Миронова К.В., Шишкова С.В. Функционирование воображения подростков при чтении бумажных и электронных текстов // Вопросы психологии. 2021. № 1. С. 38-50.</li>
                            <li>Борисенко Н.А. Что нужно знать учителю-словеснику о психологических особенностях поколения Z // Русский язык в школе. 2021. № 3. С. 7-17. DOI: 10.30515/0131-6141-2021-82-3-7-17</li>
                            <li>Панов В.И., Борисенко Н.А., Капцов А.В., Колесникова Е.И., Патраков Э.В., Плаксина И.В., Суннатова Р.И. Некоторые итоги цифровизации образования на примере вынужденного удаленного школьного обучения // Педагогика. 2020. № 9. С. 65-77.</li>
                            <li>Панов В.И., Борисенко Н.А., Миронова К.В., Шишкова С.В. Поведение подростков в цифровой образовательной среде: к определению понятий и постановке проблемы // Изв. Сарат. ун-та. Новая серия. Серия: Акмеология образования. Психология развития. 2021. Т. 10. Вып. 3. С. 188-196. DOI: 10.18500/2304-9790-2021-10-3-188-196</li>
                            <li>Борисенко Н.А., Граник Г.Г. Воссоздающее воображение и понимание учащимися художественного текста // Русский язык в школе. 2020. № 4. С. 24-33.</li>
                            <li>Борисенко Н.А., Миронова К.В., Шишкова С.В., Граник Г.Г. Особенности цифрового чтения современных подростков: результаты теоретико-эмпирического исследования // Science for Education Today. 2020. Т. 10. № 5. С. 28-49. DOI: http://dx.doi.org/10.15293/2658-6762.2005.02</li>
                            <li>Граник Г.Г., Борисенко Н.А., Шишкова С.В. Проблемы индивидуализации в обучении и учебники нового типа (на материале школьного предмета «Русский язык») // Педагогика. 2020. № 1. С. 42-57.</li>
                            <li>Борисенко Н.А. Школьные электронные учебники: мировой и отечественный опыт // Педагогика. 2019. № 5. С. 18-28.</li>
                            <li>Borisenko N.A., Mironova K.V., Shishkova S.V. Psychodidactic principles of interaction between electronic and paper textbooks // The European Proceedings of Social & Behavioural Sciences. 2019. Vol. 69. P. 181-189. DOI: https://doi.org/10.15405/epsbs.2019.09.02.22</li>
                            <li>Борисенко Н.А. «Барометр влияния», или Какие факторы оказывают наибольшее воздействие на обучение? Рецензия на книгу: Джон Хэтти «Видимое обучение» // Вопросы образования. 2018. № 1. С. 257-265. https://vo.hse.ru/article/view/15767?ysclid=lm7zxe5qo0599887208</li>
                            <li>Борисенко Н.А. Учебники русского языка и детская литература: есть ли точки соприкосновения? // Русский язык в школе. 2018. Т. 79. № 8. С. 29-34.</li>
                            <li>Граник Г.Г., Борисенко Н.А. Проблема переключения внимания при работе с учебником // Педагогика. 2016. № 9. С. 46-52.</li>
                            <li>Борисенко Н.А.  Причины «любви/ненависти» молодежи к чтению классики // Мир психологии. 2016. № 1. С. 280-287. https://www.elibrary.ru/download/elibrary_26599405_60696084.pdf</li>
                            <li>Борисенко Н.А. Модные и немодные слова в психологии: Рецензия на: Потемкин С.Б., Хасин Л.А., Хасина П.Л., Щедрина Е.В. Анализ тенденций развития психологии на основе выявления динамики частоты использования психологических терминов». Вопросы психологии. 2015. № 6. С. 95-103 // Психологическая газета. 29 апреля 2016 г. http://psy.su/feed/5371/</li>
                            <li>Борисенко Н.А. Трансформация интереса учащихся к текстам учебника: что изменилось за полвека? // Человек читающий: Homo legens – 8. Сборник статей / Под общ. ред. М.В. Белоколенко, Е.С. Романичевой. М.: Русская ассоциация чтения; Издательство «Канон +» РООИ «Реабилитация», 2016. С. 44-53.</li>
                            <li>Борисенко Н.А. Проблема обогащения культурного фонда учащихся в концепции учебников нового типа // Русский язык в школе. 2015. № 9. С. 3-7.</li>
                            <li>Борисенко Н.А. Функциональная нагрузка текстовых заданий в учебниках русского языка // Русская словесность. 2015. № 6. С. 43-48.</li>
                            <li>Борисенко Н.А. Психолого-дидактические основания введения электронных ссылок в учебники нового типа по русской филологии // Мир психологии. 2012. № 3. С. 222-230.</li>
                            <li>Граник Г.Г., Борисенко Н.А. Особенности построения учебников нового типа, позволяющих реализовать функцию общения // Русский язык в школе. 2011. № 4. С. 3-8; № 5. С. 3-7.</li>
                            <li>Граник Г.Г., Борисенко Н.А. Воссоздающее воображение и его роль в обучении филологическим дисциплинам // Психологическая наука и образование. 2009. № 1. [Режим доступа]: http://psyjournals.ru/psyedu_ru/2009/n1/Granik_Borisenko.shtml</li> 
                            <li>Граник Г.Г., Н.А. Борисенко Н.А. Развитие воссоздающего воображения на уроках русского языка // Русский язык в школе. 2006. № 6. С. 3-10.</li>
                        </ol>
                    </TabPanel>
                    <TabPanel padding={0}>
                        <ol>
                            <li>Борисенко Н.А. Специфика коммуникативной функции бумажного и цифрового учебников // Общение в эпоху конвергенции технологий: сборник статей / под ред. Н.Л. Карповой, Е.А. Петровой, О.В. Зотовой. М.: ПИ РАО, 2022. С. 661-664. DOI: 10.24412/cl-36917-2022-661-664</li>
                            <li>Борисенко Н.А. К проблеме социального характера цифрового чтения // Современные проблемы книжной культуры: основные тенденции и перспективы развития: материалы XV Белорусско-Российского научного семинара-конференции. Минск; М., 2022. С. 94-98</li>
                            <li>Борисенко Н.А. Читательские предпочтения подростков относительно выбора практик чтения: экран vs бумага // Человек читающий: Homo legens–14. Сборник научных статей / под ред. М.В. Белоколенко. М.: Русская ассоциация чтения; ООО «Буки Веди», 2022. С. 30-44.</li>
                            <li>Борисенко Н.А. Социально-исторические аспекты исследования чтения с экрана // Доклады Научного совета по проблемам чтения РАО. Вып. 19: По материалам Постоянного Круглого стола по проблемам чтения РАО / сост. Ю.П. Мелентьева; под ред. В.А. Лекторского. М.: ФГБУН РАН «Наука», 2022. С. 9-14. https://www.elibrary.ru/item.asp?id=49955423&pff=1</li>
                            <li>Борисенко Н.А. Цифровая образовательная платформа как ресурс формирования новых учебных читательских практик // Доклады Научного совета по проблемам чтения РАО. Вып. 18. Материалы Постоянного Круглого стола «Чтение как социально значимая практика» / сост. Ю.П. Мелентьева; под ред. В.А. Лекторского. М.: ФГБУН «Наука» РАН, 2021. С. 9-18. </li>
                            <li>Борисенко Н.А. Разработка цифрового учебника как новый этап теории учебниковедения // Современный учебник русского языка для средней школы: теория и практика: материалы Международной науч.-практ. конференции, 25-26 марта 2021 г. М.: МПГУ, 2021. С. 80-86. DOI: 10.30515/0131-6141-2021-82-4-102-103</li>
                            <li>Борисенко Н.А. Формирование самоконтроля как функция школьного учебника: от бумажного к электронному формату // Психология саморегуляции в контексте актуальных задач образования. Материалы научной конференции. 2021. С. 56-63.</li>
                            <li>Борисенко Н.А. От бумаги к «цифре»: психодидактические аспекты создания цифрового учебного комплекса по русскому языку // Учебник как инструмент национально-культурного самоопределения обучающихся: сб. трудов конф. М.: Языки народов мира, 2021. С. 30-34. </li>
                            <li>Борисенко Н.А., Граник Г.Г. Цифровой учебник для поколения Z: проблемы и перспективы создания // Экопсихологические исследования–6: сб. науч. ст. М.; Курск, 2020. С. 430-434. </li>
                            <li>Борисенко Н.А., Миронова К.В., Шишкова С.В. Трансформация читательских практик подростков: эко-антропологические аспекты // Экология человека и проблемы цифровизации современного мира: сб. ст. по итогам Всеросс. науч. конф. «Экология человека и проблемы цифровизации современного мира».  М.: изд-во «КноРус», 2020. С. 49-52.</li> 
                            <li>Борисенко Н.А. Изучение интенсивности и актуального круга чтения подростков (по результатам исследования «Чтение с листа vs чтение с экрана») // Человек читающий: Homo legens–12. Сборник научных статей / Под ред. Белоколенко. М.: Русская ассоциация чтения, 2020. С. 78-89.</li> 
                            <li>Борисенко Н.А. Цифровое (клавиатурное) письмо как новый тип письма // Доклады Научного совета по проблемам чтения РАО. Вып. 17: По материалам Постоянного Круглого стола по проблемам чтения РАО «Чтение в контексте традиционного и цифрового образования», 26 марта 2020 г. / сост. Ю.П. Мелентьева; под ред. В.А. Лекторского. М.: ФГБУН НИЦ «Наука» РАН, 2020. С. 9-15. </li>
                            <li>Borisenko N. Учим «видеть»: приемы развития читательского воображения при работе с текстом // 4th Baltic Sea Conference on Literacy. Searching for a Common Language. Book of Abstracts. Tallinn, 2020. P. 20-21. </li>
                            <li>Борисенко Н.А., Миронова К.В., Шишкова С.В. Психодидактические принципы взаимодействия электронных и бумажных учебников // Образовательное пространство в информационную эпоху – 2019. Материалы Международной научно-практической конференции. Под ред. С.В. Ивановой. 2019. С. 876-889. </li>
                            <li>Граник Г.Г., Борисенко Н.А. Экранное и бумажное чтение: противостояние или паритет? // Современные проблемы книжной культуры: основные тенденции и перспективы развития. Материалы X Международного научного семинара и ХI Белорусско-Российского научного семинара / Сост. Л.А.  Авгуль, Н.Ю. Дмитриева. 2019. С. 43-54. </li>
                            <li>Борисенко Н.А. Система структурных компонентов учебника нового типа по русскому языку, направленных на развитие воссоздающего воображения // Психодидактика современного учебника: преемственность традиций и векторы развития; отв. ред. Н.А. Борисенко. М.: Мнемозина, 2019. С. 75-85. </li>
                            <li>Борисенко Н.А. Психологические особенности цифрового поколения и изменение его читательских характеристик // Пятый Международный интеллектуальный форум «Чтение на евразийском перекрестке», Челябинск, 24-25 октября 2019 г.: материалы форума. Челябинск, 2019. С. 291-296.  </li>
                            <li>Борисенко Н.А. Изменение роли педагога при использовании электронных учебников // Сборник статей «Наука – образование – профессия: системный личностно-развивающий подход» / Под общ. ред. Л.М. Митиной. М.: Издательство «Перо», 2019. С. 108-112. https://www.pirao.ru/upload/iblock/0eb/SBORNIK_PI_RAO_2019_2.pdf </li>
                            <li>Борисенко Н.А. Электронные образовательные ресурсы в учебниках для 5–9-го классов // Как учить русскому языку и литературе современных школьников? Школьный учебник сегодня: Коллективная монография / Под науч. рук. Г.Г. Граник. Отв. ред. Н.А. Борисенко. Москва-Санкт-Петербург: Нестор-История, 2018. С. 112-122. </li>
                            <li>Борисенко Н.А. Влияние экранных искусств на восприятие внешности литературных персонажей // Литература на экране / Под ред. А.А. Мелик-Пашаева, Н.Л. Карповой, Н.А. Борисенко, С.Ф. Дмитренко. М.: РШБА, 2018. Ч. 1. С. 92-100.  </li>
                            <li>Граник Г.Г., Борисенко Н.А. Проблемы чтения цифрового (электронного) учебника: психолого-дидактический аспект // Доклады Научного Совета по проблемам чтения РАО. Материалы Постоянного Круглого стола. Под ред. В.А. Лекторского. М.: «Наука» РАН, 2018. С. 7-13. </li>
                            <li>Граник Г.Г., Борисенко Н.А. Роль учебников по русскому языку и учебных книг по литературе в становлении читателя // Материалы Постоянного Круглого стола «Приобщение к чтению: теория, история, практики». Доклады Научного совета по проблемам чтения РАО. Вып. 14 / Сост. Ю.П. Мелентьева; под ред. В.А. Лекторского. М.: Канон+, 2017. С. 21-26.</li>
                            <li>Борисенко Н.А. Изучение воссоздающего воображения в контексте проблем чтения // Человек читающий: Homo legens – 9. Научный сборник статей / Под общ. ред. М.В. Белоконенко. М.: Русская ассоциация чтения, «Канон+», РООИ «Реабилитация», 2017. С. 91–103.</li>
                            <li>Borisenko, N. Criteria of estimation of school students’ reconstructive imagination // 6th international conference on education. 29 June 2017 – 01 July 2017. University of Zagreb. Zagreb–Croatia: Abstracts book. P. 45. http://awer-center.org/programs/ICED/iced2017-10.pdf </li>
                            <li>Borisenko N. Language as an Object of National Security // 23rd International Safe Communities Conference «Safe Communities are an Essential Need for a Modern-Day Society». Novi Sad, Serbia, 10-12 October 2017. Book of Abstracts / Editors D. Zaric, M. Radovanovich, M. Fodor. National Center for Injury Prevention and Safety Promotion. P. 129-130. </li>
                            <li>Borisenko, N. The Attitude of Pupils to Text Exercises When Fulfilling Multiple Choice Tasks [Отношение учащихся к текстовым упражнениям при выполнении заданий, требующих выбора] // 3rd Baltic Sea – 17th Nordic Literacy Conference «Making meaning – literacy in action»: Book of Abstracts. Turku/Åbo, Finland, 2016. </li>
                            <li>Борисенко Н.А. Досуговое чтение учителя-словесника как проблема: мифы, требования, реальность // Доклады Научного совета по проблемам чтения РАО. Вып. 9-10. По материалам Постоянного семинара по проблемам чтения / Под ред. В.А. Лекторского, Ю.П. Мелентьевой, Т.С. Маркаровой. М.: «Канон+», 2014. С. 5–13.</li>
                            <li>Борисенко Н.А. Чтение профессионального и непрофессионального сообщества: есть ли точки соприкосновения? // Человек читающий: Homo legens – 6. М.: Русская ассоциация чтения, 2013. С. 117-129.</li>
                            <li>Борисенко Н.А. Чтение учебника как психолого-дидактическая проблема // Доклады Научного совета по проблемам чтения РАО. Вып. 4–6. По материалам постоянного семинара по проблемам чтения / Под ред. В.А. Лекторского, Ю.П. Мелентьевой. М.: «Канон+», 2012. С. 160–164.</li>
                            <li>Граник Г.Г., Борисенко Н.А. Проблемы чтения и понимания в исследованиях лаборатории Психологического института РАО // Материалы 15-й Международной конференции «Чтение и развитие личности». М., 2011.</li>
                            <li>Граник Г.Г., Борисенко Н.А. Развитие воссоздающего воображения в учебниках нового типа по русской филологии // Психолого-дидактические основы создания учебников нового типа по русской филологии / Под научн. ред. Г.Г. Граник. Москва-Обнинск, 2007. С. 144-163 (в соавторстве с Г.Г. Граник). </li>
                            <li>Граник Г.Г., Борисенко Н.А. Понимание текста на уроках русского языка и литературы // Русский язык. Приложение к газете «Первое сентября». 2007. № 23.</li>
                            <li>Борисенко Н.А., Николаева А.Б. Литература и театр глазами психологов // Библиопсихология и библиотерапия / Ред. Н.С. Лейтес, Н.Л. Карпова, О.Л. Кабачек. М.: Школьная библиотека, 2005. С. 54-61.</li>
                        </ol>
                    </TabPanel>
                    <TabPanel padding={0}>
                        <p style={{ paddingTop: '0.625rem' }}><b>Новая редакция учебников (2022 г.):</b></p>
                        <ol style={{ padding: '0' }}>
                            <li>Граник Г.Г., Борисенко Н.А., Бондаренко С.М., Шишкова С.В. Русский язык. 5 класс: учебник для общеобразовательных организаций. В 3 ч.; под общ. ред. Г. Г. Граник. 8-е изд., перераб. М.: Мнемозина, 2023.</li>
                            <li>Граник Г.Г., Борисенко Н.А., Владимирская Г.Н., Бондаренко С.М.  Русский язык. 6 класс: учебник для общеобразовательных организаций. В 3 ч.; под общ. ред. Г.Г. Граник. 6-е изд., перераб. М.: Мнемозина, 2023.</li>
                        </ol>
                        <p style={{ paddingTop: '0.625rem' }}><b>Редакция 2012-2013 гг.:</b></p>
                        <ol style={{ padding: '0' }}>
                            <li value="3">Граник Г.Г., Борисенко Н.А., Бондаренко С.М. Русский язык. 5 класс: учебник для общеобразовательных организаций. В 3 ч.; под общ. ред. Г.Г. Граник. 5-е изд., испр. М.: Мнемозина, 2021. (1-е изд. – 2012)</li>
                            <li>Граник Г.Г., Борисенко Н.А., Владимирская Г.Н., Бондаренко С.М.  Русский язык. 6 класс: учебник для общеобразоват. учреждений. В 3 ч.; под общ. ред. Г.Г. Граник. М.: Мнемозина, 2013.</li>
                            <li>Граник Г.Г., Борисенко Н.А., Владимирская Г.Н. Русский язык. 7 класс: учебник для общеобразоват. учреждений. В 3 ч.; под общ. ред. Г.Г. Граник. 2-е изд., испр. М.: Мнемозина, 2017.</li>
                            <li>Граник Г.Г., Борисенко Н.А., Владимирская Г.Н.  Русский язык. 8 класс: учебник для общеобразоват. учреждений. В 3 ч.; под общ. ред. Г.Г. Граник. 2-е изд., испр. М.: Мнемозина, 2013.</li>
                            <li>Граник Г.Г., Борисенко Н.А., Владимирская Г.Н.  Русский язык. 9 класс: учебник для общеобразоват. учреждений. В 2 ч.; под общ. ред. Г.Г. Граник. 2-е изд., испр. М.: Мнемозина, 2013.</li>
                            <li>Борисенко Н.А. Русский язык. 5 класс. Методические рекомендации к учебнику Г.Г. Граник и др. «Русский язык. 5 класс»: пособие для учителя. М. Мнемозина, 2014.</li>
                            <li>Граник Г.Г., Борисенко Н.А., Владимирская Г.Н. Русский язык. Рабочие программы. Предметная линия учебников под общ. ред. Г.Г. Граник. 5–9 классы. М.: Мнемозина, 2013.</li>
                        </ol>
                    </TabPanel>
                    <TabPanel padding={0}>
                        <ol>
                            <li>Психология. Литература. Театр. Кино: коллективная монография. М.: Психологический институт РАО, Литературный институт им. А.М. Горького; под общ. ред. Н.Л. Карповой; редкол.: К.В. Миронова, Н.А. Борисенко, С.Ф. Дмитренко. М.: РШБА, 2020. 432 с.</li>
                            <li>Психодидактика современного учебника: преемственность традиций и векторы развития»; отв. ред. Н.А. Борисенко, авт.-сост. Н.А. Борисенко, К.В. Миронова, С.В.  Шишкова. М.: Мнемозина, 2019. 295 с.</li>
                            <li>Как учить русскому языку и литературе современных школьников? Школьный учебник сегодня: коллективная монография / Под науч. руков. Г.Г. Граник. Отв. ред. Н.А. Борисенко. М.-СПб., Нестор-История, 2018. 320 с.</li>
                            <li>Литература на экране / Под ред. А.А. Мелик-Пашаева, Н.Л. Карповой, Н.А. Борисенко, С.Ф. Дмитренко. М.: РШБА, 2018. В 2 ч.</li> 
                        </ol>
                    </TabPanel>
                    <TabPanel padding={0}>
                        <ol>
                            <li>Борисенко Н.А. Воссоздающее читательское воображение. Деловое чтение. Истинный читатель. Линейное чтение. Мобильное чтение. Нелинейное чтение. Смысловое чтение (в соавт. с Ю.А. Шулекиной). Техника чтения. Уровень чтения. Читательское восприятие (в соавт. с Ю.А. Шулекиной) // Чтение. Энциклопедический словарь / под ред. Ю.П. Мелентьевой. М.: ФГБУН НИЦ «Наука» РАН, 2021. С. 26-27, 38-39, 77, 101-103, 122-123, 231-233, 266-267, 279-280, 334-336.</li> 
                        </ol>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </article>
    );
});

export default Publications;