import { useRef } from 'react';
import '../Research.scss';
import '../../../../App.css';
import {
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import grade5 from '../../assets/grade5.webp';
import grade6 from '../../assets/grade6.webp';
import grade7 from '../../assets/grade7.webp';
import grade8 from '../../assets/grade8.webp';
import grade9 from '../../assets/grade9.webp';

function SecondarySchool() {
  const textbooksRef = useRef(null);

  // Function to scroll to the Accordion section smoothly
  const scrollToTextbooks = () => {
    if (textbooksRef.current) {
      textbooksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='research'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='unstyled'
      >
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <Heading className='research-card-heading'>
                Учебники «Русский язык. 5-9 классы» под общ. ред. акад. РАО Г.Г.
                Граник
              </Heading>
              {/* A button to trigger the smooth scroll */}
              <Button
                onClick={scrollToTextbooks}
                className='scroll-button'
                fontSize={{
                  base: '0.9rem',
                  md: '1rem',
                  xl: '1.1rem',
                }}
                _hover={{ bg: '#C4EAA5' }}
              >
                Перейти к учебникам
              </Button>
            </div>
            <Box>
              {[
                'Учебники для 5-9 классов (обновленная редакция УМК 2021 г.) соответствуют ФГОС третьего поколения и новой Примерной рабочей программе по русскому языку.',
                'Предлагаемый курс имеет ряд существенных особенностей. Это учебники нового типа, созданные на психолого-дидактическом фундаменте. Они не только сообщают школьникам новые знания, но и развивают мышление, память, воображение, самые разные способности, побуждая детей всё время работать активно.',
                'Учебники под ред. Г.Г. Граник решают одну из главных задач обучения – пробуждение у учащихся любви и интереса к школьному предмету «русский язык». Известно, что русский язык у большинства детей относится к числу самых нелюбимых и ассоциируется с такими понятиями, как скука, тоска, нудно, ошибки и т.п. Созданные учебники – это учебники, написанные для ученика, по ним детям хочется учиться и интересно учиться. Они разговаривают с учеником-читателем, беседуют с ним, помогают усвоить учебный материал с помощью различных подсказок, ответов-ключей к большинству заданий (ответы, как и справочные материалы, помещены в отдельной части учебника).',
                'В основе программы лежит текстоцентрический принцип, предполагающий, что главной дидактической единицей обучения языку является текст. Учебные, художественные и познавательные тексты позволяют решать не только традиционные задачи (закрепление грамматических, орфографических и пунктуационных умений и навыков, развитие устной и письменной речи), но и новые (формирование умений чтения и понимания текста, решение проблемы воспитания читателя, приобщение к чтению лучших произведений отечественной и мировой литературы). Так, в учебнике 5-го класса используются тексты из «Маленького принца» А. Сент-Экзюпери, «Алисы в Стране чудес» Л. Кэрролла, «Песни о Гайавате» Г. Лонгфелло; включены произведения из круга детского чтения (рассказы и повести В. Железникова, Ю. Коваля, Т. Крюковой, Ю. Яковлева, стихи Р. Сефа, Г. Сапгира, А. Усачева, Т. Собакина и др.).',
                'Обучение на текстовой основе позволило решить еще одну проблему современного образования – проблему понимания текста. Учебники нового типа не только насыщены текстами разных видов, стилей и жанров, впервые в сами учебники заложено обучение приемам работы с текстом: работа с заголовком, вычерпывание информации из каждого слова, словосочетания, предложения, диалог с текстом, задания на прогнозирование и т. п. В процессе овладения приемами понимания формируются универсальные учебные действия, необходимые при работе с любым текстом и на любых уроках, а не только на уроках русского языка. Таким образом, обучение чтению и пониманию носит метапредметный характер и реализует одно из основных требований нового ФГОС.',
                'Учебник нового типа потребовал создания особой формы изложения, которую мы назвали «устной речью в ее письменной форме». Такая речь предполагает, что на бумаге звучат голоса авторов учебника, доброжелательных, понимающих и уважающих ученика. Учебный текст, написанный языком «образной грамматики», гораздо лучше усваивается и запоминается детьми. Примерами «образной грамматики» являются предложения-«гуси» и предложения-«матрешки», синтаксические «карлики» и «великаны», «звуки-волшебники», «ошибкоопасное место» и мн. др.; образные названия глав и параграфов в 5-м классе («В книжном лабиринте, или Как работать с оглавлением», «Речь, которая звучит, и речь, которая молчит», «Буквы-актёры е, ё, ю, я», «“Пересаженные” корни», «Приставки-труженицы»).',
                'Из лингвистических особенностей курса прежде всего отметим следующие:',
                'построение учебников на синтаксической основе. Синтаксис и пунктуация изучаются во всех классах, а не только в 5-м и 8–9-х классах, это, в свою очередь, обеспечивает лингвистическое, речевое и интеллектуальное развитие личности учащихся;',
                'изучение орфографии на основе фонемного принципа. Фонема вводится по следующим основаниям: во-первых, знакомство с понятием фонемы позволяет развивать лингвистическое мышление учащихся, различать единицы языка и речи; во-вторых, имеет практическую направленность: большинство правил, изучаемых в школе, фонемные. Фонемный принцип позволяет проверить около 80% всех орфографических трудностей в нашем языке. На нем основано «главное правило», регулирующее правописание проверяемых безударных гласных в корне, проверяемых согласных в корне, гласных и согласных в неизменяемых приставках и др. Но так как фонема «живет» в морфеме, сам принцип правильнее назвать фонемно-морфемным («фонема в слабой позиции проверяется сильной позицией в пределах одной и той же морфемы»).',
                'Ярким примером в этом отношении является учебник 5-го класса. Фонемно-морфемный принцип определяет его структуру: в нем две основные части и соответственно рассматриваются две единицы языка – фонема и морфема. Основу первой части учебника 5-го класса (после изучения синтаксиса и пунктуации) составляет систематический курс фонетики, графики и орфографии с включением глав, посвященных фонеме и фонемным/нефонемным правилам. Большое внимание уделяется истории письменности (глава «Дорога к письменности», цель которой – показать неразрывную связь языка и истории, обогащение культурного фонда учащихся).',
                'Во второй части, основой которой являются морфемика, лексика и орфография, дается общее понятие о составе слова, подробно рассматриваются корень и приставка, изучаются фонемные и нефонемные правила их написания.',
                'В результате обучения по учебникам Г.Г. Граник, как показывает мониторинг обученности и психологического состояния учащихся, достигаются качественно новые результаты обучения, включая лингвистическое и общее интеллектуальное развитие, а русский язык становится у детей одним из любимых школьных предметов.',
              ].map((text, index) => (
                <Text key={index} className='research-card-text'>
                  {text}
                </Text>
              ))}
              <Text className='research-card-text'>
                Из <b>лингвистических особенностей</b> курса прежде всего
                отметим следующие:
                <ul>
                  <li>
                    построение учебников на синтаксической основе. Синтаксис и
                    пунктуация изучаются во всех классах, а не только в 5-м и
                    8–9-х классах, это, в свою очередь, обеспечивает
                    лингвистическое, речевое и интеллектуальное развитие
                    личности учащихся;
                  </li>
                  <li>
                    изучение орфографии на основе фонемного принципа. Фонема
                    вводится по следующим основаниям: во-первых, знакомство с
                    понятием фонемы позволяет развивать лингвистическое мышление
                    учащихся, различать единицы языка и речи; во-вторых, имеет
                    практическую направленность: большинство правил, изучаемых в
                    школе, фонемные. Фонемный принцип позволяет проверить около
                    80% всех орфографических трудностей в нашем языке. На нем
                    основано «главное правило», регулирующее правописание
                    проверяемых безударных гласных в корне, проверяемых
                    согласных в корне, гласных и согласных в неизменяемых
                    приставках и др. Но так как фонема «живет» в морфеме, сам
                    принцип правильнее назвать фонемно-морфемным («фонема в
                    слабой позиции проверяется сильной позицией в пределах одной
                    и той же морфемы»).
                  </li>
                </ul>
              </Text>
              {[
                'Ярким примером в этом отношении является учебник 5-го класса. Фонемно-морфемный принцип определяет его структуру: в нем две основные части и соответственно рассматриваются две единицы языка – фонема и морфема. Основу первой части учебника 5-го класса (после изучения синтаксиса и пунктуации) составляет систематический курс фонетики, графики и орфографии с включением глав, посвященных фонеме и фонемным/нефонемным правилам. Большое внимание уделяется истории письменности (глава «Дорога к письменности», цель которой – показать неразрывную связь языка и истории, обогащение культурного фонда учащихся).',
                'Во второй части, основой которой являются морфемика, лексика и орфография, дается общее понятие о составе слова, подробно рассматриваются корень и приставка, изучаются фонемные и нефонемные правила их написания.',
                'В результате обучения по учебникам Г.Г. Граник, как показывает мониторинг обученности и психологического состояния учащихся, достигаются качественно новые результаты обучения, включая лингвистическое и общее интеллектуальное развитие, а русский язык становится у детей одним из любимых школьных предметов.',
              ].map((text, index) => (
                <Text key={index} className='research-card-text'>
                  {text}
                </Text>
              ))}
            </Box>
            <div ref={textbooksRef}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      className='research-accordion-button'
                    >
                      5-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '150px',
                        sm: '170px',
                        md: '200px',
                        lg: '230px',
                        xl: '260px',
                      }}
                      objectFit='contain'
                      src={grade5}
                      alt='Учебник 5-го класса'
                    />
                    <Text className='research-accordion-text'>
                      <b>
                        Русский язык. 5 класс: учебник для общеобразовательных
                        организаций. В 3 ч. / Г.Г. Граник, Н.А. Борисенко, С. М.
                        Бондаренко, С. В. Шишкова; под общ. ред. Г. Г. Граник.
                        8-е изд., перераб. М.: Мнемозина, 2023.
                      </b>
                    </Text>
                    <Text className='research-accordion-text'>
                      Учебник входит в УМК, реализующий идею преемственности
                      образования с 1-го по 9-й класс и обеспечивающий
                      достижение главной цели изучения русского языка —
                      воспитание культурного человека, свободно владеющего
                      грамотной устной и письменной речью.
                    </Text>
                    <Text className='research-accordion-text'>
                      Фундаментом курса, ориентированного на формирование
                      устойчивого познавательного интереса и позволяющего
                      привить осознанную любовь к изучаемому предмету, является
                      синтаксис. Другие разделы лингвистики даются на его
                      основе. Раздел «Синтаксис и пунктуация» включает
                      повторение изученного в начальной школе о простом
                      предложении и новые темы (простые и сложные предложения,
                      виды сложных предложений, графический разбор предложения,
                      сложные предложения-«гуси» и сложные
                      предложения-«матрешки» и др.). Кроме синтаксиса, часть 1
                      учебника содержит систематический курс фонетики, графики и
                      орфографии. В части 2, посвященной морфемике и орфографии,
                      дается общее понятие о составе слова, о смысловых или
                      грамматических функциях морфем. Подробно рассматривается
                      корень, изучаются правила написания корней и приставок.
                      Часть 3 содержит словарики разных типов и ответы к
                      заданиям из первой и второй частей учебника.
                    </Text>
                    <Text className='research-accordion-text'>
                      Содержание учебника соответствует требованиям ФГОС 2021
                      г., Примерной основной образовательной программы ООО,
                      Примерной рабочей программы ООО «Русский язык» и
                      направлено на реализацию Концепции преподавания русского
                      языка и литературы в РФ.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      className='research-accordion-button'
                    >
                      6-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '100px',
                        sm: '120px',
                        md: '140px',
                        lg: '170px',
                        xl: '200px',
                      }}
                      objectFit='contain'
                      src={grade6}
                      alt='Учебник 6-го класса'
                    />
                    <Text className='research-accordion-text'>
                      <b>
                        Русский язык. 6 класс: учебник для общеобразовательных
                        организаций. В 3 ч. / Г.Г. Граник, Н.А. Борисенко, Г.Н.
                        Владимирская, С.М. Бондаренко; под общ. ред. Г. Г.
                        Граник. 6-е изд., перераб. М.: Мнемозина, 2023.
                      </b>
                    </Text>
                    <Text className='research-accordion-text'>
                      Учебник входит в УМК, реализующий идею преемственности
                      образования с 1-го по 9-й класс и обеспечивающий
                      достижение главной цели изучения русского языка —
                      воспитание культурного человека, свободно владеющего
                      грамотной устной и письменной речью. Первая часть учебника
                      содержит повторение основного материала курса 5-го класса;
                      подробно изучаются словообразование, лексика и
                      фразеология, морфология (глагол и имя существительное). Во
                      второй части рассматриваются имя прилагательное, имя
                      числительное, местоимение; на новом витке спирали
                      изучается синтаксис (понятие о предложении, главные члены,
                      включая виды сказуемого и подлежащего, второстепенные
                      члены). Часть 3 содержит словарики разных типов и ответы к
                      заданиям из первой и второй частей учебника.
                    </Text>
                    <Text className='research-accordion-text'>
                      Содержание учебника соответствует требованиям ФГОС,
                      Примерной основной образовательной программы ООО и
                      направлено на реализацию Концепции преподавания русского
                      языка и литературы в РФ.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      className='research-accordion-button'
                    >
                      7-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '100px',
                        sm: '120px',
                        md: '140px',
                        lg: '170px',
                        xl: '200px',
                      }}
                      objectFit='contain'
                      src={grade7}
                      alt='Учебник 7-го класса'
                    />
                    <Text className='research-accordion-text'>
                      <b>
                        Русский язык. 7 класс: учебник для общеобразовательных
                        организаций. В 3 ч. / Г.Г. Граник, Н.А. Борисенко, Г.Н.
                        Владимирская; под общ. ред. Г. Г. Граник. 4-е изд. М.:
                        Мнемозина, 2017.
                      </b>
                    </Text>
                    <Text className='research-accordion-text'>
                      Учебник входит в новый УМК, реализующий идею
                      преемственности образования с 1-го по 9-й класс и
                      обеспечивающий достижение главной цели изучения русского
                      языка - воспитание культурного человека, свободно
                      владеющего грамотной устной и письменной речью. Первая
                      часть учебника содержит сведения о тексте, стилях речи;
                      двусоставных и односоставных, полных и неполных
                      предложениях. Рассматриваются также слова, грамматически
                      не связанные с предложением (обращения, междометия,
                      слова-предложения да и нет, вводные слова, словосочетания
                      и предложения). Начинается изучение такой самостоятельной
                      части речи, как наречие. Во второй части учебника
                      рассматриваются глагольные формы: деепричастие и
                      причастие. Изучение морфологии органически переплетено с
                      синтаксисом и пунктуацией: вводится понятие обособления,
                      формируется представление об обособленных членах
                      предложения (обстоятельствах, определениях, приложениях).
                      Третья часть содержит словарики разных типов и ответы к
                      заданиям из первой и второй частей учебника.
                    </Text>
                    <Text className='research-accordion-text'>
                      Содержание учебника соответствует требованиям ФГОС,
                      Примерной основной образовательной программы ООО и
                      направлено на реализацию Концепции преподавания русского
                      языка и литературы в РФ.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      className='research-accordion-button'
                    >
                      8-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '100px',
                        sm: '120px',
                        md: '140px',
                        lg: '170px',
                        xl: '200px',
                      }}
                      objectFit='contain'
                      src={grade8}
                      alt='Учебник 8-го класса'
                    />
                    <Text className='research-accordion-text'>
                      <b>
                        Русский язык. 8 класс: учебник для общеобразовательных
                        организаций. В 3 ч. / Г.Г. Граник, Н.А. Борисенко, Г.Н.
                        Владимирская; под общ. ред. Г. Г. Граник. 3-е изд. М.:
                        Мнемозина, 2013.
                      </b>
                    </Text>
                    <Text className='research-accordion-text'>
                      Учебник входит в новый УМК, реализующий идею
                      преемственности образования с 1-го по 9-й класс и
                      обеспечивающий достижение главной цели изучения русского
                      языка - воспитание культурного человека, свободно
                      владеющего грамотной устной и письменной речью. Первая
                      часть учебника содержит повторение по теме «Осложненное
                      предложение», затем подробно изучаются служебные части
                      речи: предлог, союз, частица, их правописание и
                      употребление. Вторая часть посвящена синтаксису и
                      пунктуации, в том числе (в этом состоит одна из
                      особенностей курса Г.Г. Граник) сложному предложению
                      (сложносочиненное предложение, сложноподчиненное
                      предложение, сложное предложение с разными видами связи).
                      Изучение данного раздела в 8-м классе обеспечивает раннюю
                      подготовку к ОГЭ и высвобождает время для повторения и
                      обобщения изученных ранее тем в 9-м классе. Часть третья
                      содержит словарики разных типов и ответы к заданиям из
                      первой и второй частей учебника.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      className='research-accordion-button'
                    >
                      9-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '100px',
                        sm: '130px',
                        md: '160px',
                        lg: '180px',
                        xl: '210px',
                      }}
                      objectFit='contain'
                      src={grade9}
                      alt='Учебник 9-го класса'
                    />
                    <Text className='research-accordion-text'>
                      <b>
                        Русский язык. 9 класс: учебник для общеобразовательных
                        организаций. В 2 ч. / Г.Г. Граник, Н.А. Борисенко, Г.Н.
                        Владимирская; под общ. ред. Г. Г. Граник. М.: Мнемозина,
                        2013.
                      </b>
                    </Text>
                    <Text className='research-accordion-text'>
                      Данный учебник — заключительная часть предметной линии под
                      редакцией Г. Г. Граник. Основное содержание учебника
                      составляет изучение сложного предложения. Учебник также
                      содержит главы «Общие сведения о русском языке», «Текст,
                      речеведение, культура речи». Объемный блок повторения
                      включает материал по всем разделам науки о русском языке,
                      тексты для изложений, тренировочные задания и тесты,
                      направленные на подготовку к ОГЭ. Текстоцентрический
                      принцип, лежащий в основе учебника, позволяет
                      систематически работать над пониманием текста, развитием
                      воображения и творческих способностей учащихся. Вторая
                      часть содержит словарики разных типов и ответы к заданиям.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default SecondarySchool;
