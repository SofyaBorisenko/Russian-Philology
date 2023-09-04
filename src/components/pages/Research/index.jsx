import React from 'react';
import { Tabs, TabIndicator, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Research.scss';
import PaperTextbook from './PaperTextbook/PaperTextbook.jsx';

function Research() {
  return (
    <div>
      <Header />
        <main>
          <h1>НАПРАВЛЕНИЯ ИССЛЕДОВАНИЙ</h1>
          <Tabs isFitted
            size={'lg'}
            position="relative"
            variant="enclosed">
            <TabList gap={1}>
              <Tab className="research-direction-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Школьный учебник <br />на бумажном носителе</Tab>
              <Tab className="research-direction-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Цифровой <br />школьный учебник</Tab>
              <Tab className="research-direction-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Чтение и <br />понимание текста</Tab>
              <Tab className="research-direction-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Школьное <br />литературоведение</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className="research-direction-panel">
                <PaperTextbook />
              </TabPanel>
              <TabPanel className="research-direction-panel">
              meh
              </TabPanel>
              <TabPanel className="research-direction-panel">
              meh
              </TabPanel>
              <TabPanel className="research-direction-panel">
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