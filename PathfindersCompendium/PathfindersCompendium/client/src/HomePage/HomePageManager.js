import React, { useContext, useEffect, useState } from "react";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import { Container, Row, Col, Button, Form, Label, Input } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "react-tabs/style/react-tabs.css";

const HomePageManager = () => {
  const { getCurrentUser, getToken } = useContext(UserProfileContext);
  const [sheets, setSheets] = useState();
  const [sheetState, setSheetState] = useState(false);
  const [sheetToEdit, setEditing] = useState({});
  const user = getCurrentUser();

  useEffect(() => {
    getSheets();
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
        .then(setSheets)
        .then(ListSheets);
    });
  };
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
  const SaveCharacter = (sheet) => {
    return getToken().then((token) => {
      return fetch(`/api/CharacterSheet/${sheet.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sheet),
      });
    });
  };
  const handleChange = (e) => {
    const newSheet = { ...sheetToEdit };
    newSheet[e.target.name] = e.target.value;
    setEditing(newSheet);
  };
  const ListSheets = () => {
    console.log(sheets);
    if (sheets === undefined) {
      setSheetState(false);
    } else if (sheets[0] === undefined) {
      setSheetState(false);
    } else {
      setSheetState(true);
    }
  };
  while (sheets === undefined) {
    return null;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Tabs>
            {sheetState ? (
              <>
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
                      <Form>
                        <Label for="name">Character Name:</Label>
                        <Input
                          type="text"
                          name="name"
                          defaultValue={`${sheet.name}`}
                          onChange={(e) => {
                            e.preventDefault();
                            handleChange(e);
                          }}
                        />
                        <Button
                          onClick={(e) =>
                            SaveCharacter(sheetToEdit).then(getSheets)
                          }
                        >
                          Save Changes
                        </Button>
                      </Form>
                    </TabPanel>
                  );
                })}
              </>
            ) : (
              <h1>You currently have no character sheets!</h1>
            )}
            {sheets[3] === undefined ? (
              <Button
                color="primary"
                onClick={(e) => AddCharacter().then(getSheets)}
              >
                Add Character
              </Button>
            ) : null}
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePageManager;
