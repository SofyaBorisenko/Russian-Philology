import React from 'react';
import { Tabs, TabIndicator, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Research.css';

function Research() {
  return (
    <div>
      <Header />
        <main>
          <h1>НАПРАВЛЕНИЯ ИССЛЕДОВАНИЙ</h1>
          <Tabs position="relative" variant="unstyled">
            <TabList className='nav-research'>
              <Tab className="nav-tab">Школьный учебник <br />на бумажном носителе</Tab>
              <Tab className="nav-tab">Цифровой <br />школьный учебник</Tab>
              <Tab className="nav-tab">Чтение и понимание <br />текста</Tab>
              <Tab className="nav-tab">Школьное <br />литературоведение</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="1.5px"
              bg="#FE205A"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel className='research-area'>
              meh
              </TabPanel>
              <TabPanel className='research-area'>
              meh
              </TabPanel>
              <TabPanel className='research-area'>
              meh
              </TabPanel>
              <TabPanel className='research-area'>
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