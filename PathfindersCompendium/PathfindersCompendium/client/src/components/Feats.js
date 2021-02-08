import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ModalFooter,
  Row,
} from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Information from "./AC";
const Feats = ({ newSheet, handleChange }) => {
  const { getToken } = useContext(UserProfileContext);

  const { setToggle } = useContext(InformationDataContext);
  const [feats, setFeats] = useState([]);
  const [userFeats, setUserFeats] = useState([]);
  const [featToAdd, setFeat] = useState(0);

  useEffect(() => {
    GetFeats();
  }, []);
  const GetSheetFeats = (_) => {
    return getToken().then((token) =>
      fetch(`/api/featsheet/${newSheet.id}`)
        .then((res) => res.json())
        .then(setUserFeats)
    );
  };
  const getName = (s) => {
    let string = s.replace(/\s+/g, "");
    return string[0].toLowerCase() + string.slice(1);
  };
  const GetFeats = (_) => {
    return fetch("/api/feat")
      .then((res) => res.json())
      .then(setFeats);
  };
  const AddToSheet = (id) => {
    if (id === 0) {
      return;
    }
    return getToken().then((token) =>
      fetch(`/api/featsheet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sheetId: newSheet.id, featId: id }),
      })
    );
  };

  while (feats[0] === undefined) {
    return null;
  }
  return (
    <>
      <Input
        type="select"
        onChange={(e) => {
          setFeat(e.target.value);
          setToggle(getName(e.target.options[e.target.selectedIndex].text));
        }}
      >
        <option selected={0 == featToAdd} hidden>
          Please select a feat.
        </option>
        {feats.map((feat) => {
          Information[getName(`${feat.name} - ${feat.type}`)] = (
            <>
              <p>
                <b>
                  {feat.name} ({feat.type})
                </b>
              </p>
              <p>
                <i>{feat.description}</i>
              </p>
              <p>
                {feat.prerequisites != null ? (
                  <p>Prerequisites: {feat.prerequisites}</p>
                ) : null}
              </p>
              <p>
                {feat.benefit != null ? <p>Benefit: {feat.benefit}</p> : null}
              </p>
              <p>
                {feat.normal != null ? <p>Normal: {feat.normal} </p> : null}
              </p>
            </>
          );
          return (
            <option selected={feat.id == featToAdd} value={feat.id}>
              {feat.name} - {feat.type}
            </option>
          );
        })}
      </Input>
      <ListGroup>
        {userFeats.map((uf) => (
          <ListGroupItem>{uf.name}</ListGroupItem>
        ))}
      </ListGroup>
      <Button color="primary" onClick={(e) => AddToSheet(featToAdd)}>
        Add To Sheet
      </Button>
    </>
  );
};
export default Feats;
