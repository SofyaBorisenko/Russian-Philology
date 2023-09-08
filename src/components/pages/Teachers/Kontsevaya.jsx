import React from 'react';
import './Teachers.scss';
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
    StackDivider,
    Text
    } from '@chakra-ui/react';
    import Kontsevaya_photo from '../assets/Kontsevaya_photo.jpg';

function Kontsevaya() {
    return (
        <main style={{marginTop: '0.5rem'}}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                    <Heading
                    className='card-heading'
                    size={{ base: 'sm', md: 'sm', lg: 'md', '2xl': 'lg' }}
                    >
                        Л.А. Концевая
                    </Heading>
                    <Box>
                        <Image
                            align={'top'}
                            float={'left'}
                            marginRight={{ base: 3, md: 5, '2xl': 6 }}
                            maxW={{ base: '110px', sm: '140px', md: '180px', lg: '200px', '2xl': '210px' }}
                            objectFit='contain'
                            src={Kontsevaya_photo}
                            alt='Л.А. Концевая'
                        />
                        <Text className='card-text'>
                        <b>Концевая Лилия Абрамовна</b> (1931–2021) – российский психолог, 
                        специалист в области педагогической психологии, кандидат 
                        психологических наук (1975), лауреат премии им. К.Д. Ушинского (1973), 
                        премии Правительства РФ в области образования (1997). Основные темы 
                        исследований – изучение психологических особенностей взаимодействия 
                        школьников с книгой, принципов и приемов воспитания читателя, 
                        развития понимания текста, а также разработка психологических 
                        основ и моделей учебных книг нового типа по русской филологии 
                        (в соавт. с Г.Г. Граник).
                        </Text>
                    </Box>
                    <Accordion defaultIndex={[]} allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' className='accordion-button'>
                                Подробнее
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} >
                                <Text className='accordion-text'>
                                Окончила факультет русского языка и литературы Московского областного 
                                педагогического института (1953), преподавала русский язык и 
                                литературу в общеобразовательных школах. С 1968 г. работала в 
                                Институте психологии АПН СССР (ныне – Психологический институт РАО). 
                                В 1975 г. защитила кандидатскую диссертацию «Психологический анализ 
                                самостоятельной работы школьников с учебником».
                                </Text>
                                <Text className='accordion-text'>
                                При участии Л.А. Концевой написаны такие 
                                значимые работы, как «Методические рекомендации авторам книг для 
                                учащихся» (1987), «Как учить школьников работать с учебником» (1987), 
                                «Когда книга учит» (1988), ряд учебных книг серии 
                                «Школьное литературоведение на психологической основе» 
                                (под руков. Г.Г. Граник).
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' className='accordion-button'>
                                Основные работы
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <ol className='accordion-text'>
                                <li>Граник Г.Г., Бондаренко С.М., Концевая Л.А. Когда книга учит. М.: Просвещение, 1988.</li>
                                <li>Граник Г.Г., Бондаренко С.М., Концевая Л.А. Как учить работать с книгой. М.: НПО «Образование», 1995. </li>
                                <li>Граник Г.Г., Бондаренко С.М., Концевая Л.А. Дорога к книге / под науч. руков. Г.Г. Граник. М.: НПО «Образование», 1996. </li>
                                <li>Граник Г.Г., Шаповал С.А, Бондаренко С.М., Концевая Л.А. Литература. Учимся понимать художественный текст: Задачник-практикум. 8–11 классы / под науч. руков. Г.Г. Граник. М.: НПО «Образование от А до Я», 1999.</li>
                                <li>Граник Г.Г., Концевая Л.А. Драматурги, драматургия, театр, 2001.</li>
                                <li>Граник Г.Г., Концевая Л.А. Русская литература: От былин до Крылова, М.: Баласс, 2007.</li>
                                <li>Граник Г.Г., Концевая Л.А., Динерштейн Е.Е., Миронова К.В. Я – другой. М.Ю. Лермонтов. М.: Илекса, 2012. </li>
                                <li>Граник Г.Г., Концевая Л.А. Роман А.С. Пушкина «Евгений Онегин». Читаем, размышляем. М.: Илекса, 2016. </li>
                                <li>Граник Г.Г., Концевая Л.А., Миронова К.В. А.С. Пушкин, его друзья и современники: учебное пособие по литературе для учащихся 7-9 классов общеобразовательных организаций. М.: Мнемозина, 2019. </li>
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

export default Kontsevaya;