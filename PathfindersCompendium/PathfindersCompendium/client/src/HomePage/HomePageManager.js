import React, { useContext, useEffect, useState } from "react";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Container, Row, Col, Button } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";
import CharacterSheet from "../components/CharacterSheet";

const HomePageManager = () => {
  const { getCurrentUser, getToken } = useContext(UserProfileContext);
  const [sheets, setSheets] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sheetState, setSheetState] = useState(false);
  const [sheetToEdit, setEditing] = useState({});
  const user = getCurrentUser();

  useEffect(() => {
    getClasses()
      .then(setClasses)
      .then(getSheets)
      .then((res) => {
        ListSheets();
      });
  }, []);
  useEffect(() => {}, [sheets]);

  const getSheets = () => {
    return getToken().then((token) => {
      return fetch(`/api/CharacterSheet`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(setSheets);
    });
  };
  const getClasses = () => fetch(`/api/Classes`).then((res) => res.json());

  // const RandomName = () => {
  //   return fetch(
  //     "https://api.parser.name/?api_key=0e74eae57d4d7452eb110bd568342372&endpoint=generate"
  //   ).then((res) => res.json());
  // };
  const AddCharacter = () => {
    return getToken().then((token) => {
      return fetch(`/api/CharacterSheet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          useProfileId: user.id,
          name: "Default",
          classId: 1,
        }),
      });
    });
  };

  const ListSheets = () => {
    if (sheets === undefined) {
      setSheetState(false);
      // return;
    }
    if (sheets[0] === undefined) {
      setSheetState(false);
      // return;
    }
    setEditing(sheets[0]);
    setSheetState(true);
  };

  while (sheets === undefined) {
    return null;
  }

  return (
    <>
      {sheetState ? (
        <Container>
          <Row>
            <Col>
              <Tabs>
                <TabList>
                  {sheets.map((sheet) => {
                    return (
                      <Tab onClick={(e) => setEditing(sheet)} value={sheet.id}>
                        {sheet.name}
                      </Tab>
                    );
                  })}
                </TabList>
                {sheets.map((sheet) => {
                  return (
                    <TabPanel>
                      <CharacterSheet
                        key={sheet.id}
                        sheet={sheet}
                        setEditing={setEditing}
                        sheetToEdit={sheetToEdit}
                        getSheets={getSheets}
                        classes={classes}
                      />
                    </TabPanel>
                  );
                })}
                {sheets[3] === undefined ? (
                  <>
                    <br></br>
                    <Button
                      color="primary"
                      onClick={(e) => AddCharacter().then(getSheets)}
                    >
                      Add Character
                    </Button>
                  </>
                ) : null}
              </Tabs>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <h1>You currently have no character sheets!</h1>
          {ListSheets()}
          <Button
            color="primary"
            onClick={(e) => AddCharacter().then(getSheets)}
          >
            Add Character
          </Button>
        </>
      )}
    </>
  );
};
export default HomePageManager;
