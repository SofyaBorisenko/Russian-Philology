import React from 'react';
import '../Research.scss';
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

function PrimarySchool() {
    return (
        <div>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                    <Heading className='card-heading' size='md'>
                        Учебники «Русский язык. 1-4 классы» 
                        под ред. акад. РАО Г.Г. Граник, В.В. Рубцова
                    </Heading>
                    <Box>
                        <Text className='card-text'>
                        Комплект учебников по русскому языку для учащихся начальной школы входит в единый, целостный курс русского языка с 1-го по 9-й класс, состоящий из двух ступеней: 1—4-й классы, 5—9-й классы (науч. руков. – Г.Г. Граник), реализующий идею непрерывного и преемственного образования и соответствующий требованиям ФГОС нового поколения. Предлагаемый учебный комплект создан на основе синтеза ряда наук: современной лингвистики, психодидактики, общей психологии, возрастной физиологии, логики, методики, обслуживающей разработанную целостную концепцию. В методическом аппарате учебников нашли отражение как авторские инновационные разработки, так и традиционные приемы обучения, доказавшие свою эффективность в педагогической практике. Кроме учебников, в УМК входят методические пособия для учителей, а для учеников – «Спутники учебника», содержащие дополнительный тренировочный материал.
                        </Text>
                    </Box>
                    <Accordion defaultIndex={[]} allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' className='accordion-button'>
                                1-й класс
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} >
                            <Text className='accordion-text'>
                                pam pam pam</Text> 
                            <br />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' className='accordion-button'>
                                2-й класс
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                jojojo
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                            <Box as="span" flex='1' className='accordion-button'>
                                3-й класс
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                mememe
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                            <Box as="span" flex='1' className='accordion-button'>
                                4-й класс
                                </Box>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                aoaoaoa
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    </Stack>
                </CardBody>
            </Card>
        </div>
        );
    };

    export default PrimarySchool;