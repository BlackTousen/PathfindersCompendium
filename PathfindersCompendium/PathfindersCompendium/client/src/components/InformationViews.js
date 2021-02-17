import React, { useContext, useState } from "react";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import { Container, ListGroupItemHeading } from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Information from "./AC";
import GetStarted from "./GetStarted";

const InformationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext);
  const { isAdmin } = useContext(UserProfileContext);
  const [dataArray, setDataArray] = useState(Information);
  const { setToggle } = useContext(InformationDataContext);
  const { toggle } = useContext(InformationDataContext);

  return (
    <>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Get Started</Tab>
            <Tab>Information</Tab>
            <Tab>Search</Tab>{" "}
          </TabList>
          <TabPanel>
            <GetStarted />
          </TabPanel>
          <TabPanel>
            <div style={{ textAlign: "left" }}>{dataArray[toggle]}</div>
          </TabPanel>
          <TabPanel>
            <ListGroupItemHeading>Not Yet Implemented</ListGroupItemHeading>
          </TabPanel>
        </Tabs>
      </Container>
    </>
  );
};

export default InformationViews;
