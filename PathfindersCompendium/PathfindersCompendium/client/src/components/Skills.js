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
  const getName = (s) => {
    if (s === "Knowledge(Arcana)") {
      return "knowledgeArcana";
    }
    if (s === "Knowledge(Dungeoneering)") {
      return "knowledgeDungeoneering";
    }
    if (s === "Knowledge(Engineering)") {
      return "knowledgeEngineering";
    }
    if (s === "Knowledge(Geography)") {
      return "knowledgeGeography";
    }
    if (s === "Knowledge(History)") {
      return "knowledgeHistory";
    }
    if (s === "Knowledge(Local)") {
      return "knowledgeLocal";
    }
    if (s === "Knowledge(Nature)") {
      return "knowledgeNature";
    }
    if (s === "Knowledge(Nobility)") {
      return "knowledgeNobility";
    }
    if (s === "Knowledge(Planes)") {
      return "knowledgePlanes";
    }
    if (s === "Knowledge(Religion)") {
      return "knowledgeReligion";
    }
    let string = s.replace(/\s+/g, "");
    return string[0].toLowerCase() + string.slice(1);
  };

  // const UpdateTemp = (skill = 0, e) => {
  //   let dump = tempMods;
  //   let value = parseInt(e.target.value);
  //   if (stat === "Strength") {
  //     if (isNaN(value)) {
  //       dump.str = 0;
  //     } else {
  //       dump.str = parseInt(value);
  //     }
  //   }
  //   if (stat === "Dexterity") {
  //     dump.dex = value;
  //     if (isNaN(value)) {
  //       dump.dex = 0;
  //     }
  //   }
  //   if (stat === "Constitution") {
  //     dump.con = value;
  //     if (isNaN(value)) {
  //       dump.con = 0;
  //     }
  //   }
  //   if (stat === "Wisdom") {
  //     dump.wis = value;
  //     if (isNaN(value)) {
  //       dump.wis = 0;
  //     }
  //   }
  //   if (stat === "Intelligence") {
  //     dump.int = value;
  //     if (isNaN(value)) {
  //       dump.int = 0;
  //     }
  //   }
  //   if (stat === "Charisma") {
  //     dump.cha = value;
  //     if (isNaN(value)) {
  //       dump.cha = 0;
  //     }
  //   }
  //   setTempMods(dump);
  // };
  const skillMath = (skill, temp = 0) => {
    let result = newSheet[getName(skill)]
      ? parseInt(newSheet[getName(skill)])
      : 0;
    if (["Climb", "Swim"].includes(skill)) {
      result += parseInt(newSheet.strMod);
      return result;
    }
    if (["Profession", "Survival"].includes(skill)) {
      result += parseInt(newSheet.wisMod);
      return result;
    }
    if (
      [
        "Use Magic Device",
        "Perform",
        "Intimidate",
        "Handle Animal",
        "Bluff",
        "Disguise",
      ].includes(skill)
    ) {
      result += parseInt(newSheet.chaMod);
      return result;
    }
    if (
      [
        "Appraise",
        "Craft",
        "Knowledge(Arcana)",
        "Knowledge(Dungeoneering)",
        "Knowledge(Engineering)",
        "Knowledge(Geography)",
        "Knowledge(History)",
        "Knowledge(Local)",
        "Knowledge(Nature)",
        "Knowledge(Planes)",
        "Knowledge(Religion)",
        "Spellcraft",
      ].includes(skill)
    ) {
      result += parseInt(newSheet.intMod);
      return result;
    }
    if (
      [
        "Acrobatics",
        "Disable Device",
        "Escape Artist",
        "Fly",
        "Ride",
        "Sleight of Hand",
        "Stealth",
      ].includes(skill)
    ) {
      result += parseInt(newSheet.dexMod);
      return result;
    }
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
              value={skillMath(skill, parseInt(tempMods[getName(skill)]))}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Skills;
