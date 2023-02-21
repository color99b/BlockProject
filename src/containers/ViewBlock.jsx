import { useState } from "react";
import ViewBlockComponent from "../components/ViewBlock";

const ViewBlockContainer = ({ blockArr, transactionArr }) => {
  return (
    <ViewBlockComponent blockArr={blockArr} transactionArr={transactionArr} />
  );
};

export default ViewBlockContainer;
