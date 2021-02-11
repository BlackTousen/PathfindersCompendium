import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";

export const InformationDataContext = createContext();

export function InformationDataProvider(props) {
  const [toggle, setToggle] = useState("");
  return (
    <InformationDataContext.Provider value={{ toggle, setToggle }}>
      {props.children}
    </InformationDataContext.Provider>
  );
}
