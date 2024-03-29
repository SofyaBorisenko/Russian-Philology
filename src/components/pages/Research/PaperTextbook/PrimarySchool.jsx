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
  Link,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import grade1 from '../../assets/grade1.webp';
import grade2 from '../../assets/grade2.webp';
import grade3 from '../../assets/grade3.webp';
import grade4 from '../../assets/grade4.webp';

function PrimarySchool() {
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
                Учебники «Русский язык. 1-4 классы» под ред. акад. РАО Г.Г.
                Граник, В.В. Рубцова
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
                _hover={{
                  bg: '#C4EAA5',
                }}
              >
                Перейти к учебникам
              </Button>
            </div>
            <Box>
              <Text className='research-card-text'>
                Комплект учебников по русскому языку для учащихся начальной
                школы входит в единый, целостный курс русского языка с 1-го по
                9-й класс, состоящий из двух ступеней: 1—4-й классы, 5—9-й
                классы (науч. руков. –{' '}
                <Link color='#43129B' href='/teachers/#Granik'>
                  Г.Г. Граник
                </Link>
                ), реализующий идею непрерывного и преемственного образования и
                соответствующий требованиям ФГОС нового поколения. Предлагаемый
                учебный комплект создан на основе синтеза ряда наук: современной
                лингвистики, психодидактики, общей психологии, возрастной
                физиологии, логики, методики, обслуживающей разработанную
                целостную концепцию. В методическом аппарате учебников нашли
                отражение как авторские инновационные разработки, так и
                традиционные приемы обучения, доказавшие свою эффективность в
                педагогической практике. Кроме учебников, в УМК входят
                методические пособия для учителей, а для учеников – «Спутники
                учебника», содержащие дополнительный тренировочный материал.
              </Text>
              <Text className='research-card-text'>
                Главными <b>целями</b> обучения русскому языку, согласно
                концепции авторов, являются:
                <br />
                <ul>
                  <li>
                    пробуждение у младших школьников осознанной любви к предмету
                    «Русский язык»;
                  </li>
                  <li>
                    воспитание культурного человека, владеющего грамотной устной
                    и письменной речью;
                  </li>
                  <li>
                    формирование основ научных знаний о языке, первичных
                    представлений о лингвистических понятиях и законах
                    лингвистики;
                  </li>
                  <li>
                    совершенствование читательской культуры, предусматривающей
                    овладение приемами понимания художественных и познавательных
                    текстов.
                  </li>
                </ul>
              </Text>
              <Text className='research-card-text'>
                Реализация обозначенных целей способствует духовно-нравственному
                развитию учащихся, а также решению одной из важнейших и
                социально значимых задач: сделать изучение русского языка
                средством сохранения самобытности и культуры нации. Это явится
                основой формирования у школьников чувства патриотизма.
              </Text>
              <Text className='research-card-text'>
                Приоритетность вышеназванных целей обусловлена необходимостью
                решения острых проблем, стоящих как перед современной школой в
                целом, так и перед учителем русского языка в частности.
              </Text>
              <Text className='research-card-text'>
                Русский язык, будучи одним из важнейших предметов в системе
                общего образования, тем не менее остается одним из самых
                нелюбимых. Об этом свидетельствуют и наблюдения педагогов, и
                исследования ученых. Вместе с тем очевидно, что без пробуждения
                у школьников любви к предмету нельзя решить ни одну из основных
                задач обучения. Преодолеть трудности изучения русского языка
                можно только путем формирования положительного отношения к
                учению, выработки устойчивой мотивации. Наиболее действенным из
                всех мотивов для школьников является познавательный интерес,
                который, как показали исследования, теснейшим образом связан со
                всеми сторонами личности ученика. Познавательный интерес не
                только обеспечивает высокий уровень внимания, понимания и
                запоминания, но и является необходимым условием для того, чтобы
                изучаемый материал становился не просто суммой знаний, а входил
                в содержание духовного мира человека. С этой целью в данном УМК
                предусмотрены различные возможности как для возбуждения
                познавательного интереса, так и для его постоянного поддержания.
                Следует отметить, что без познавательного интереса трудно решить
                и одну из основных проблем современного образования — проблему
                понимания текста.
              </Text>
              <Text className='research-card-text'>
                В учебники данного курса включена систематическая работа по
                овладению школьниками приемами понимания текста (учебного,
                познавательного и художественного). Для решения проблемы
                понимания в учебники включен материал, обеспечивающий
                формирование таких процессов и феноменов, как мыслительные
                операции сравнения, воссоздающее воображение, непроизвольное и
                произвольное запоминание, самоконтроль. Осознанному усвоению
                изучаемого предмета способствует и варьирование тренировочного
                материала.
              </Text>
              <Text className='research-card-text'>
                Отличительной чертой УМК является особая <b>структура курса</b>.
                В работах психологов было показано: последовательность введения
                изучаемых тем обязательно должна учитывать психологию усвоения
                предмета. Результаты этих исследований нашли отражение в
                структуре разработанного курса, логику которой можно представить
                в виде следующей обобщенной схемы: текст и живая речь на уроке —
                предложение — слово и его составляющие (морфема — звук —
                фонема), а также обслуживающие их орфографические и
                пунктуационные правила.
              </Text>
              <Text className='research-card-text'>
                Учебно-методический комплект для каждого класса включает в себя:
                <br />
                <ul>
                  <li>учебник;</li>
                  <li>методическое пособие для учителя;</li>
                  <li>пособия для учащихся.</li>
                </ul>
              </Text>
              <Text className='research-card-text'>
                <b>Учебники издательства «Мнемозина»:</b>
                <br />
                <ol>
                  <li>
                    <i>
                      Граник Г. Г., Крюкова Т. Ш., Анофриева Н. Ф., Шишкова С.
                      В.
                    </i>{' '}
                    Русский язык. 1 класс / под общ. ред. Г. Г. Граник, В. В.
                    Рубцова.
                  </li>
                  <li>
                    <i>Граник Г. Г., Гвинджилия О. В.</i> Русский язык. 2 класс.
                    В 2 ч. / под общ. ред. Г. Г. Граник, В. В. Рубцова.
                  </li>
                  <li>
                    <i>
                      Граник Г. Г., Кантаровская О. З., Токмакова И. П., Шишкова
                      С. В.
                    </i>{' '}
                    Русский язык. 3 класс. В 3 кн. / под общ. ред. Г. Г. Граник,
                    В. В. Рубцова.
                  </li>
                  <li>
                    <i>
                      Граник Г. Г., Кантаровская О. З., Токмакова И. П., Шишкова
                      С. В.
                    </i>{' '}
                    Русский язык. 4 класс. В 3 кн. / под общ. ред. Г. Г. Граник,
                    В. В. Рубцова.
                  </li>
                </ol>
              </Text>
              <Text className='research-card-text'>
                <b>Методические пособия для учителя:</b>
                <br />
                <ol>
                  <li>
                    <i>Гвинджилия О. В., Иванова С. В.</i> Русский язык. 1
                    класс. Методические рекомендации к учебнику Г. Г. Граник, Т.
                    Ш. Крюковой, Н. Ф. Анофриевой, С. В. Шишковой «Русский язык.
                    1 класс» / под общ. ред. Г. Г. Граник.
                  </li>
                  <li>
                    <i>Граник Г. Г., Гвинджилия О. В.</i> Русский язык. 2 класс.
                    Методические рекомендации к учебнику Г. Г. Граник, О. В.
                    Гвинджилии «Русский язык. 2 класс» / под общ. ред. Г. Г.
                    Граник.
                  </li>
                  <li>
                    <i>Каганер И. В., Шишкова С. В.</i> Русский язык. 3 класс.
                    Методические рекомендации к учебнику Г. Г. Граник, О.З.
                    Кантаровской, И. П. Токмаковой, С. В. Шишковой «Русский
                    язык. 3 класс» / под общ. ред. Г. Г. Граник.
                  </li>
                  <li>
                    <i>Шишкова С. В.</i> Русский язык. 4 класс. Методические
                    рекомендации к учебнику Г. Г. Граник, О. З. Кантаровской, И.
                    П. Токмаковой, С. В. Шишковой «Русский язык. 4 класс» / под
                    общ. ред. Г. Г. Граник.
                  </li>
                </ol>
              </Text>
              <Text className='research-card-text'>
                <b>Пособия для учащихся:</b>
                <br />
                Сборники дополнительных тренировочных материалов «Спутник
                учебника».
                <br />
                <ol>
                  <li>
                    <i>Гвинджилия О.В.</i> «Спутник учебника. 2 класс».
                  </li>
                  <li>
                    <i>Гвинджилия О.В.</i> «Спутник учебника. 3 класс».
                  </li>
                  <li>
                    <i>Гвинджилия О.В.</i> «Спутник учебника. 4 класс».
                  </li>
                </ol>
              </Text>
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
                      1-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '90px',
                        sm: '110px',
                        md: '130px',
                        lg: '160px',
                        xl: '180px',
                      }}
                      objectFit='contain'
                      src={grade1}
                      alt='Учебник 1-го класса'
                    />
                    <Text className='research-accordion-text'>
                      Уроки русского языка в 1-м классе крайне важны, так как
                      именно они создают предпосылки для успешного освоения
                      предмета на протяжении всех лет обучения в школе.
                    </Text>
                    <Text className='research-accordion-text'>
                      Синтаксическую основу курса закладывает раздел «Текст.
                      Предложение». Первоклассники активизируют и углубляют
                      знания об этих единицах, полученные в курсе «Обучение
                      грамоте», подробно рассматривают, каким образом
                      оформляется предложение на письме (прописная буква в
                      начале предложения, знаки конца предложения — точка,
                      вопросительный и восклицательный знаки).
                    </Text>
                    <Text className='research-accordion-text'>
                      Второй раздел курса «Слово» призван познакомить учащихся с
                      понятием «родственные слова». Основные задачи —
                      сформировать умения опознавать их среди других слов, в
                      предложении и тексте, разграничивать родственные слова и
                      слова с омонимичными корнями (без введения термина{' '}
                      <i>омонимия</i>), выделять в родственных словах общее
                      буквосочетание. С термином <i>корень слова</i> школьники
                      познакомятся во 2-м классе, но уже сейчас закладывается
                      прочная основа, без которой невозможно овладеть самой
                      частотной орфограммой русского языка — правописанием
                      проверяемых безударных гласных. При этом языковые единицы,
                      категории, имеющие в своем содержании нечто общее, в 1-м
                      классе, как и во всем курсе, рассматриваются параллельно,
                      путем сопоставления и выявления сходства и различий (в
                      учебниках такие параграфы называются «Что с чем нельзя
                      путать»). К примеру, после изучения параграфа о
                      родственных словах органично вводятся сведения о
                      синонимах, а в дальнейшем — об обобщающих словах. Такой
                      подход не только позволяет совершенствовать мыслительные
                      операции сравнения, но и способствует формированию и
                      развитию умения разграничивать языковые явления,
                      предупреждая возникновение ошибок при дальнейшем освоении
                      предмета.
                    </Text>
                    <Text className='research-accordion-text'>
                      Изучая данный раздел, учащиеся вырабатывают представление
                      об «ошибкоопасных» местах в слове, знакомятся с термином{' '}
                      <i>орфограмма</i>. Таким образом подготавливается
                      последующее введение ряда орфографических правил.
                    </Text>
                    <Text className='research-accordion-text'>
                      К усвоению следующего раздела — «Звуки, буквы и
                      буквосочетания» — первоклассники во многом подготовлены
                      курсом «Обучение грамоте», в рамках которого велась
                      серьезная работа по развитию умения различать звуки и
                      буквы, давать характеристики гласным и согласным звукам,
                      проводить звуковой анализ слов. На новом витке спирали эти
                      знания актуализируются, на их основе организуется усвоение
                      орфографических правил, так или иначе связанных с
                      фонетическими процессами русского языка: правописание
                      парных по глухости-звонкости согласных на конце и в
                      середине слова, правописание фонемных
                      буквосочетаний-блоков:{' '}
                      <i>чк, чн, щн, жи — ши, ча — ща, чу — щу</i>. Также
                      рассматривается правописание исторических
                      буквосочетаний-блоков и неполногласных сочетаний).
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
                      2-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '110px',
                        sm: '140px',
                        md: '170px',
                        lg: '190px',
                        xl: '220px',
                      }}
                      objectFit='contain'
                      src={grade2}
                      alt='Учебник 2-го класса'
                    />
                    <Text className='research-accordion-text'>
                      В связи с тем, что на изучение русского языка в 1-м классе
                      отведено всего 10 недель, в начале 2-го класса большое
                      внимание уделяется повторению, хотя уже в этот раздел
                      вводится и новый лингвистический материал, который дается
                      в сопоставлении с уже известными второклассникам
                      сведениями. Так, актуализируя знания о синонимах, ученики
                      узнают об антонимах. Большое значение придается обобщению
                      орфографических тем, в том числе правописанию фонемных и
                      исторических буквосочетаний-блоков.
                    </Text>
                    <Text className='research-accordion-text'>
                      Новый раздел курса посвящен вопросам, на которые могут
                      отвечать слова. Рассматриваются вопросы глаголов,
                      существительных и прилагательных, их общее грамматическое
                      значение. При этом понятие о частях речи и соответствующие
                      термины не вводятся, так как второклассники еще не готовы
                      к полноценному усвоению такого материала. В данный период
                      в соответствии с принципом поэтапного обучения необходимо
                      сконцентрироваться на выработке у школьников умения
                      задавать вопросы к словам, — как показывает практика,
                      одного из самых трудных для учащихся. Его
                      несформированность будет негативно сказываться не только в
                      начальной, но и в средней школе. Если ученики не овладеют
                      умением правильно ставить вопросы, то это приведет к
                      возникновению следующих проблем: неразличение членов
                      предложения, видов сложных предложений, обособленных
                      второстепенных членов предложения и т. д. И хотя во 2-м
                      классе рассматриваются лишь вопросы, задаваемые к словам
                      (основные), психологический механизм переноса поможет в
                      дальнейшем формированию умения ставить вопросы к различным
                      единицам языка.
                    </Text>
                    <Text className='research-accordion-text'>
                      В следующем разделе курса изучается строение слова
                      (корень, окончание, приставка, суффикс) и некоторые
                      орфографические правила, регулирующие написание этих
                      морфем. Особое внимание уделяется проверяемым безударным
                      гласным в корне: учащиеся поэтапно овладевают разными
                      способами подбора проверочного слова.
                    </Text>
                    <Text className='research-accordion-text'>
                      Обратим внимание, что после освоения тем «Приставка»,
                      «Правописание приставок» предполагается знакомство с
                      предлогами. Такое «отступление» от основной темы раздела
                      не случайно. Сопоставление предлогов и приставок позволяет
                      второклассникам научиться их различать и грамотно
                      оформлять на письме.
                    </Text>
                    <Text className='research-accordion-text'>
                      Затем даются новые орфографические правила: правописание
                      удвоенных согласных, правописание непроизносимых
                      согласных.
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
                      3-й класс
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
                      src={grade3}
                      alt='Учебник 3-го класса'
                    />
                    <Text className='research-accordion-text'>
                      В начале курса третьеклассники знакомятся с правилами,
                      которые люди соблюдают в речи, чтобы понимать друг друга,
                      узнают об отличии языка от речи и о том, что такое
                      синтаксис и пунктуация.
                    </Text>
                    <Text className='research-accordion-text'>
                      Ключевые синтаксические понятия курса 3-го класса —
                      сказуемое и подлежащее. Учащиеся овладевают сведениями о
                      грамматической основе, учатся выделять ее в предложении.
                      Знакомство с второстепенными членами — дополнениями,
                      определениями, обстоятельствами — во многом имеет
                      пропедевтический характер. На данном этапе необходимо
                      сформировать умение разграничивать главные и
                      второстепенные члены предложения. А способность
                      безошибочно дифференцировать второстепенные члены
                      приобретет острую актуальность лишь в средней школе.
                    </Text>
                    <Text className='research-accordion-text'>
                      После того как учащиеся познакомились со сказуемым, дается
                      обширная морфологическая тема «Глагол», в рамках которой
                      рассматриваются неопределенная форма глагола, изменение
                      глаголов по наклонениям и временам (в изъявительном
                      наклонении), спряжение глаголов, а также организуется
                      освоение орфографических правил: правописание{' '}
                      <i>-тся, -ться</i>, правописание <i>ь</i> после шипящих в
                      глаголах, правописание <i>не</i> с глаголами, правописание
                      безударных личных окончаний глаголов и некоторых других.
                    </Text>
                    <Text className='research-accordion-text'>
                      Таким же образом — на синтаксическом фундаменте — вводится
                      и вторая морфологическая тема курса «Имя существительное».
                      Получив представление о подлежащем, ученики овладевают
                      сведениями о морфологических признаках существительного
                      (собственное или нарицательное, одушевленное или
                      неодушевленное, род, склонение, число, падеж),
                      вырабатывают навыки правописания безударных окончаний
                      существительных всех трех склонений, ь после шипящих в
                      существительных.
                    </Text>
                    <Text className='research-accordion-text'>
                      Анализируя, каким образом соединяются члены предложения
                      между собой, третьеклассники узнают о сочинительной и
                      подчинительной связи. В 3-м классе в центре внимания
                      находится сочинительная связь, так как формируются
                      представления об однородных членах предложения. Виды
                      подчинительной связи станет объектом рассмотрения в 4-м
                      классе. Освоение темы «Однородные члены предложения»
                      закономерно требует знакомства с сочинительными союзами. С
                      помощью инструкции третьеклассники вырабатывают умение
                      правильно расставлять знаки препинания в предложениях с
                      однородными членами (соединенными бессоюзной связью,
                      одиночными и повторяющимися союзами).
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
                      4-й класс
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Image
                      align={'top'}
                      float={'left'}
                      marginRight={{ base: 3, sm: 4, md: '5', xl: '6' }}
                      maxW={{
                        base: '110px',
                        sm: '140px',
                        md: '170px',
                        lg: '190px',
                        xl: '220px',
                      }}
                      objectFit='contain'
                      src={grade4}
                      alt='Учебник 4-го класса'
                    />
                    <Text className='research-accordion-text'>
                      В начале года повторяется изученный в 3-м классе материал
                      о видах синтаксической связи, пунктуационном оформлении
                      предложений с однородными членами. При этом происходит
                      углубление знаний: учащиеся знакомятся с правилами
                      постановки знаков препинания при однородных членах
                      предложения с обобщающими словами.
                    </Text>
                    <Text className='research-accordion-text'>
                      Новый раздел курса призван существенно расширить
                      представления школьников о подчинительной связи. Ученики
                      знакомятся с управлением, согласованием и примыканием.
                      Изучение морфологии и орфографии организуется в тесном
                      единстве с синтаксисом: рассматривается тип подчинительной
                      связи в словосочетании, а затем те части речи, которыми в
                      нем могут быть выражены главное и зависимое слова. При
                      этом овладение новым материалом организуется с опорой на
                      уже имеющиеся у четвероклассников знания. Так, успешность
                      освоения темы «Местоименные существительные»
                      обеспечивается активизацией и углублением знаний об имени
                      существительном, представления о местоименных
                      прилагательных формируются на основе полученных сведений
                      об имени прилагательном и т. п.
                    </Text>
                    <Text className='research-accordion-text'>
                      Знакомство с некоторыми орфографическими правилами в курсе
                      4-го класса носит пропедевтический характер. К ним
                      относятся: правописание местоимений, образованных от
                      вопросительных местоимений с помощью <i>не</i> и <i>ни</i>
                      ; правописание местоимений, образованных от вопросительных
                      местоимений с помощью <i>кое-, -либо, -то, -нибудь</i>;
                      правописание имен числительных (числительные на{' '}
                      <i>-дцатъ, -десят, -сот</i>); правописание наречий. К
                      этому материалу школьники вновь обратятся в средней школе
                      и естественным образом «прирастят» имеющиеся знания и
                      усовершенствуют правописные навыки.
                    </Text>
                    <Text className='research-accordion-text'>
                      На новый уровень овладения русским языком
                      четвероклассников поднимает достаточно подробное изучение
                      типов сложного предложения: сложносочиненного и
                      сложноподчиненного. У детей формируются навыки их
                      различения, умение определять границы и количество частей
                      в сложных предложениях и пунктуационно правильно оформлять
                      такие синтаксические конструкции на письме. При этом в
                      учебниках даются только те предложения, в которых все
                      части являются двусоставными с простыми глагольными
                      сказуемыми. Безусловно, на этом этапе учащиеся овладевают
                      лишь <i>основными</i> сведениями. Но приобретение умения
                      использовать сложные предложения, понимая их смысловые и
                      структурные особенности, является необходимым условием
                      полноценного развития устной и письменной речи младшего
                      школьника, а значит, как было уже отмечено, и полноценного
                      интеллектуального развития.
                    </Text>
                    <Text className='research-accordion-text'>
                      Таким образом, к концу 4-го класса учащиеся обладают
                      достаточно обширной базой знаний о грамматике русского
                      языка, имеют прочные навыки их практического применения в
                      устной и письменной речи, что закладывает основу для
                      успешного освоения предмета в средней школе и оказывает
                      серьезную поддержку школьникам во время сложного
                      адаптационного периода при переходе на новую ступень
                      образования.
                    </Text>
                    <Text className='research-accordion-text'>
                      Кроме новаторского содержания, учебный комплект по
                      русскому языку для начальной школы отличается прекрасном
                      художественным оформлением, красочные иллюстрациями,
                      играющими роль «второго» текста, которые также
                      поддерживают познавательный интерес учащихся к изучению
                      русского языка.
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

export default PrimarySchool;
