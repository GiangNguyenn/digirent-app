import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import TabButton from "./TabButton";
import { UserProfile } from "../../../../pages";

const UserTab = () => {
  return (
    <Box>
      <Flex alignContent="center" justifyContent="center">
        <Tabs alignItems="center">
          <TabList>
            <TabButton directUrl="/user/profile" tabItem="General" />
            <TabButton directUrl="/maintain" tabItem="Management" />
            <TabButton directUrl="/maintain" tabItem="Favorite" />
          </TabList>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default UserTab;
