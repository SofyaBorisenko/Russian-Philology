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
            size={{base: 'sm', sm: 'sm', md: 'sm', lg: 'md', xl: 'md', '2xl': 'lg'}}
            position="relative"
            variant="unstyled">
                <TabList gap={1}>
                    <Tab
                    paddingLeft={{md: '0.5rem'}}
                    paddingRight={{md: '0.5rem'}}
                    className='school-tab'
                    _selected={{ color: '#121d47', bg: '#C4EAA5' }}
                    >
                        Начальная школа
                    </Tab>
                    <Tab
                    paddingLeft={{md: '0.5rem'}}
                    paddingRight={{md: '0.5rem'}}
                    className='school-tab'
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