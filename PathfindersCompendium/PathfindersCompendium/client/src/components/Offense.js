import React, { useContext } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";

const Offense = ({ handleChange, newSheet }) => {
  const { setToggle } = useContext(InformationDataContext);
  const CalcBAB = (num) => {
    if (num < 6) {
      return num;
    }
    if (num > 5) {
      let string = `${num}/` + (num - 5);
      if (num > 10) {
        string += `/${num - 10}`;
        if (num > 15) {
          string += `/${num - 15}`;
          return string;
        }
        return string;
      }
      return string;
    }
  };
  const CalcAttack = (aa, bb, cc) => {
    return (isNaN(aa) ? 0 : aa) + (isNaN(bb) ? 0 : bb) + (isNaN(cc) ? 0 : cc);
  };
  return (
    <>
      <Col sm={{ offset: 2 }}>
        <Row style={{ textAlign: "right" }}>
          <Label size="sm" md={2} onClick={(e) => setToggle("BAB")}>
            Base Attack Bonus:
          </Label>
          <Col size="sm" sm={1}>
            <Input
              name="bab"
              defaultValue={parseInt(newSheet.bab)}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={2}>
            <Input
              readOnly
              value={CalcBAB(
                isNaN(parseInt(newSheet.bab)) ? 0 : parseInt(newSheet.bab)
              )}
            />
          </Col>
          <Label size="sm" md={2} for="cmb" onClick={(e) => setToggle("CMB")}>
            CMB:
          </Label>
          <Col size="sm" sm={1}>
            <Input name="cmb" defaultValue={parseInt(newSheet.cmb)} />
          </Col>
        </Row>
        <Row style={{ textAlign: "right" }}>
          <Label
            size="sm"
            md={2}
            for="melee"
            onClick={(e) => setToggle("Melee")}
          >
            Melee:
          </Label>
          <Col size="sm" sm={1}>
            <Input
              title="Melee Mod"
              name="melee"
              defaultValue={newSheet.melee}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              title="Strength Mod + Melee Mod + Temp Mod"
              readOnly
              value={CalcAttack(
                Math.floor((parseInt(newSheet.str) - 10) / 2),
                parseInt(newSheet.melee),
                isNaN(parseInt(newSheet.tempMelee))
                  ? 0
                  : parseInt(newSheet.tempMelee)
              )}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              title="Temp Melee Mod"
              name="tempMelee"
              defaultValue={0}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Label size="sm" md={2} for="ranged">
            Ranged:
          </Label>
          <Col size="sm" sm={1}>
            <Input
              title="Ranged Mod"
              name="ranged"
              defaultValue={newSheet.ranged}
              onChange={(e) => handleChange(e)}
            />
          </Col>

          <Col size="sm" sm={1}>
            <Input
              readOnly
              title="Dexterity Mod + Ranged Modifier"
              value={CalcAttack(
                Math.floor((parseInt(newSheet.dex) - 10) / 2),
                parseInt(newSheet.ranged),
                isNaN(parseInt(newSheet.tempRanged))
                  ? 0
                  : parseInt(newSheet.tempRanged)
              )}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              title="Temp Ranged Mod"
              name="tempRanged"
              defaultValue={0}
              onChange={(e) => handleChange(e)}
            />
          </Col>
        </Row>
        <Row style={{ textAlign: "right" }}>
          <Label size="sm" md={2} for="cmd" onClick={(e) => setToggle("CMD")}>
            CMD:
          </Label>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              title="Dexterity Mod + Strength Modifier + BAB"
              value={CalcAttack(
                parseInt(newSheet.dexMod) + parseInt(newSheet.strMod),
                parseInt(newSheet.bab),
                isNaN(parseInt(newSheet.tempCMD))
                  ? 0
                  : parseInt(newSheet.tempCMD)
              )}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              title="Temp CMD"
              name="tempCMD"
              defaultValue={0}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Label
            size="sm"
            md={2}
            for="spellResistance"
            onClick={(e) => setToggle("SR")}
          >
            Spell Resistance:
          </Label>
          <Col size="sm" sm={1} name="spellResistance">
            <Input
              name="spellReistance"
              defaultValue={newSheet.spellResistance}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Offense;
