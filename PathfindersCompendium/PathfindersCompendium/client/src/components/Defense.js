import React, { useContext, useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";

const Defense = ({ handleChange, newSheet }) => {
  const { setToggle } = useContext(InformationDataContext);
  const CalcAC = (num) => {
    const stat = isNaN(num) ? 0 : parseInt(num);
    return 10 + stat;
  };
  const CalcSave = (save, mod) => {
    let save1 = isNaN(save) ? 0 : parseInt(save);
    let mod1 = isNaN(mod) ? 0 : parseInt(mod);
    return mod1 + save1;
  };
  return (
    <>
      <Col sm={{ offset: 2 }}>
        <Row>
          <Label size="sm" md={2} onClick={(e) => setToggle("AC")}>
            AC
          </Label>
          <Col size="sm" sm={1}>
            <Input readOnly value={CalcAC(parseInt(newSheet.ac))} />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              // type="number"
              defaultValue={0}
              name="ac"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Label size="sm" md={2} for="touchAC">
            Touch
          </Label>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              name="touchAC"
              value={CalcAC(parseInt(newSheet.dexMod))}
            />
          </Col>
          <Label size="sm" md={2} for="flatFootAC">
            Flat-Footed
          </Label>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              name="flatFootAC"
              value={CalcAC(parseInt(newSheet.ac))}
            />
          </Col>
        </Row>
        <Row>
          <Label
            size="sm"
            md={2}
            for="fortSave"
            onClick={(e) => setToggle("SavingThrows")}
          >
            Fortitude
          </Label>
          <Col size="sm" sm={1}>
            <Input
              name="fortSave"
              defaultValue={newSheet.fortSave}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              value={CalcSave(
                parseInt(newSheet.fortSave),
                parseInt(newSheet.conMod)
              )}
            />
          </Col>
          <Label
            size="sm"
            md={2}
            for="refSave"
            onClick={(e) => setToggle("SavingThrows")}
          >
            Reflex
          </Label>
          <Col size="sm" sm={1}>
            <Input
              name="refSave"
              defaultValue={newSheet.refSave}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              value={CalcSave(
                parseInt(newSheet.refSave),
                parseInt(newSheet.dexMod)
              )}
            />
          </Col>
          <Label
            size="sm"
            md={2}
            for="willSave"
            onClick={(e) => setToggle("SavingThrows")}
          >
            Will
          </Label>
          <Col size="sm" sm={1}>
            <Input
              defaultValue={newSheet.willSave}
              name="willSave"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              value={CalcSave(
                parseInt(newSheet.willSave),
                parseInt(newSheet.wisMod)
              )}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Defense;
