import React from 'react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Staff.css';
import { Tabs, TabIndicator, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Borisenko from './Borisenko/BorisenkoFull.jsx';

function Staff() {
  return (
    <div>
      <Header />
      <main>
      <Tabs
      size={'lg'}
      position="relative"
      variant="unstyled"
      >
            <TabList>
              <Tab className="nav-tab" padding={0}>Борисенко Н.А.</Tab>
              <Tab className="nav-tab" padding={0}>Миронова К.В.</Tab>
              <Tab className="nav-tab" padding={0}>Шишкова С.В.</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="1.5px"
              bg="#43129B"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel padding={0}>
                <Borisenko />
              </TabPanel>
              <TabPanel padding={0}>
              meh
              </TabPanel>
              <TabPanel padding={0}>
              meh
              </TabPanel>
            </TabPanels>
          </Tabs>
      </main>
      <Footer />
    </div>
  );
}

export default Staff;