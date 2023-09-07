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
            size={'md'}
            position="relative"
            variant="unstyled">
                <TabList gap={1}>
                    <Tab className='school-tab' _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Начальная школа</Tab>
                    <Tab className='school-tab' _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Основная школа</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel style={{ padding: '1rem 0 0 0' }}>
                        <PrimarySchool />
                    </TabPanel>
                    <TabPanel style={{ padding: '1rem 0 0 0' }}>
                        <SecondarySchool />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
        );
    };

    export default PaperTextbook;