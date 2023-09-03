import React, { forwardRef } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import '../Staff.scss';

const Publications = forwardRef((props, ref) => {
  return (
        <article ref={ref}>
            <h2>Публикации</h2>
            <Tabs
            size={'lg'}
            position="relative"
            variant="enclosed"
            >
                <TabList gap={1}>
                <Tab className='pub-type' _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Научные статьи в рецензируемых изданиях</Tab>
                    <Tab className='pub-type' _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Учебные книги <br />и пособия</Tab>
                    <Tab className='pub-type' _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Подразделы в коллективных монографиях</Tab>
                    <Tab className='pub-type' _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Словарные <br />статьи</Tab>
                    <Tab className='pub-type' _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Основные статьи в научных сборниках 2018-2023 гг.</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel padding={0}>
                        <br />
                        <ol>
                            <li>lala.</li>
                            <li>lala.</li>
                        </ol>
                        <br />
                    </TabPanel>
                    <TabPanel padding={0}>
                        <br />
                        <ol>
                            <li>lala.</li>
                        </ol>
                        <br />
                    </TabPanel>
                    <TabPanel padding={0}>
                        <br />
                        <ol>
                            <li>lala.</li>
                        </ol>
                        <br />
                    </TabPanel>
                    <TabPanel padding={0}>
                        <br />
                        <ol>
                            <li>lala.</li>
                        </ol>
                        <br />
                    </TabPanel>
                    <TabPanel padding={0}>
                        <br />
                        <ol>
                            <li>lala.</li>
                        </ol>
                        <br />
                    </TabPanel>
                    <TabPanel padding={0}>
                        <br />
                        <ol>
                            <li>lala.</li>
                        </ol>
                        <br />
                    </TabPanel>
                    <TabPanel padding={0}>
                        <br />
                        <ol>
                            <li>lala.</li>
                        </ol>
                        <br />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </article>
    );
});

export default Publications;