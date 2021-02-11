import React, { useContext, useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";

const Attributes = ({ attribute, handleChange, newSheet }) => {
  const { setToggle } = useContext(InformationDataContext);
  const [tempMods, setTempMods] = useState({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  });
  const GetValue = (stat) => {
    if (stat === "Strength") {
      return newSheet.str;
    }
    if (stat === "Constitution") {
      return newSheet.con;
    }
    if (stat === "Dexterity") {
      return newSheet.dex;
    }
    if (stat === "Wisdom") {
      return newSheet.wis;
    }
    if (stat === "Charisma") {
      return newSheet.cha;
    }
    if (stat === "Intelligence") {
      return newSheet.int;
    }
  };
  const getName = (stat) => {
    return stat[0].toLowerCase() + stat.slice(1, 3);
  };
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
        <Row style={{ textAlign: "left" }}>
          <Label
            size="sm"
            md={2}
            for={attribute}
            onClick={(e) => setToggle(getName(attribute))}
          >
            {attribute}
          </Label>
          <Col size="sm" sm={2}>
            <Input
              id={attribute}
              name={getName(attribute)}
              defaultValue={GetValue(attribute)}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={2}>
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
          <Col size="sm" sm={2}>
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
export default Attributes;
