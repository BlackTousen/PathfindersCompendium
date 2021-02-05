import React, { useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";

const Defense = ({ handleChange, newSheet }) => {
  return (
    <>
      <Col sm={{ offset: 2 }}>
        <Row>
          <Label size="sm" md={2}>
            AC
          </Label>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              value={
                parseInt(newSheet.dexMod) + isNaN(parseInt(newSheet.ac))
                  ? 0 + 10
                  : parseInt(newSheet.ac) + 10
              }
            />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              type="number"
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
              value={10 + parseInt(newSheet.dexMod)}
            />
          </Col>
          <Label size="sm" md={2} for="flatFootAC">
            Flat-Footed
          </Label>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              name="flatFootAC"
              value={
                10 + isNaN(parseInt(newSheet.ac)) ? 0 : parseInt(newSheet.ac)
              }
            />
          </Col>
        </Row>
        <Row>
          <Label size="sm" md={2} for="fortSave">
            Fortitude
          </Label>
          <Col size="sm" sm={1} name="fortSave">
            <Input defaultValue={newSheet.fortSave} />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              defaultValue={
                isNaN(parseInt(newSheet.fortSave))
                  ? 0 + parseInt(newSheet.conMod)
                  : parseInt(newSheet.fortSave) + parseInt(newSheet.conMod)
              }
            />
          </Col>
          <Label size="sm" md={2} for="refSave">
            Reflex
          </Label>
          <Col size="sm" sm={1}>
            <Input name="refSave" defaultValue={newSheet.refSave} />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              defaultValue={
                isNaN(parseInt(newSheet.refSave))
                  ? 0 + parseInt(newSheet.dexMod)
                  : parseInt(newSheet.refSave) + parseInt(newSheet.dexMod)
              }
            />
          </Col>
          <Label size="sm" md={2} for="willSave">
            Will
          </Label>
          <Col size="sm" sm={1} name="willSave">
            <Input name="flatFootAC" defaultValue={newSheet.willSave} />
          </Col>
          <Col size="sm" sm={1}>
            <Input
              readOnly
              defaultValue={
                isNaN(parseInt(newSheet.willSave))
                  ? 0 + parseInt(newSheet.wisMod)
                  : parseInt(newSheet.willSave) + parseInt(newSheet.wisMod)
              }
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default Defense;
