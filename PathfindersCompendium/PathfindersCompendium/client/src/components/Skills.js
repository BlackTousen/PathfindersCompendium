import React, { useContext, useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";

const Skills = ({ skill, handleChange, newSheet }) => {
  const { setToggle } = useContext(InformationDataContext);

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

  const skillMath = (skill1, temp = 0) => {
    let result = newSheet[getName(skill1)]
      ? parseInt(newSheet[getName(skill1)])
      : 0;
    if (["Climb", "Swim"].includes(skill1)) {
      result += parseInt(newSheet.strMod);
      return result;
    }
    if (["Profession", "Survival", "Perception", "Heal"].includes(skill1)) {
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
        "Diplomacy",
      ].includes(skill1)
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
        "Knowledge(Nobility)",
        "Spellcraft",
        "Linguistics",
      ].includes(skill1)
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
        "Sleight Of Hand",
        "Stealth",
      ].includes(skill1)
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
          <Label
            size="sm"
            md={2}
            for={skill}
            onClick={(e) => setToggle(getName(skill))}
          >
            {skill}
          </Label>
          <Col size="sm" sm={1}>
            <Input
              id={skill}
              name={getName(skill)}
              defaultValue={newSheet[getName(skill)]}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input readOnly value={skillMath(skill)} />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Skills;
