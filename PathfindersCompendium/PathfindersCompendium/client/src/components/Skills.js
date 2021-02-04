import React, { useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";

const Skills = ({ skill, handleChange, newSheet }) => {
  const [tempMods, setTempMods] = useState({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  });
  const UpdateTemp = (stat = 0, e) => {
    let dump = tempMods;
    let value = parseInt(e.target.value);
    if (stat === "Strength") {
      if (isNaN(value)) {
        dump.str = 0;
      } else {
        dump.str = parseInt(value);
      }
    }
    if (stat === "Dexterity") {
      dump.dex = value;
      if (isNaN(value)) {
        dump.dex = 0;
      }
    }
    if (stat === "Constitution") {
      dump.con = value;
      if (isNaN(value)) {
        dump.con = 0;
      }
    }
    if (stat === "Wisdom") {
      dump.wis = value;
      if (isNaN(value)) {
        dump.wis = 0;
      }
    }
    if (stat === "Intelligence") {
      dump.int = value;
      if (isNaN(value)) {
        dump.int = 0;
      }
    }
    if (stat === "Charisma") {
      dump.cha = value;
      if (isNaN(value)) {
        dump.cha = 0;
      }
    }
    setTempMods(dump);
  };
  const statMath = (stat = 0, temp = 0) => {
    let result = parseInt(stat);
    result += parseInt(temp);
    return result;
  };

  return (
    <>
      <Col md={{ offset: 2 }}>
        <Row>
          <Label size="sm" md={2} for={skill}>
            {skill}
          </Label>
          <Col size="sm" sm={1}>
            <Input
              id={skill}
              name={getName(skill)}
              defaultValue={newSheet[skill]}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              value={Math.floor(
                (statMath(
                  parseInt(newSheet[getName(attribute)]),
                  parseInt(tempMods[getName(attribute)])
                ) -
                  10) /
                  2
              )}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              id={attribute}
              name={getName(attribute) + "trash"}
              defaultValue={0}
              onChange={(e) => {
                UpdateTemp(attribute, e);
                handleChange(e);
              }}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Skills;
