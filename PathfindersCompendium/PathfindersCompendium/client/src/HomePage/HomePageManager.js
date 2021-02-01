import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";

const HomePageManager = () => {
  const { getCurrentUser, getToken } = useContext(UserProfileContext);
  const [sheets, setSheets] = useState([]);
  const [sheetState, setSheetState] = useState(false);

  useEffect(() => {
    return getSheets();
  }, []);

  const getSheets = () => {
    return getToken().then((token) => {
      console.log(token);
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

  const ListSheets = () => {
    if (sheets[0] === undefined) {
      setSheetState(false);
    } else {
      setSheetState(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {sheetState ? (
            <>
              <h1>Character Sheets:</h1>
              {sheets.map((sheet) => {
                return sheet.name;
              })}
            </>
          ) : (
            <h1>You Currently have no character sheets!</h1>
          )}
          {sheets[3] === undefined ? (
            <Button color="primary" onClick={(e) => e.preventDefault()}>
              Add Character
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default HomePageManager;
