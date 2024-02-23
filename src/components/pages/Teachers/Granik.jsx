import './Teachers.scss';
import '../../../App.css';
import {
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Granik_photo from '../assets/Granik_photo.webp';

function Granik() {
  return (
    <main>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='unstyled'
        paddingBottom={4}
      >
        <CardBody>
          <Stack>
            <Heading
              className='card-heading'
              fontSize={{
                base: '0.75rem',
                sm: '0.85rem',
                md: '0.9rem',
                lg: '1rem',
                xl: '1.2rem',
              }}
              lineHeight={{
                base: '1.6rem',
                sm: '1.8rem',
                md: '2rem',
                xl: '3rem',
              }}
            >
              Г.Г. Граник
            </Heading>
            <Box>
              <Image
                align={'top'}
                float={'left'}
                marginRight={{ base: 3, md: 5, '2xl': 6 }}
                maxW={{
                  base: '110px',
                  sm: '140px',
                  md: '180px',
                  lg: '200px',
                  '2xl': '210px',
                }}
                objectFit='contain'
                src={Granik_photo}
                alt='Г.Г. Граник'
              />
              <Text className='card-text'>
                <b>Граник Генриетта Григорьевна</b> (1928-2021) - российский
                психолог, специалист в области педагогической психологии,
                психологии речи. Доктор психологических наук (1981), профессор
                (1996), действительный член Российской академии образования
                (1995), дважды лауреат премии Правительства РФ в области
                образования (1997, 2008). Основные направления научной
                деятельности Г.Г. Граник связаны с исследованием психологических
                механизмов формирования грамотной речи, теории и практики
                создания школьного учебника нового типа по русскому языку,
                принципов и приемов воспитания читателя, понимания учебного и
                художественного текстов.
              </Text>
            </Box>
            <Accordion defaultIndex={[]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' className='accordion-button'>
                      Подробнее
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text className='accordion-text'>
                    Г.Г. Граник разработаны два новых направления в
                    педагогической психологии: «Школьный учебник» и «Школьное
                    литературоведение на психологической основе». Под научным
                    руководством Г.Г. Граник и при ее непосредственном участии
                    написано свыше 50 учебников и учебных книг по русскому
                    языку, 12 учебных книг по литературе и литературному чтению.
                  </Text>
                  <br />
                  <Text className='accordion-text'>
                    Одной из главных проблем, которую исследовала Г.Г. Граник,
                    была
                    <i>проблема чтения и понимания текста</i>. Обращение к ней
                    было продиктовано необходимостью изучения феномена понимания
                    не только в теоретическом, но и в практическом плане.
                    Проведенные в 1980-е гг. в разных регионах страны
                    комплексные проверки учащихся 4–10-х классов показали, что
                    лишь 3% обследованных школьников владеют базовыми приемами
                    работы с текстом. В 90-е гг. ускорился процесс «потери»
                    читателей-подростков, у которых по мере взросления снижался
                    интерес к серьезному чтению и осмыслению прочитанного. Перед
                    школой была поставлена задача «возвращения» читателя. Однако
                    без опоры на исследования психологических механизмов чтения
                    и понимания она не могла быть решена. Необходимо было найти
                    теоретические основания обучения пониманию текста, провести
                    ряд экспериментов, выработать конкретные практические
                    рекомендации и довести их до учителей-практиков, по словам
                    Г.Г. Граник, – «до станка».
                  </Text>
                  <br />
                  <Text className='accordion-text'>
                    Согласно концепции Г.Г. Граник, понимание рассматривается
                    как аналитико-синтетический «процесс, направляемый целью
                    понять», в котором слиты восприятие, внимание, мышление,
                    воображение, память, задействуется вся сфера эмоциональных,
                    интеллектуальных, волевых свойств и способностей личности. В
                    центр исследовательской программы научного коллектива,
                    созданного Г.Г. Граник, была поставлена задача, поныне
                    остающаяся актуальной, – воспитание
                    <i>понимающего Читателя</i>, открытого эстетическому и
                    эмоциональному воздействию текста, умеющего грамотно
                    выразить свои чувства и мысли как в устной, так и в
                    письменной форме. Другое определение такого читателя –
                    «идеальный». Была разработана авторская модель «идеального
                    читателя», которая послужила основой для создания методик,
                    направленных на выявление читательской позиции и на
                    формирование приемов работы с текстом. Важность данных
                    методик состоит в том, что они не только теоретически
                    обоснованы, экспериментально апробированы, но и внедрены в
                    практику школы. Это стало возможным благодаря включению
                    приемов понимания текста в учебники и учебные книги по
                    русскому языку и литературе, что является новаторской идеей,
                    реализованной в курсе «Русская филология». Г.Г. Граник –
                    основоположник научной школы психологических проблем
                    построения школьного учебника. Впервые на основе синтеза
                    наук – достижений общей и педагогической психологии,
                    психодидактики, лингвистики, литературоведения и частных
                    методик – были созданы принципиально новые учебники,
                    учебники нового (психодидактического) типа, одной из функций
                    которых стало формирование у школьников приемов понимания
                    текста. Такие учебники выстроены с учетом закономерностей и
                    механизмов психического развития детей и подростков и
                    призваны определять стратегию и тактику моделируемой в них
                    совместной деятельности педагога и учащихся.
                  </Text>
                  <br />
                  <Text className='accordion-text'>
                    Понимая, что учить по-новому нужно не только учащихся, но и
                    учителей, Г.Г. Граник с самого начала стала создавать книги
                    и для педагогов-практиков. Одна из монографий Г.Г. Граник,
                    написанная в соавторстве с С.М. Бондаренко и Л.А. Концевой,
                    символически была названа «Дорога к книге» (1996). Именно
                    «дорогу к книге» теоретическими и экспериментальными
                    исследованиями и прокладывал данный коллектив
                    единомышленников.
                  </Text>
                  <br />
                  <Text className='accordion-text'>
                    Созданная Г.Г. Граник концепция понимания и разработанная на
                    ее основе система обучения школьников пониманию текста не
                    теряют своей актуальности. Идея воспитания{' '}
                    <i>понимающего Читателя</i>, для которого чтение является
                    потребностью, формой духовной жизни и средством созидания
                    самого себя как личности, востребована и на современном
                    этапе развития образования.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' className='accordion-button'>
                      Основные работы
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ol className='accordion-text'>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко. Синтаксис и пунктуация
                      русского языка: Экспериментальный программированный
                      учебник для III–IV классов. М., 1970.
                    </li>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко, Л.А. Концевая. Учитель,
                      учебник и школьники. М.: Просвещение, 1977.{' '}
                    </li>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко. Секреты пунктуации. М.:
                      Просвещение, 1986.
                    </li>
                    <li>
                      Граник Г.Г., Бондаренко С.М., Концевая Л.А. Когда книга
                      учит. М.: Просвещение, 1988.
                    </li>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко, Л.А. Концевая. Как работать
                      с учебником. М.: Просвещение, 1989.
                    </li>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко. Секреты орфографии. М.:
                      Просвещение, 1991.{' '}
                    </li>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко, Л.А. Концевая, Г.Н.
                      Владимирская. Речь, язык и секреты пунктуации. М.:
                      Просвещение, 1995.
                    </li>
                    <li>
                      Граник Г.Г., Бондаренко С.М., Концевая Л.А. Как учить
                      работать с книгой. М.: НПО «Образование», 1995.{' '}
                    </li>
                    <li>
                      Граник Г.Г., Бондаренко С.М., Концевая Л.А. Дорога к
                      книге. М.: НПО «Образование», 1996.{' '}
                    </li>
                    <li>
                      Граник Г.Г., Шаповал С.А, Бондаренко С.М., Концевая Л.А.
                      Литература. Учимся понимать художественный текст:
                      Задачник-практикум. 8–11 классы / под науч. руков. Г.Г.
                      Граник. М.: НПО «Образование от А до Я», 1999.
                    </li>
                    <li>
                      Граник Г.Г., Концевая Л.А. Драматурги, драматургия, театр.
                      М.: Владос, 2001.
                    </li>
                    <li>
                      Граник Г.Г., Концевая Л.А. Русская литература: От былин до
                      Крылова, М.: Баласс, 2007.
                    </li>
                    <li>
                      Психолого-дидактические основы создания учебников по
                      русской филологии / под науч. ред. Г.Г. Граник.
                      М.–Обнинск: ИГ-СОЦИН, 2007.
                    </li>
                    <li>
                      Граник Г.Г., Концевая Л.А., Динерштейн Е.Е., Миронова К.В.
                      Я – другой. М.Ю. Лермонтов. М.: Илекса, 2012.
                    </li>
                    <li>
                      Граник Г.Г., Концевая Л.А. Роман А.С. Пушкина «Евгений
                      Онегин». Читаем, размышляем. М.: Илекса, 2016.
                    </li>
                    <li>
                      Как учить русскому языку и литературе современных
                      школьников? Школьный учебник сегодня: коллективная
                      монография / Под науч. руков. Г.Г. Граник. Отв. ред. Н.А.
                      Борисенко. М.; СПб.: Нестор-История, 2018.
                    </li>
                    <li>
                      Граник Г.Г., Концевая Л.А., Миронова К.В. А.С. Пушкин, его
                      друзья и современники: учебное пособие по литературе для
                      учащихся 7-9 классов общеобразовательных организаций. М.:
                      Мнемозина, 2019.
                    </li>
                  </ol>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </CardBody>
      </Card>
    </main>
  );
}

export default Granik;
