import { Tabs, TabList, TabPanels, Tab, TabIndicator, TabPanel } from '@chakra-ui/react';
import '../Research.scss';
import '../../../../App.css';
import PrimarySchool from './PrimarySchool';
import SecondarySchool from './SecondarySchool';

function PaperTextbook() {
    return (
        <div>
            <Tabs
            isLazy
            position="relative"
            variant="unstyled"
            >
                <TabList gap={{ base: 4, lg: 8 }}>
                {[
                    'НАЧАЛЬНАЯ ШКОЛА',
                    'ОСНОВНАЯ ШКОЛА',
                ].map((label, index) => (
                    <Tab
                    key={index}
                    className='school-tab'
                    style={{ padding: '0' }}
                    fontSize={{ base: '0.75rem', sm: '0.8rem', md: '0.9rem', lg: '1rem', xl: '1.1rem' }}
                    >
                    {label}
                    </Tab>
                ))}
                </TabList>
                <TabIndicator mt="-1.5px" height="1.5px" bg="#43129B" borderRadius="1px" />
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