import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ModalFooter,
  Row,
} from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Information from "./AC";

const Spells = ({ newSheet, handleChange }) => {
  const { getToken } = useContext(UserProfileContext);
  const { setToggle } = useContext(InformationDataContext);
  const [spells, setSpells] = useState([]);
  const [userSpells, setUserSpells] = useState([]);
  const [spellToAdd, setSpell] = useState(0);

  useEffect(() => {
    GetSpells();
    GetSheetSpells();
  }, []);
  useEffect(() => {}, [userSpells]);
  const GetSheetSpells = (_) => {
    return getToken().then((token) =>
      fetch(`/api/spellsheet/${newSheet.id}`)
        .then((res) => res.json())
        .then(setUserSpells)
    );
  };
  const getName = (s) => {
    let string = s.replace(/\s+/g, "");
    return string[0].toLowerCase() + string.slice(1);
  };
  const GetSpells = (_) => {
    return fetch("/api/spell")
      .then((res) => res.json())
      .then(setSpells);
  };
  const AddToSheet = (id) => {
    if (id === 0) {
      return;
    }
    return getToken().then((token) =>
      fetch(`/api/spellsheet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sheetId: newSheet.id, spellId: id }),
      })
    );
  };
  const RemoveFromSheet = (userSpell) => {
    if (userSpell.id === 0) {
      return;
    }
    return getToken().then((token) =>
      fetch(`/api/spellsheet/${userSpell.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );
  };

  while (spells[0] === undefined) {
    return null;
  }
  return (
    <>
      <Input
        type="select"
        onChange={(e) => {
          setSpell(e.target.value);
          setToggle(getName(e.target.options[e.target.selectedIndex].text));
        }}
      >
        <option selected={0 == spellToAdd} hidden>
          Please select a spell.
        </option>
        {spells.map((spell) => {
          Information[getName(spell.name)] = (
            <>
              <p>
                <b>{spell.name}</b>
              </p>
              <p>
                School: {spell.school} Level:{" "}
                {spell.bard !== "NULL" ? "Bard: " + spell.bard : null}{" "}
                {spell.cleric !== "NULL" ? "Cleric: " + spell.cleric : null}{" "}
                {spell.druid !== "NULL" ? "Druid: " + spell.druid : null}{" "}
                {spell.magus !== "NULL" ? "Magus: " + spell.magus : null}{" "}
                {spell.wiz !== "NULL" ? "Wiz/Sor: " + spell.wiz : null}{" "}
                {spell.witch !== "NULL" ? "Witch: " + spell.witch : null}{" "}
              </p>
              <p>
                <i>{spell.description}</i>
              </p>
              <p>
                {spell.prerequisites != null ? (
                  <p>Prerequisites: {spell.prerequisites}</p>
                ) : null}
              </p>
              <p>
                {spell.benefit != null ? <p>Benefit: {spell.benefit}</p> : null}
              </p>
              <p>
                {spell.normal != null ? <p>Normal: {spell.normal} </p> : null}
              </p>
            </>
          );
          return (
            <option selected={spell.id == spellToAdd} value={spell.id}>
              {spell.name}
            </option>
          );
        })}
      </Input>
      <br></br>
      <Button
        color="success"
        onClick={(e) => AddToSheet(spellToAdd).then(GetSheetSpells)}
      >
        Add To Sheet
      </Button>{" "}
      <ListGroup>
        <Row>
          {userSpells.map((uf) => (
            <>
              <Col md={2}>
                <ListGroupItem
                  onClick={(e) => setToggle(getName(uf.spell.name))}
                >
                  {uf.spell.name}
                  <Button
                    onClick={(e) => RemoveFromSheet(uf).then(GetSheetSpells)}
                  >
                    Remove
                  </Button>
                </ListGroupItem>
              </Col>
            </>
          ))}
        </Row>
      </ListGroup>
    </>
  );
};

export default Spells;
