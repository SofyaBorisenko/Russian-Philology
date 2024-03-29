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
import Bondarenko_photo from '../assets/Bondarenko_photo.webp';

function Bondarenko() {
  return (
    <main style={{ marginTop: '1rem' }}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='unstyled'
        marginTop={1}
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
              С.М. Бондаренко
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
                src={Bondarenko_photo}
                alt='С.М. Бондаренко'
              />
              <Text className='card-text'>
                <b>Бондаренко Стелла Морисовна</b> (1931–2008) – российский
                психолог, специалист в области педагогической психологии. Канд.
                психол. наук (1971), лауреат премии им. К.Д. Ушинского (1973),
                премии Правительства РФ в области образования (1997).
                Разрабатывала проблемы познавательного интереса.
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
                    Окончила филологический фак-т Московского гос. университета
                    (1953), преподавала русский язык и литературу в
                    общеобразовательных школах. В 1968 г. поступила в
                    аспирантуру Института психологии АПН РСФСР. Закончив ее,
                    защитила кандидатскую диссертацию «Пути формирования
                    интереса к грамматической деятельности у школьников». С 1971
                    г. по 2004 г. – научный сотрудник ПИ РАО. Выявленные С.М.
                    Бондаренко способы создания познавательного интереса
                    реализованы в учебниках и учебных пособиях нового типа:
                    «Секреты пунктуации» (1986), «Секреты орфографии» (1991),
                    «Речь, язык и секреты пунктуации» (1995) (совм. с Г.Г.
                    Граник и Л.А. Концевой). С.М. Бондаренко создан ряд
                    научно-популярных книг для учителей и родителей, 65
                    радиопередач из циклов «Взрослым о детях» и «Радио для
                    уроков». В книге «Мозг, обучение и здоровье» (1989)
                    рассмотрена связь между здоровьем, активностью личности и
                    методами обучения.
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
                      С.М. Бондаренко, В.С. Ротенберг. Мозг, обучение и
                      здоровье. М., 1989, 2007.{' '}
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
                      Г.Г. Граник, С.М. Бондаренко, Л.А. Концевая. Как учить
                      работать с книгой. М.: НПО «Образование», 1996.{' '}
                    </li>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко, Л.А. Концевая. Дорога к
                      книге. М.: НПО «Образование», 1996.{' '}
                    </li>
                    <li>
                      Граник Г.Г., Шаповал С.А, Бондаренко С.М., Концевая Л.А.
                      Литература. Учимся понимать художественный текст:
                      Задачник-практикум. 8–11 классы / под науч. руков. Г.Г.
                      Граник. М.: НПО «Образование от А до Я», 1999.
                    </li>
                    <li>
                      Г.Г. Граник, С.М. Бондаренко. Знаки препинания. Ч. 1-2.
                      М.: НПО «Образование», 1999.
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

export default Bondarenko;
