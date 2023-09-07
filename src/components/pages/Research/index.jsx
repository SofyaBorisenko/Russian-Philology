import React from 'react';
import { Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Research.scss';
import PaperTextbook from './PaperTextbook/PaperTextbook.jsx';

function Research() {
  return (
    <div>
      <Header />
        <main>
          <Heading className="research-heading">НАПРАВЛЕНИЯ ИССЛЕДОВАНИЙ</Heading>
          <Tabs isFitted
            position="relative"
            variant="enclosed"
            size={{base: 'sm', sm: 'sm', md: 'sm', lg: 'md', xl: 'md', '2xl': 'lg'}}>
            <TabList gap={1}>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Школьный учебник <br />на бумажном носителе</Tab>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Цифровой <br />школьный учебник</Tab>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Чтение и <br />понимание текста</Tab>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Школьное <br />литературоведение</Tab>
            </TabList>
            <TabPanels>
              <TabPanel style={{ padding: '1rem 0 0 0' }}>
                <PaperTextbook />
              </TabPanel>
              <TabPanel style={{ padding: '1rem 0 0 0' }}>
              meh
              </TabPanel>
              <TabPanel style={{ padding: '1rem 0 0 0' }}>
              meh
              </TabPanel>
              <TabPanel style={{ padding: '1rem 0 0 0' }}>
              meh
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>
      <Footer />
    </div>
  );
}

export default Research;