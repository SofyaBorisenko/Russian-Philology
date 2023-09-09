import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import '../Research.scss';
import PrimarySchool from './PrimarySchool';
import SecondarySchool from './SecondarySchool';

function PaperTextbook() {
    return (
        <div>
            <Tabs
            isLazy
            position="relative"
            variant="unstyled">
                <TabList gap={1}>
                    <Tab
                    className='school-tab'
                    fontSize={{ base: '0.75rem', sm: '0.8rem', md: '0.9rem', lg: '1rem', xl: '1.1rem' }}
                    _selected={{ color: '#121d47', bg: '#C4EAA5' }}
                    >
                        Начальная школа
                    </Tab>
                    <Tab
                    className='school-tab'
                    fontSize={{ base: '0.75rem', sm: '0.8rem', md: '0.9rem', lg: '1rem', xl: '1.1rem' }}
                    _selected={{ color: '#121d47', bg: '#C4EAA5' }}
                    >
                        Основная школа
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
                        <PrimarySchool />
                    </TabPanel>
                    <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
                        <SecondarySchool />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
        );
    };

    export default PaperTextbook;