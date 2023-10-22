import { useLocation, useNavigate } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import "./Staff.scss";
import "../../../App.css";
import Borisenko from "./Borisenko/Borisenko.jsx";
import Mironova from "./Mironova/Mironova.jsx";
import Shishkova from "./Shishkova/Shishkova.jsx";

const staffMembers = ["Борисенко Н.А.", "Миронова К.В.", "Шишкова С.В."];

// Defines a mapping between staff names and IDs
const staffNameToIdMap = {
  "Борисенко Н.А.": "borisenko",
  "Миронова К.В.": "mironova",
  "Шишкова С.В.": "shishkova",
};

function Staff() {
  const navigate = useNavigate();
  const location = useLocation();
  const tabId = location.pathname.split("/").pop();

  // Uses the staffNameToIdMap to get the staff ID
  const staffId = Object.values(staffNameToIdMap).find((id) => id === tabId);

  // Finds the index of the corresponding staff member based on staffId
  const staffIndex = staffMembers.findIndex(
    (name) => staffNameToIdMap[name] === staffId
  );

  // Sets the default tab index based on staffIndex
  const defaultTabIndex = staffIndex >= 0 ? staffIndex : 0;

  return (
    <div>
      <Header />
      <main>
        <Tabs
          position="relative"
          variant="unstyled"
          defaultIndex={defaultTabIndex}
          onChange={(index) => {
            const staffId = Object.values(staffNameToIdMap)[index];
            const newTabUrl = `/staff/${staffId}`;
            navigate(newTabUrl);
          }}
        >
          <TabList gap={{ base: 4, lg: 8 }}>
            {staffMembers.map((name, index) => (
              <Tab
                key={index}
                className="staff-name-tab"
                style={{ padding: "0" }}
                fontSize={{ base: "0.9rem", md: "1rem", xl: "1.2rem" }}
                lineHeight={{ base: "2rem", xl: "3rem" }}
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="1.5px"
            bg="#43129B"
            borderRadius="1px"
          />
          <TabPanels>
            {[Borisenko, Mironova, Shishkova].map((Component, index) => (
              <TabPanel key={index} padding={0} id={`staff-member-${index}`}>
                <Component />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}

export default Staff;
