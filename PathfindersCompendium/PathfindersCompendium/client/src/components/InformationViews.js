import React, { useContext, useState } from "react";
import { Container } from "reactstrap";
import { InformationDataContext } from "../providers/InformationDataProvider";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Information from "./AC";

const InformationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext);
  const { isAdmin } = useContext(UserProfileContext);
  const [dataArray, setDataArray] = useState(Information);
  const { setToggle } = useContext(InformationDataContext);
  const { toggle } = useContext(InformationDataContext);

  return (
    <>
      <Container>
        <div style={{ textAlign: "left" }}>{dataArray[toggle]}</div>
      </Container>
    </>
  );
};

export default InformationViews;
