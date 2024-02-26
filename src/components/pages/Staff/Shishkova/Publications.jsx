import { forwardRef } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import '../Staff.scss';

const Publications = forwardRef((props, ref) => {
  return (
    <article ref={ref} className='staff-article' lang='ru'>
      <h2>Публикации</h2>
      <Tabs isFitted position='relative' variant='enclosed' width={'100%'}>
        <TabList
          gap={1}
          style={{ flexWrap: 'wrap', wordBreak: 'normal', hyphens: 'auto' }}
        >
          {[
            'Научные статьи в рецензируемых изданиях',
            'Учебные книги и пособия',
            'Статьи в научных сборниках и монографиях',
            'Редактирование монографий и сборников конференций',
          ].map((text) => (
            <Tab
              key={text}
              bg='#e1e1e1'
              _selected={{ backgroundColor: '#C4EAA5' }}
              fontSize={{
                base: '0.75rem',
                sm: '0.8rem',
                md: '0.9rem',
                lg: '1rem',
                xl: '1.1rem',
              }}
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
              <li>
                Миронова К.В., Борисенко Н.А., Шишкова С.В. Возрастная динамика
                понимания текста подростками 11–16 лет в процессе смыслового
                чтения с экрана и с листа // Вопросы психологии. 2023. № 1. С.
                27-39.
              </li>
              <li>
                Борисенко Н.А., Миронова К.В., Шишкова С.В. Вклад научной школы
                Г.Г. Граник в психологию понимания: от бумажного текста к
                электронному // Теоретическая и экспериментальная психология.
                2022. Т. 15. № 3. С. 170-186.
                DOI:10.24412/2073-0861-2022-3-170-186
              </li>
              <li>
                Миронова К.В., Борисенко Н.А., Шишкова С.В. Понимание текста
                подростками 11-12 лет в процессе смыслового чтения с бумажных и
                электронных носителей // Вопросы психологии. 2022. № 2. С.
                99-110.
              </li>
              <li>
                Граник Г.Г., Борисенко Н.А., Миронова К.В., Шишкова С.В.
                Функционирование воображения подростков при чтении бумажных и
                электронных текстов // Вопросы психологии. 2021. № 1. С. 38-50.
              </li>
              <li>
                Панов В.И., Борисенко Н.А., Миронова К.В., Шишкова С.В.
                Поведение подростков в цифровой образовательной среде: к
                определению понятий и постановке проблемы // Изв. Сарат. ун-та.
                Новая серия. Серия: Акмеология образования. Психология развития.
                2021. Т. 10. Вып. 3. С. 188-196. DOI:
                10.18500/2304-9790-2021-10-3-188-196
              </li>
              <li>
                Борисенко Н.А., Миронова К.В., Шишкова С.В., Граник Г.Г.
                Особенности цифрового чтения современных подростков: результаты
                теоретико-эмпирического исследования // Science for Education
                Today. 2020. Т. 10. № 5. С. 28-49. DOI:
                http://dx.doi.org/10.15293/2658-6762.2005.02
              </li>
              <li>
                Граник Г.Г., Борисенко Н.А., Шишкова С.В. Проблемы
                индивидуализации в обучении и учебники нового типа (на материале
                школьного предмета «Русский язык») // Педагогика. 2020. № 1. С.
                42-57.
              </li>
              <li>
                Шишкова С.В. Психолого-дидактические причины, требующие уже в
                начальной школе создания учебников по русскому языку на
                синтаксической основе // Мир психологии. 2009. № 1. С. 288-295.
              </li>
              <li>
                Шишкова С.В. Психологические причины различного отношения
                школьников к учебникам нового типа по русской филологии //
                Теоретическая и экспериментальная психология. М., 2008. Т. 1. №
                2.
              </li>
            </ol>
          </TabPanel>
          <TabPanel padding={0}>
            <p style={{ paddingTop: '0.625rem' }}>
              <b>Новая редакция учебников (2022 г.):</b>
            </p>
            <ol style={{ padding: '0' }}>
              <li>
                Граник Г.Г., Борисенко Н.А., Бондаренко С.М., Шишкова С.В.
                Русский язык. 5 класс: учебник для общеобразовательных
                организаций. В 3 ч.; под общ. ред. Г. Г. Граник. 8-е изд.,
                перераб. М.: Мнемозина, 2023.
              </li>
              <li>
                Граник Г.Г., Борисенко Н.А., Владимирская Г.Н., Бондаренко С.М.
                Русский язык. 6 класс: учебник для общеобразовательных
                организаций. В 3 ч.; под общ. ред. Г.Г. Граник. 6-е изд.,
                перераб. М.: Мнемозина, 2023.
              </li>
            </ol>
            <p style={{ paddingTop: '0.625rem' }}>
              <b>Редакция 2012-2013 гг.:</b>
            </p>
            <ol style={{ padding: '0' }}>
              <li>
                Граник Г.Г., Крюкова Т.Ш., Анофриева Н.Ф., Шишкова С.В. Русский
                язык. 1 класс: учебник для общеобразовательных организаций; под
                общ. ред. Г.Г. Граник, В.В. Рубцова. 5-е изд. М.: Мнемозина,
                2023.
              </li>
              <li>
                Граник Г.Г., Кантаровская О.З., Токмакова И.П., Шишкова С.В.
                Русский язык. 3 класс: учебник для общеобразовательных
                организаций: в 3 кн.; под общ. ред. Г.Г. Граник, В.В. Рубцова.
                5-е изд. М.: Мнемозина, 2022.
              </li>
              <li>
                Граник Г.Г., Кантаровская О.З., Токмакова И.П., Шишкова С.В.
                Русский язык. 4 класс: учебник для общеобразовательных
                организаций: в 3 кн.; под общ. ред. Г.Г. Граник, В.В. Рубцова.
                5-е изд. М.: Мнемозина, 2023.
              </li>
              <li>
                Граник Г.Г., Шишкова С.В., Гвинджилия О.В. Русский язык. Рабочие
                программы. Предметная линия учебников под общ. ред. Г.Г. Граник.
                В.В. Рубцова. 1–4 классы: пособие для учителей общеобразоват.
                организаций. М.: Мнемозина, 2014.
              </li>
              <li>
                Каганер И.В., Шишкова С.В. Русский язык. 3 класс. Методические
                рекомендации к учебнику Г.Г. Граник и др. «Русский язык. 3
                класс»: пособие для учителей общеобразоват. организаций. М.:
                Мнемозина, 2023.
              </li>
              <li>
                Шишкова С.В. Русский язык. 4 класс. Методические рекомендации к
                учебнику Г.Г. Граник и др. «Русский язык. 4 класс»: пособие для
                учителей общеобразоват. организаций. М.: Мнемозина, 2023.
              </li>
            </ol>
          </TabPanel>
          <TabPanel padding={0}>
            <ol>
              <li>
                Борисенко Н.А., Миронова К.В., Шишкова С.В. Трансформация
                читательских практик подростков: эко-антропологические аспекты
                // Экология человека и проблемы цифровизации современного мира:
                сборник статей по итогам Всероссийской науч. конф. 28 октября
                2020 г. М.: Русайнс, 2020. С. 48-52.
              </li>
              <li>
                Борисенко Н.А., Миронова К.В., Шишкова С.В. Психодидактические
                принципы взаимодействия электронных и бумажных учебников //
                Образовательное пространство в информационную эпоху – 2019.
                Материалы Международной научно-практической конференции. Под
                ред. С.В. Ивановой. 2019. С. 876-889.
              </li>
              <li>
                Шишкова С.В. Текстоцентрический принцип построения курса
                русского языка в начальной школе // Психодидактика современного
                учебника: преемственность традиций и векторы развития; отв. ред.
                Н.А. Борисенко, авт.-сост. Н.А. Борисенко, К.В. Миронова, С.В.
                Шишкова. М.: Мнемозина, 2019. С. 143-153.
              </li>
              <li>
                Borisenko N.A., Mironova K.V., Shishkova S.V. Psychodidactic
                principles of interaction between electronic and paper textbooks
                // The European Proceedings of Social & Behavioural Sciences,
                2019. Vol. 69. P. 181-189.
              </li>
              <li>
                Шишкова С.В. Принцип драматургии как основа построения учебников
                русского языка для начальной школы // Психология, литература,
                кино в диалоге с театром. Материалы Межд. науч. конф. Москва,
                3-5 декабря 2019 г. / Под общ. ред. Н.Л. Карповой. М., 2019.
              </li>
              <li>
                Шишкова С.В. Психологические проблемы запоминания учебного
                материала младшими школьниками (на материале школьного предмета
                «Русский язык») // Как учить русскому языку и литературе
                современных школьников? Школьный учебник сегодня: Коллективная
                монография / под науч. рук. Г.Г. Граник, отв. ред. Н.А.
                Борисенко. М., СПб.: Нестор-История, 2018. С. 149-169.
              </li>
              <li>
                Шишкова С.В. Построение курса русского языка в начальной школе
                на синтаксической основе // Как учить русскому языку и
                литературе современных школьников? Школьный учебник сегодня:
                Коллективная монография / под науч. рук. Г.Г. Граник, отв. ред.
                Н.А. Борисенко. М., СПб.: Нестор-История, 2018. С. 149-169.
              </li>
              <li>
                Шишкова С.В. Организация учебного чтения на уроках русского
                языка в начальной школе / С.В. Шишкова // Как учить русскому
                языку и литературе современных школьников? Школьный учебник
                сегодня: Коллективная монография / под науч. рук. Г.Г. Граник,
                отв. ред. Н.А. Борисенко. М., СПб.: Нестор-История, 2018. С.
                149-169.
              </li>
              <li>
                Шишкова С.В. Пробуждение у младших школьников интереса к чтению
                с помощью учебников нового типа по русскому языку // Материалы
                Постоянного Круглого стола «Приобщение к чтению: теория,
                история, практики. Доклады Научного совета по проблемам чтения
                РАО Вып. 14. М.: Канон+, 2017.
              </li>
              <li>
                Шишкова С.В. Роль художественных текстов в пробуждении у
                учащихся познавательного интереса к предмету «Русский язык» //
                Психология и литература в диалоге о человеке / под ред. Н.А.
                Борисенко, Н.Л. Карповой, С.Ф. Дмитренко. М.: ОО ИД «Луч», 2016.
                С. 94-98.
              </li>
              <li>
                Шишкова С.В. Формирование интереса к чтению у школьников,
                испытывающих стойкую неприязнь к чтению // Межд. науч. конф.
                «Чтение в образовании и культуре»: Доклады и тезисы / Сост. Ю.П.
                Мелентьева; Т.С. Маркарова. М., 2011.
              </li>
            </ol>
          </TabPanel>
          <TabPanel padding={0}>
            <ol>
              <li>
                Психодидактика современного учебника: преемственность традиций и
                векторы развития»; отв. ред. Н.А. Борисенко, авт.-сост. Н.А.
                Борисенко, К.В. Миронова, С.В. Шишкова. М.: Мнемозина, 2019. 295
                с.
              </li>
              <li>
                Русская филология: результаты работы по учебникам курса (русский
                язык и литература) / авт.-сост. С.В. Шишкова. М., 2008.
              </li>
            </ol>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </article>
  );
});

export default Publications;
