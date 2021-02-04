import React, { useContext, useEffect, useState } from "react";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "react-tabs/style/react-tabs.css";
import Attributes from "../components/Attributes";

const HomePageManager = () => {
  const { getCurrentUser, getToken } = useContext(UserProfileContext);
  const [sheets, setSheets] = useState();
  const [classes, setClasses] = useState([]);
  const [sheetState, setSheetState] = useState(false);
  const [sheetToEdit, setEditing] = useState({});
  const user = getCurrentUser();
  const attributes = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  const skills = [
    "Acquiring Skills",
    "Acrobatics",
    "Appraise",
    "Bluff",
    "Climb",
    "Craft",
    "Diplomacy",
    "Disable Device",
    "Disguise",
    "Escape Artist",
    "Fly",
    "Handle Animal",
    "Heal",
    "Intimidate",
    "Knowledge(Arcana)",
    "Knowledge(Dungeoneering)",
    "Knowledge(Engineering)",
    "Knowledge(Geography)",
    "Knowledge(History)",
    "Knowledge(Local)",
    "Knowledge(Nature)",
    "Knowledge(Nobility)",
    "Knowledge(Planes)",
    "Knowledge(Religion)",
    "Linguistics",
    "Perception",
    "Perform",
    "Profession",
    "Ride",
    "Sense Motive",
    "Sleight of Hand",
    "Spellcraft",
    "Stealth",
    "Survival",
    "Swim",
    "Use Magic Device",
  ];

  useEffect(() => {
    getClasses().then(setClasses).then(getSheets).then(ListSheets);
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

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const ListSheets = () => {
    console.log(sheets);
    if (sheets === undefined) {
      setSheetState(false);
    } else if (sheets[0] === undefined) {
      setSheetState(false);
    } else {
      setEditing(sheets[0]);
      setSheetState(true);
    }
  };
  while (sheets === undefined) {
    console.log(sheets === undefined);
    console.log(sheetState);
    return null;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Tabs>
            {/* {sheetState ? 
            (
              <> */}
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
                    <Row>
                      <Col></Col>
                      <Col sm={6}>
                        <FormGroup>
                          <Row>
                            <Col sm={6}>
                              <Label size="sm" for="name">
                                Character Name:
                              </Label>
                              <Input
                                size="sm"
                                type="text"
                                name="name"
                                defaultValue={sheet.name}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={6}>
                              <Label size="sm" for="alignment">
                                Alignment:
                              </Label>
                              <Input
                                size="sm"
                                type="text"
                                name="alignment"
                                defaultValue={sheet.alignment}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={4}>
                              <Label for="class">Class:</Label>
                              <Input
                                size="sm"
                                type="select"
                                name="classId"
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              >
                                <option disabled hidden value={0}>
                                  Please select a class
                                </option>
                                {classes.sort(compare).map((c) => (
                                  <option
                                    value={c.id}
                                    selected={c.id === sheet.classId}
                                  >
                                    {c.name}
                                  </option>
                                ))}
                              </Input>
                            </Col>
                            <Col sm={2}>
                              <Label for="level">Level:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="level"
                                defaultValue={sheet.level}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={2}>
                              <Label for="deity">Deity:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="deity"
                                defaultValue={sheet.deity}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={4}>
                              <Label for="homeland">Homeland:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="homeland"
                                defaultValue={sheet.homeland}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={3}>
                              <Label for="race">Race:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="race"
                                defaultValue={sheet.race}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={3}>
                              <Label for="size">Size:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="size"
                                defaultValue={sheet.size}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={3}>
                              <Label for="gender">Gender:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="gender"
                                defaultValue={sheet.gender}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={3}>
                              <Label for="age">Age:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="age"
                                defaultValue={sheet.age}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={3}>
                              <Label for="height">Height:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="height"
                                defaultValue={sheet.height}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={3}>
                              <Label for="weight">Weight:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="weight"
                                defaultValue={sheet.weight}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={3}>
                              <Label for="hair">Hair:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="hair"
                                defaultValue={sheet.hair}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                            <Col sm={3}>
                              <Label for="eyes">Eyes:</Label>
                              <Input
                                size="sm"
                                type="text"
                                name="eyes"
                                defaultValue={sheet.eyes}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleChange(e);
                                }}
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      {attributes.map((att) => {
                        return (
                          <Attributes
                            key={att}
                            attribute={att}
                            handleChange={handleChange}
                            newSheet={sheetToEdit}
                          />
                        );
                      })}
                    </FormGroup>
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
            {/* </>
            ) : (
              <h1>You currently have no character sheets!</h1>
            )} */}
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
